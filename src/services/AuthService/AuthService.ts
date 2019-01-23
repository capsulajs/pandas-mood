import * as firebase from 'firebase';
import { config, uriPrams } from './firebase.conf';
// @ts-ignore
import app from 'firebase/app';

import AuthServiceDefinition, {
  AutoLoginPopupRequest,
  AutoLoginPopupResponse,
  GetUserRequest,
  GetUserResponse,
  StatusRequest,
  StatusResponse
} from '../api/AuthService';

app.initializeApp(config);
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters(uriPrams);
const auth = firebase.auth();

export default class AuthService implements AuthServiceDefinition {
  private isLoggedIn: boolean = false;
  private userData: object = {};

  public autoLoginPopup(autoLoginPopup: AutoLoginPopupRequest): Promise<AutoLoginPopupResponse> {
    return new Promise((resolve, reject) => {
      auth.signInWithPopup(provider)
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

  public status(statusRequest: StatusRequest): Promise<StatusResponse> {
    return new Promise((resolve, reject) => {
      auth.onAuthStateChanged((user) => {
        if (user) {
          this.isLoggedIn = true;
          this.userData = user;
          resolve({ isLoggedIn: this.isLoggedIn })
        } else {
          resolve({ isLoggedIn: this.isLoggedIn })
        }
      });
    });
  }
}
