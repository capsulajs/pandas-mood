import * as React from 'react';
import * as ReactDOM from 'react-dom';

import AuthService from './services/AuthService/AuthService';

import App from './App';
import registerServiceWorker from './registerServiceWorker';


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
  ReactDOM.render(
    // @ts-ignore
    <App/>,
    document.getElementById('root') as HTMLElement
  );
}


registerServiceWorker();
