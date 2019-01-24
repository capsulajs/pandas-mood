import { Observable } from 'rxjs';

export default interface AuthServiceDefinition {
  autoLogin(autoLogin: AutoLoginRequest): Promise<AutoLoginResponse>,

  status$(statusRequest: StatusRequest): Observable<StatusResponse>
}

export interface AutoLoginRequest {
}

export interface AutoLoginResponse {
  displayName: string,
  email: string,
  avatar: string
}

export interface StatusRequest {

}

export interface StatusResponse {
  isLoggedIn : boolean
}


