import React from 'react';
import App from './App';
import ReactDOM from 'react-dom';
import rootRducer from './state/index';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

const store = createStore(rootRducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('#root')
);
