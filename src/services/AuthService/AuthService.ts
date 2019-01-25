import AuthServiceDefinition, {
  AutoLoginRequest,
  AutoLoginResponse,
  StatusRequest,
  StatusResponse
} from '../api/AuthService';
import { Observable } from 'rxjs';
import {provider, auth} from '../utils/firebase';

export default class AuthService implements AuthServiceDefinition {
  private isLoggedIn: boolean = false;
  private userData: object = {};

  public autoLogin(autoLogin: AutoLoginRequest): Promise<AutoLoginResponse> {
    return new Promise((resolve, reject) => {
      auth.signInWithPopup(provider)
        .then(({ credential, user }) => {

          if (user) {
            this.isLoggedIn = true;
            this.userData = user;
            resolve({
              displayName: user.displayName || '',
              email: user.email || '',
              avatar: user.photoURL || ''
            });
          } else {
            reject({})
          }
        });
    });
  }


  public status$(statusRequest: StatusRequest): Observable<StatusResponse> {
    return Observable.create((observer: any) => {

      const subscription = auth.onAuthStateChanged((user) => {
        if (user) {
          this.isLoggedIn = true;
          this.userData = user;
        }

        observer.next({ isLoggedIn: this.isLoggedIn });

      });
      return () => {
        subscription();
      }
    })

  }
}
