import AuthServiceDefinition, {
  AutoLoginRequest,
  AutoLoginResponse,
  StatusRequest,
  StatusResponse
} from '../api/AuthService';
import { Observable } from 'rxjs';
import { getFirebaseItem } from '../utils/firebase';

export default class AuthService implements AuthServiceDefinition {
  private isLoggedIn: boolean = false;
  private userData: object = {};
  private auth: any;
  private provider: any;

  constructor() {
    this.auth = getFirebaseItem('auth');
    this.provider = getFirebaseItem('provider');
  }

  public autoLogin(autoLogin: AutoLoginRequest): Promise<AutoLoginResponse> {
    return new Promise((resolve, reject) => {
      this.auth.signInWithPopup(this.provider)
        .then((authData: any) => {
          const { user }: any = authData;
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

      const subscription = this.auth.onAuthStateChanged((user: any) => {
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
