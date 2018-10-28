import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import configureStore from './store/configureStore';
import AppRouter, { history } from './routers/AppRouter';

// UIKit
import UIkit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

// loads the Icon plugin
UIkit.use(Icons);

const store = configureStore();
const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
