import React, { Component, PropTypes } from 'react';
import Todo from './Todo';

export default class TodoList extends Component {

  static propTypes = {
    todos: PropTypes.arrayOf(PropTypes.shape({
      text: PropTypes.string.isRequired
    }).isRequired).isRequired
  };

  render() {
    return (
      <ul>
        {this.props.todos.map((todo, index) =>
          <Todo {...todo} key={index} />
        )}
      </ul>
    );
  }
}

