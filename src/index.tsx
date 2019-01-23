import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { config } from './firebase.conf'

declare const firebase: any;

ReactDOM.render(
  <App />,
  document.getElementById('root') as HTMLElement
);

firebase.initializeApp(config);



registerServiceWorker();
