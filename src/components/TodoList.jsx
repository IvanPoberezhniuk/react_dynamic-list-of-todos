import React, { Component } from "react";
import { getTodos, getUsers } from "../api/api";
import TodoItem from "./TodoItem";
import TodoUser from "./TodoUser";

const FILTER = {
  BY_ID: "id",
  BY_COMPLETE: "completed",
  BY_TITLE: "title",
  BY_NAME: "name",
  BY_EMAIL: "email"
};

class TodoList extends Component {
  constructor() {
    super();

    this.state = {
      todos: [],
      isLoaded: false,
      buttonStyle: "",
      buttonInnerText: "Click...( ͡° ͜ʖ ͡°)",
      sortField: FILTER.BY_ID,
      direction: {
        [FILTER.BY_ID]: "asc",
        [FILTER.BY_COMPLETE]: "asc",
        [FILTER.BY_TITLE]: "asc",
        [FILTER.BY_NAME]: "asc",
        [FILTER.BY_EMAIL]: "asc"
      }
    };

    this.handleSort = sortField => {
      console.log(sortField);
      console.log(this.state.direction);

      this.setState(prevState => {
        return {
          sortField: sortField,
          direction: Object.assign(prevState.direction, {
            [sortField]:
              prevState.direction[sortField] === "asc" ? "desc" : "asc"
          })
        };
      });
    };
  }

  loadTodos = async event => {
    event.target.disabled = true;
    event.target.blur();

    this.setState({
      buttonInnerText: "Loading..."
    });

    try {
      const [todos, users] = await Promise.all([getTodos(), getUsers()]);
      const item = this.joinTodosAndUsers(todos, users);

      this.setState({
        todos: item,
        isLoaded: true
      });
    } catch (err) {
      this.setState({
        buttonStyle: "error",
        buttonInnerText: `${err.message}`
      });
    }
  };

  joinTodosAndUsers = (todos, users) => {
    return todos.map(todo => ({
      ...todo,
      user: users.find(user => user.id === todo.userId)
    }));
  };

  sortBy = FILTER_BY => {
    const callbackMap = {
      [FILTER.BY_ID]: (a, b) => {
        return this.state.direction[FILTER_BY] === "asc"
          ? parseFloat(a.id) - parseFloat(b.id)
          : parseFloat(b.id) - parseFloat(a.id);
      },

      [FILTER.BY_COMPLETE]: (a, b) => {
        return this.state.direction[FILTER_BY] === "asc"
          ? a.completed - b.completed
          : b.completed - a.completed;
      },
      [FILTER.BY_TITLE]: (a, b) => {
        return this.state.direction[FILTER_BY] === "asc"
          ? a.title.localeCompare(b.title)
          : b.title.localeCompare(a.title);
      },
      [FILTER.BY_NAME]: (a, b) => {
        return this.state.direction[FILTER_BY] === "asc"
          ? a.user.name.localeCompare(b.user.name)
          : b.user.name.localeCompare(a.user.name);
      },
      [FILTER.BY_EMAIL]: (a, b) => {
        return this.state.direction[FILTER_BY] === "asc"
          ? a.user.email.localeCompare(b.user.email)
          : b.user.email.localeCompare(a.user.email);
      }
    };

    return this.state.todos.sort(callbackMap[FILTER_BY]);
  };

  render() {
    const { sortField, buttonInnerText, isLoaded, buttonStyle } = this.state;
    const preparedTodos = this.sortBy(sortField);

    return (
      <>
        {isLoaded ? (
          <table>
            <thead>
              <tr className="todo__row">
                <th
                  className="todos__th"
                  onClick={() => this.handleSort(FILTER.BY_ID)}
                >
                  Id
                </th>
                <th
                  className="todos__th"
                  onClick={() => this.handleSort(FILTER.BY_COMPLETE)}
                >
                  {/* isComplete symbol */}
                  &#10004;
                </th>
                <th
                  className="todos__th"
                  onClick={() => this.handleSort(FILTER.BY_TITLE)}
                >
                  Title
                </th>
                <th
                  className="todos__th"
                  onClick={() => this.handleSort(FILTER.BY_NAME)}
                >
                  Name
                </th>
                <th
                  className="todos__th"
                  onClick={() => this.handleSort(FILTER.BY_EMAIL)}
                >
                  Email
                </th>
              </tr>
            </thead>
            <tbody>
              {preparedTodos.map(task => {
                return (
                  <tr className="todo__row" key={task.id}>
                    <TodoItem task={task} onSort={this.handleSort} />
                    <TodoUser user={task.user} />
                  </tr>
                );
              })}
            </tbody>
          </table>
        ) : (
          <button
            className={"loadTodosButton " + buttonStyle}
            onClick={event => this.loadTodos(event)}
          >
            {buttonInnerText}
          </button>
        )}
      </>
    );
  }
}

export default TodoList;
