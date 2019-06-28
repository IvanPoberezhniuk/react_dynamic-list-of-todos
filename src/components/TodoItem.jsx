import React from "react";

const TodoItem = ({ task }) => {
  return (
    <>
      <td className="todos__td">{task.id}</td>
      <td className="todos__td">
        <input
          className="todo__checkbox"
          type="checkbox"
          defaultChecked={task.completed}
        />
      </td>
      <td className="todos__td">{task.title}</td>
    </>
  );
};

export default TodoItem;
