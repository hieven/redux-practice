import React, { Component } from 'react';

// Import components here
import AddTodo from './AddTodo';
import TodoList from './TodoList';

export default class TodoApp extends Component {

  onAddClick(text) {
    console.log('onAddClick');
    console.log(text);
  }

  render() {

    return (
      <div>
        <AddTodo onAddClick={this.onAddClick}/>
        <TodoList todos={[{text: 'hello'}]}/>
      </div>
    );
  }
}
