import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import App from './App';
import * as serviceWorker from './serviceWorker';

let dom = <App />;

  import('./store')
    .then((store) => {
      dom = <Provider store={{ store }}><App /></Provider>;
    });

ReactDOM.render(dom, document.getElementById('root'));
serviceWorker.unregister();
