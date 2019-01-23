import * as React from 'react';
import * as ReactDOM from 'react-dom';

import AuthService from './services/AuthService/AuthService';

import App from './App';
import registerServiceWorker from './registerServiceWorker';


const authService = new AuthService();
authService.autoLoginPopup({}).then(() => {
  ReactDOM.render(
    // @ts-ignore
    <App/>,
    document.getElementById('root') as HTMLElement
  );
}).catch(err => console.warn('unable to log', err));


registerServiceWorker();
