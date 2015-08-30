import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// Import actions
import { addTodo } from '../../actions/todoActions';

// Import components here
import AddTodo from './AddTodo';
import TodoList from './TodoList';

@connect(
  state => ({todos: state.todos}),
  dispatch => bindActionCreators({ addTodo }, dispatch)
)
export default class TodoApp extends Component {

  static propTypes = {
    todos: PropTypes.array,
    addTodo: PropTypes.func
  };

  onAddClick(text) {
    window.console.log('onAddClick');
    this.props.addTodo(text);
  }

  render() {
    const { todos } = this.props;

    return (
      <div>
        <AddTodo onAddClick={::this.onAddClick}/>
        <TodoList todos={todos}/>
      </div>
    );
  }
}
