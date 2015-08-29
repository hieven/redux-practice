import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions/todoAction';
import AddTodo from '../components/addTodo';
import TodoList from '../components/todoList';


export default class App extends Component {
  render() {
    return (
      <div>
        <AddTodo
          onAddClick={text =>
            console.log('add todo', text)
          } />
        <TodoList
          todos={[{
            text: 'Use Redux',
            completed: true
          }, {
            text: 'Learn to connect it to React',
            completed: false
          }]}
          onTodoClick={todo =>
            console.log('todo clicked', todo)
          } />
      </div>
    );
  }
}
