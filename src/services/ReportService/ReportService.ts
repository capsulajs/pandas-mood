import { Observable, ReplaySubject, from, iif, of } from 'rxjs';
import { multicast, refCount, mergeMap, filter, tap, map } from 'rxjs/operators';

import {
  ReportService as ReportServiceInterface,
  ReportRequest,
  ReportResponse,
} from '../api/ReportService';
import { Posts } from '../api/Posts';
import { postsRef } from '../utils/firebase'

export default class ReportService implements ReportServiceInterface {
  public posts$: Observable<Posts>;

  public report(reportRequest: ReportRequest): Observable<ReportResponse> {
    let isInitialEmit: boolean = true;
    if (!this.posts$) {
      this.posts$ = Observable
        .create((observer: any) => {
          postsRef.on('value', (snapshot: any) => {
            const postsMap = snapshot.val();
            const posts = Object.keys(postsMap).map(hash => postsMap[hash]);
            observer.next({ posts });
          });

          return () => {
            postsRef.off('value');
          }
      })
        .pipe(
          multicast(() => new ReplaySubject(1)),
          refCount()
        );
    }

    return this.posts$
      .pipe(
        mergeMap((data: Posts) => iif(
          () => isInitialEmit,
          from(data.posts).pipe(filter(reportRequest.filterFn)),
          of(data.posts[data.posts.length - 1]).pipe(filter(reportRequest.filterFn))
        )),
        map(post => ({ post })),
        tap(() => {
          if (isInitialEmit) {
            isInitialEmit = false;
          }
        })
      );
  }
}
