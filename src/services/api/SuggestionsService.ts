import { Observable } from 'rxjs';

export default interface SuggestionsServiceDefinition {
  analyze$(analyze: Observable<AnalyzeRequest>): Observable<AnalyzeResponse>,

  autoComplete$(autoComplete: AutoCompleteRequest): Observable<AutoCompleteResponse>
}

export interface AnalyzeRequest {
  text : string
}

export interface AnalyzeResponse {
  suggestions : string[]
}

export interface AutoCompleteRequest {
  text : string
}

export interface AutoCompleteResponse {
  suggestions : string[]
}


