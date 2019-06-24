import React from "react";
import TodoUser from "./TodoUser";

let TodoItem = props => {
  let { todoData, peopleData } = props;

  return (
    <>
      <thead>
        <tr>
          <td>Id</td>
          <td>Title</td>
          <td>Name</td>
          <td>Email</td>
        </tr>
      </thead>
      <tbody>
        {todoData.map(task => {
          let person = peopleData.find(person => person.id === task.userId);

          return (
            <tr key={task.id}>
              <td>{task.id}</td>
              <td>{task.title}</td>
              <TodoUser person={person} />
            </tr>
          );
        })}
      </tbody>
    </>
  );
};

export default TodoItem;
