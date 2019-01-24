import * as firebase from 'firebase';
// @ts-ignore
import app from 'firebase/app';
import { config, uriPrams } from './firebase.conf';

app.initializeApp(config);
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters(uriPrams);

const auth = firebase.auth();
const postsRef = firebase.database().ref('/posts');
const tagsRef = firebase.database().ref('/tags');

export {
  provider,
  auth,
  postsRef,
  tagsRef
}

