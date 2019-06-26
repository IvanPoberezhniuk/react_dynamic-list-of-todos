import React, { Component } from "react";
import TodoItem from "./TodoItem";
import TodoUser from "./TodoUser";
import loadData from "../api/fetch.js";

let peopleDataUrl = "https://jsonplaceholder.typicode.com/users";
let todoDataUrl = "https://jsonplaceholder.typicode.com/todos";

class TodoList extends Component {
  state = {
    todoData: [],
    peopleData: []
  };

  loadData = loadData.bind(this);

  render() {
    let isEmpty = this.state.todoData.length && this.state.peopleData.length;

    return (
      <>
        {isEmpty ? (
          <table>
            <thead>
              <tr className="todo__row">
                <th className="todos__th">Id</th>
                <th className="todos__th">Title</th>
                <th className="todos__th">Name</th>
                <th className="todos__th">Email</th>
              </tr>
            </thead>
            <tbody>
              {this.state.todoData.map(task => {
                let person = this.state.peopleData.find(
                  person => person.id === task.userId
                );

                return (
                  <tr className="todo__row" key={task.id}>
                    <TodoItem task={task} />
                    <TodoUser person={person} />
                  </tr>
                );
              })}
            </tbody>
          </table>
        ) : (
          <button
            className="loadDataButton"
            onClick={() => this.loadData(todoDataUrl, peopleDataUrl)}
          >
            Load...( ͡° ͜ʖ ͡°)
          </button>
        )}
      </>
    );
  }
}

export default TodoList;
