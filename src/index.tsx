import React from 'react';
import App from './App';
import ReactDOM from 'react-dom';
import rootRducer from './state/index';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
const store = createStore(rootRducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('#root')
);
