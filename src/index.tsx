import * as React from 'react';
import * as ReactDOM from 'react-dom';
// @ts-ignore
import app from 'firebase/app';
import * as firebase from 'firebase';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { config } from './firebase.conf';

const email = 'arbib.michael@om2.com';
const pass = 'mysuperpassword';

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
