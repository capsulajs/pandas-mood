import * as firebase from 'firebase';
// @ts-ignore
import app from 'firebase/app';
import { config, uriPrams } from './firebase.conf';

const firebaseItems: any = {};

export const initializeFirebase = () => {
  app.initializeApp(config);
  firebaseItems.provider = new firebase.auth.GoogleAuthProvider();
  firebaseItems.provider.setCustomParameters(uriPrams);
  firebaseItems.auth = firebase.auth();
  firebaseItems.postsRef = firebase.database().ref('/posts');
};

export const getFirebaseItem = (itemName: any) => {
  const item = firebaseItems[itemName];
  console.log('itemName', itemName);
  console.log('firebaseItems', firebaseItems);
  if (!item) {
    throw new Error('You have to initiate Firebase firstly');
  }
  return item;
};

export default {
  initializeFirebase,
  getFirebaseItem
};
