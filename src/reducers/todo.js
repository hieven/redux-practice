import { ADD_TODO, REMOVE_TODO } from '../actions/actionTypes';

const initialState = {

  todos: [
    {
      text: 'wash dishes'
    },
    {
      text: 'send email to Joanne'
    },
    {
      text: 'bring kids to school'
    }
  ]

};

export default function todo(state = initialState, action) {

  switch (action.type) {

  case ADD_TODO:
    return {
      ...state,
      todos: [...state.todos, {
        text: action.text
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
