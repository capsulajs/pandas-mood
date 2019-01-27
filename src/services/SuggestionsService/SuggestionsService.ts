import SuggestionsServiceDefinition, {
  AnalyzeRequest,
  AnalyzeResponse,
  AutoCompleteRequest, AutoCompleteResponse
} from '../api/SuggestionsService';

import { tagsRef } from '../utils/firebase';
import { Observable, ReplaySubject } from 'rxjs';
import { mergeMap, filter, multicast, refCount, scan } from 'rxjs/operators';

export default class SuggestionsService implements SuggestionsServiceDefinition {
  public tags$: Observable<string[]>;

  public analyze$(analyze: Observable<AnalyzeRequest>): Observable<AnalyzeResponse> {
    return Observable.create()
  }

  public autoComplete$(autoComplete: AutoCompleteRequest): Observable<AutoCompleteResponse> {
    if (!this.tags$) {
      this.tags$ = Observable.create((observer: any) => {
        tagsRef.on('value', (tagsDB) => {
          if (!tagsDB) {
            observer.error('Unable to retrieve tag list');
          } else {
            observer.next([].concat(tagsDB.val()));
          }
        });

        return () => {
          tagsRef.off('value');
        }

      }).pipe(
        multicast(() => new ReplaySubject(1)),
        refCount()
      );
    }

    return this.tags$.pipe(
      mergeMap(tag => tag),
      filter((tag) => autoComplete.text !== '' && tag.includes(autoComplete.text)),
      scan((acc: AutoCompleteResponse, val: string) => ({ suggestions: [...acc.suggestions, val] }), { suggestions: [] })
    );
  }
}
