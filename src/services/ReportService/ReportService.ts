import * as firebase from 'firebase';
import { Observable } from 'rxjs';

import {
  ReportService as ReportServiceInterface,
  ReportRequest,
  ReportResponse,
} from '../api/ReportService';

export default class ReportService implements ReportServiceInterface {
  public report(reportRequest: ReportRequest): Observable<ReportResponse> {
    let initialEmit: boolean = false;
    return Observable.create((observer: any) => {
      firebase.database().ref('/posts').on('value', (snapshot: any) => {
        const postsMap = snapshot.val();
        const posts = Object.keys(postsMap).map(hash => postsMap[hash]);
        if (!initialEmit) {
          initialEmit = true;
          posts.forEach((post) => {
            observer.next(post);
          })
        } else {
          observer.next(posts[posts.length - 1]);
        }
      });
    });
  }
}
