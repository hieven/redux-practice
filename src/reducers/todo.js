import { ADD_TODO, REMOVE_TODO } from '../actions/actionTypes';

const initialState = {

  todos: []

};

export default function todo(state = initialState, action) {

  switch (action.type) {

  case ADD_TODO:
    return {
      ...state,
      todos: [...state.todos, {
        text: action.text,
        completed: false
      }]
    };

  case REMOVE_TODO:
    return {
      state
    };

  default:
    return state;
  }

}
