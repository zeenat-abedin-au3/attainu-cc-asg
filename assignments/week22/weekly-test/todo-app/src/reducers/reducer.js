import { ADD_TODO, REMOVE_TODO, SET_COMPLETED } from "../actions/types";

const STATE = {
  todos: []
};

const todoReducer = (state = STATE, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        todos: [action.value, ...state.todos]
      };
    case REMOVE_TODO:
      return {
        todos: state.todos.filter(todo => todo.id !== action.value)
      };
    case SET_COMPLETED:
      return {
        todos: state.todos.map(todo => {
          if (todo.id === action.value) {
            return { ...todo, completed: !todo.completed };
          }
          return todo;
        })
      };

    default:
      return state;
  }
};

export default todoReducer;
