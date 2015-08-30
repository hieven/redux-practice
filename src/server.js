// Server
import path from 'path';
import Express from 'express';
// React
import React from 'react';
import Router from 'react-router';
import Location from 'react-router/lib/Location';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { todo } from './reducers';

// import App from './containers/Root';
import Html from './Html';
import { routes } from './routes';

const app = Express();
const port = 3000;

// Use this middleware to serve up static files built into the dist directory
app.use(require('serve-static')(path.join(__dirname, '..', 'build')));

// This is fired every time the server side receives a request
app.use(handleRender);


function handleRender(req, res) {

  const location = new Location(req.path, req.query);

  Router.run(routes, location, (error, initialState, transition) => {
    // Create a new Redux store instance
    const store = createStore(todo);


    // Render the component to a string
    const component = React.renderToString(
      <Provider store={store}>
        {() => <Router {...initialState} children={routes} />}
      </Provider>
    );

    // Grab the initial state from Redux store
    const initialData = JSON.stringify(store.getState());

    // Send the rendered page back to client
    res.send('<!doctype html>\n' +
      React.renderToString(<Html component={component} initialData={initialData} />));
  });
}


app.listen(port, (err) => {
  if (err) {
    console.error(err);
  } else {
    console.info(`server start listening ${port}`);
  }
});
