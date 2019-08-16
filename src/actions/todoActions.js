import { TODO } from './types';
import { getTodos, getUsers } from '../api/api';
import { joinTodosAndUsers } from '../api/helpers';

export const fetchTodos = () => dispatch => {
  dispatch({ type: TODO.IS_LOADING });

  // That setTimeout - response simulation
  setTimeout(() => {
    Promise.all([getTodos(), getUsers()])
      .then(response => {
        const [todos, users] = response;
        const joinedTodosAndUsers = joinTodosAndUsers(todos, users);
        return joinedTodosAndUsers;
      })
      .then(todos => {
        dispatch({
          type: TODO.FETCH,
          payload: todos
        });

        dispatch({ type: TODO.IS_LOADED });
      })
      .catch(err => {
        dispatch({
          type: TODO.FETCH_ERROR,
          error: err.message
        });
      })
      .finally(dispatch({ type: TODO.IS_LOADING }));
  }, 1444);
};

export const toggleTodo = id => ({
  type: TODO.IS_COMPLETED,
  id
});

export const deleteTodo = id => ({
  type: TODO.DELETE,
  id
});
