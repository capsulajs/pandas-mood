import * as firebase from 'firebase';
import { config, uriPrams } from './firebase.conf';
// @ts-ignore
import app from 'firebase/app';

import AuthServiceDefinition, {
  AutoLoginPopupRequest,
  AutoLoginPopupResponse,
  GetUserRequest,
  GetUserResponse
} from '../api/AuthService';

app.initializeApp(config);
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters(uriPrams);

export default class AuthService implements AuthServiceDefinition {
  private isLoggedIn: boolean = false;
  private userData: object = {};

  public autoLoginPopup(autoLoginPopup: AutoLoginPopupRequest): Promise<AutoLoginPopupResponse> {
    return new Promise((resolve, reject) => {
      firebase.auth().signInWithPopup(provider)
        .then(({ credential, user }) => {

          if (user) {
            this.isLoggedIn = true;
            this.userData = user;
            resolve({ msg: 'success', user });
          } else {
            reject({ msg: 'fail' })
          }
        });
    });
  }

  public getUser(getUserRequest: GetUserRequest): Promise<GetUserResponse> {
    return new Promise((resolve, reject) => {
      this.isLoggedIn ? resolve(this.userData) : reject({})
    });
  }
}
