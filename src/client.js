import React from 'react';
import Root from './containers/Root';
import BrowserHistory from 'react-router/lib/BrowserHistory';

const rootElement = document.getElementById('root');


React.render(
  <Root history={new BrowserHistory()} />,
  rootElement
);
