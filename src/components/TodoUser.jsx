import React from "react";

const TodoUser = props => {
  let { person } = props;

  return (
    <>
      <td className="todos__td">{person.name}</td>
      <td className="todos__td">{person.email}</td>
    </>
  );
};

export default TodoUser;
