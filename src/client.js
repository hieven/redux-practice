import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './containers/app';
import { todo } from './reducers';

const store = createStore(todo, window.__data);
const rootElement = document.getElementById('root');

console.log(App);

React.render(
  <Provider store={store}>
    {() => <App />}
  </Provider>,
  rootElement
);
