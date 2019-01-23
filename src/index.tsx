import * as React from 'react';
import * as ReactDOM from 'react-dom';
// @ts-ignore
import app from 'firebase/app';
import * as firebase from 'firebase';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { config } from './firebase.conf';

import { PublishService } from './services/publishService/PublishService';

const email = 'arbib.michael@om2.com';
const pass = 'mysuperpassword';

app.initializeApp(config);
firebase.auth().signInWithEmailAndPassword(email, pass).then(() => {
    const service = new PublishService();

    service.publish({
      authorId: "panda2",
      mood: 3,
      message: "snow akaton",
      tags: ["AKATON"],
      relatedUsers: ["panda1"],
    }).then(res => console.log(res))
      .catch(err => console.log(err));
  }
).catch((e) => console.log('ko', e));


ReactDOM.render(
  // @ts-ignore
  <App/>,
  document.getElementById('root') as HTMLElement
);


registerServiceWorker();
