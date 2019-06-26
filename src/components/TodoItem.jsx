import React from "react";

const TodoItem = props => {
  let { task } = props;

  return (
    <>
      <td className="todos__td">{task.id}</td>
      <td className="todos__td">{task.title}</td>
    </>
  );
};

export default TodoItem;
