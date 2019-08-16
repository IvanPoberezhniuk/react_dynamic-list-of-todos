const URL = 'https://jsonplaceholder.typicode.com';

export const getTodos = () => {
  return fetch(`${URL}/todos`).then(res => res.json());
};

export const getUsers = () => {
  return fetch(`${URL}/users`).then(res => res.json());
};
