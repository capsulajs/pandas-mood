import * as React from 'react';
import * as ReactDOM from 'react-dom';
// @ts-ignore
import app from 'firebase/app';
import * as firebase from 'firebase';
// import 'firebase/database';
import App from './App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { config } from './firebase.conf'

const email = '';
const pass = '';

class Firebase {
  constructor() {
    app.initializeApp(config);
    firebase.auth().signInWithEmailAndPassword(email, pass).then((x) => console.log('ok', x)).catch((e) => console.log('ko', e));
  }
}

export const FirebaseContext = React.createContext(null);

ReactDOM.render(
  // @ts-ignore
  <FirebaseContext.Provider value={new Firebase()}>
    <App/>
  </FirebaseContext.Provider>,
  document.getElementById('root') as HTMLElement
);


registerServiceWorker();
