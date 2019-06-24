import React from "react";

let TodoUser = props => {
  let { person } = props;

  return (
    <>
      <td>{person.name}</td>
      <td>{person.email}</td>
    </>
  );
};

export default TodoUser;
