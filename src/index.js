import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faPen, faTimes } from '@fortawesome/free-solid-svg-icons'
 
import store from './store'

import './index.scss';
import AppRoute from './routes';
import * as serviceWorker from './serviceWorker';

// font awesome
library.add(faPen, faTimes);

ReactDOM.render(
  <Provider store={store}>
    <AppRoute />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
