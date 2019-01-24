import './index.css';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import AuthService from "./services/AuthService/AuthService";
import SuggestionsService from "./services/SuggestionsService/SuggestionsService";


const auth = new AuthService();
auth.autoLogin({}).then(() => {
  const sug = new SuggestionsService();
  const sugg$ = sug.autoComplete$({ text: '' }).subscribe();
});

ReactDOM.render(
  <HashRouter>
    <App/>
  </HashRouter>,
  document.getElementById('root') as HTMLElement
);

registerServiceWorker();
