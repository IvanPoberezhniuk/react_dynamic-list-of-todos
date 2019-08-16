import React from 'react';

const TodoUser = ({ user }) => {
  return (
    <>
      <td className="todos__td">{user.name}</td>
      <td className="todos__td">{user.email}</td>
    </>
  );
};

export default TodoUser;
