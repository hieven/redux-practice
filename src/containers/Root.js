import React, { Component, PropTypes } from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { Router, Route } from 'react-router';
import { todo } from '../reducers';

// Import views here
import App from './App';
import TodoApp from '../components/todo';

const store = createStore(todo, window.__data);

export default class Root extends Component {

  static propTypes = {
    history: PropTypes.object.isRequired
  };

  render() {
    const { history } = this.props;
    return (
      <div>
        <Provider store={store}>
          {() =>
            <Router history={history}>
              <Route component={App}>
                <Route path="/" component={TodoApp} />
              </Route>
            </Router>
          }
        </Provider>
      </div>
    );
  }
}
