import SuggestionsServiceDefinition, {
  AnalyzeRequest,
  AnalyzeResponse,
  AutoCompleteRequest, AutoCompleteResponse
} from '../api/SuggestionsService';
import { Observable } from 'rxjs';
import * as firebase from 'firebase';

export default class SuggestionsService implements SuggestionsServiceDefinition {
  public analyze$(analyze: Observable<AnalyzeRequest>): Observable<AnalyzeResponse> {
    return Observable.create()
  }

  public autoComplete$(autoComplete: AutoCompleteRequest): Observable<AutoCompleteResponse> {

    const tagsRef = firebase.database().ref('/tags');


    return Observable.create(observer => {
      tagsRef.on('value', (tags) => {
        if (!tags) {
          observer.error('Unable to retrieve tag list');
        } else {
          observer.next(tags.val());
        }
      });
    })
  }
}
