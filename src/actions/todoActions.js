import { ADD_TODO, REMOVE_TODO } from './actionTypes';

export function addTodo(text) {

  return {
    type: ADD_TODO,
    text
  };

}

export function removeTodo(tid) {

  return {
    type: REMOVE_TODO,
    tid
  };

}
