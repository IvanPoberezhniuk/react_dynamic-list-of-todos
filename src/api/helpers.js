export const joinTodosAndUsers = (todos, users) => {
  return todos.map(todo => ({
    ...todo,
    user: users.find(user => user.id === todo.userId)
  }));
};
