import { TODO } from './types';
import { getTodos, getUsers } from '../api/api';
import { joinTodosAndUsers } from '../api/helpers';

export const fetchTodos = () => dispatch => {
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
    })
    .then(
      dispatch({
        type: TODO.IS_LOADED
      })
    )
    .catch(err =>
      dispatch({
        type: TODO.FETCH_ERROR,
        error: err
      })
    );
};

export const toggleTodo = id => ({
  type: TODO.TOGGLE,
  id
});
