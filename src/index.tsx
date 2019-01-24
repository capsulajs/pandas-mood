import './index.css';
import * as React from 'react';
import * as ReactDOM from 'react-dom';


import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { HashRouter } from 'react-router-dom';

import AuthService from './services/AuthService/AuthService';
import PublishService from './services/PublishService/PublishService';
import SuggestionsService from './services/SuggestionsService/SuggestionsService';

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

  // const service = new PublishService();
  //
  // service.publish({
  //   authorId: 'panda2',
  //   mood: 3,
  //   message: 'snow akaton',
  //   tags: ['AKATON'],
  //   relatedUsers: ['panda1'],
  // }).then(res => console.log(res))
  //   .catch(err => console.log(err));


  const sug = new SuggestionsService();
  const sugg$ = sug.autoComplete$({ text: '' }).subscribe(
    val => console.log('tags', val));


  ReactDOM.render(
    <HashRouter>
      <App/>
    </HashRouter>,
    document.getElementById('root') as HTMLElement
  );
};


registerServiceWorker();
