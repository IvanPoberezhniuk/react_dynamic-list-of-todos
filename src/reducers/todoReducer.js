import { TODO } from '../actions/types';

const initialState = {
  todos: [],
  error: null,
  isLoaded: false,
  isLoading: false
};

const todoReducer = function(state = initialState, action) {
  switch (action.type) {
    case TODO.FETCH:
      return { ...state, todos: action.payload };
    case TODO.IS_COMPLETED:
      const newTodos = state.todos.map(todo =>
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      );
      return { ...state, todos: newTodos };
    case TODO.IS_LOADED:
      return { ...state, isLoaded: !state.isLoaded };
    case TODO.IS_LOADING:
      return { ...state, isLoading: !state.isLoading };
    case TODO.FETCH_ERROR:
      return { ...state, error: action.error };
    case TODO.DELETE:
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.id)
      };
    default:
      return state;
  }
};

export default todoReducer;
