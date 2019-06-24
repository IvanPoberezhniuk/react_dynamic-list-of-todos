import React, { Component } from "react";
import TodoItem from "./TodoItem";

let peopleDataUrl = "https://jsonplaceholder.typicode.com/users";
let todoDataUrl = "https://jsonplaceholder.typicode.com/todos";

class TodoList extends Component {
  state = {
    todoData: [],
    peopleData: []
  };

  loadData = () => {
    Promise.all([fetch(todoDataUrl), fetch(peopleDataUrl)])
      .then(responses => Promise.all(responses.map(res => res.json())))
      .then(jsonData => {
        this.setState({
          todoData: jsonData[0],
          peopleData: jsonData[1]
        });
      });
  };

  render() {
    return (
      <>
        {this.state.todoData.length ? (
          <table>
            <TodoItem
              todoData={this.state.todoData}
              peopleData={this.state.peopleData}
            />
          </table>
        ) : (
          <button className="loadDataButton" onClick={this.loadData}>
            Load...( ͡° ͜ʖ ͡°)
          </button>
        )}
      </>
    );
  }
}

export default TodoList;
