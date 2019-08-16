import React from 'react';

const TodoUser = ({ task, deleteTodo }) => {
  return (
    <>
      <td className="todos__td">{task.user.name}</td>
      <td className="todos__td">{task.user.email}</td>
      <td className="todos__td">
        <button onClick={() => deleteTodo(task.id)}>X</button>
      </td>
    </>
  );
};

export default TodoUser;
