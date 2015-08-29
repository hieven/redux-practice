import { createStore } from 'redux';
import { todo } from './reducers';

import { addTodo } from './actions/todoAction';

console.log(todo);

let store = createStore(todo, window.__data);

let unsubscribe = store.subscribe(() =>
  console.log(store.getState())
);

store.dispatch(addTodo('Learn about actions'));
store.dispatch(addTodo('Learn about reducers'));
store.dispatch(addTodo('Learn about store'));

unsubscribe();
