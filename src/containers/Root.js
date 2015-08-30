import React, { Component, PropTypes } from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { Router, Route } from 'react-router';
import { todo } from '../reducers';
import { routes } from '../routes';

const store = createStore(todo, window.__INITIAL_DATA__);

export default class Root extends Component {

  static propTypes = {
    history: PropTypes.object.isRequired
  };

  render() {
    const { history } = this.props;

    return (
      <Provider store={store}>
        {() => <Router history={history} children={routes} />}
      </Provider>
    );
  }
}
