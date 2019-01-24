import SuggestionsServiceDefinition, {
  AnalyzeRequest,
  AnalyzeResponse,
  AutoCompleteRequest, AutoCompleteResponse
} from '../api/SuggestionsService';

import { tagsRef } from '../utils/firebase';
import { from, Observable } from 'rxjs';
import { filter } from "rxjs/operators";

export default class SuggestionsService implements SuggestionsServiceDefinition {
  public analyze$(analyze: Observable<AnalyzeRequest>): Observable<AnalyzeResponse> {
    return Observable.create()
  }

  public autoComplete$(autoComplete: AutoCompleteRequest): Observable<AutoCompleteResponse> {
    return Observable.create((observer: any) => {
      tagsRef.on('value', (tags) => {
        if (!tags) {
          observer.error('Unable to retrieve tag list');
        } else {
          const historyTags = autoComplete.text === '' ? [] : tags.val();

          // from(historyTags).pipe(
          //   filter((val: string) => val.includes(autoComplete.text))
          // );

          observer.next(historyTags);
        }
      });
    });
  }
}
