import { TODO } from '../actions/types';

const initialState = {
  todos: [],
  isLoaded: false,
  error: null
};

const todoReducer = function(state = initialState, action) {
  switch (action.type) {
    case TODO.FETCH:
      return { ...state, todos: action.payload };
    case TODO.TOGGLE:
      const newTodos = state.todos.map(todo =>
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      );
      return { ...state, todos: newTodos };
    case TODO.IS_LOADED:
      return { ...state, isLoaded: !state.isLoaded };
    default:
      return state;
  }
};

export default todoReducer;
