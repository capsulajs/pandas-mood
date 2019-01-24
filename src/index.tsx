import * as React from 'react';
import * as ReactDOM from 'react-dom';

import AuthService from './services/AuthService/AuthService';
import PublishService from './services/PublishService/PublishService';

import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {HashRouter} from "react-router-dom";


const authService = new AuthService();

const subscription = authService.status$({});


subscription.subscribe(({ isLoggedIn }) => {
  if (isLoggedIn) {
    afterAuthDone();
  } else {
    authService.autoLogin({}).then(() => {
      afterAuthDone();
    }).catch(err => console.warn('unable to log', err));
  }
});


const afterAuthDone = () => {

  const service = new PublishService();

  // service.publish({
  //   authorId: "panda2",
  //   mood: 3,
  //   message: "snow akaton",
  //   tags: ["AKATON"],
  //   relatedUsers: ["panda1"],
  // }).then(res => console.log(res))
  //   .catch(err => console.log(err));

  ReactDOM.render(
    <HashRouter>
      <App />
    </HashRouter>,
    document.getElementById('root') as HTMLElement
  );
};


registerServiceWorker();
