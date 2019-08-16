import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchTodos, toggleTodo } from '../actions/todoActions';

import TodoItem from './TodoItem';
import TodoUser from './TodoUser';

const FILTER = {
  BY_ID: 'id',
  BY_COMPLETE: 'completed',
  BY_TITLE: 'title',
  BY_NAME: 'name',
  BY_EMAIL: 'email'
};

class TodoList extends Component {
  state = {
    buttonStyle: '',
    buttonInnerText: 'Click...( ͡° ͜ʖ ͡°)',
    sortField: FILTER.BY_ID,
    direction: {
      [FILTER.BY_ID]: 'asc',
      [FILTER.BY_COMPLETE]: 'asc',
      [FILTER.BY_TITLE]: 'asc',
      [FILTER.BY_NAME]: 'asc',
      [FILTER.BY_EMAIL]: 'asc'
    }
  };

  handleSort = sortField => {
    this.setState(prevState => {
      return {
        sortField,
        direction: Object.assign(prevState.direction, {
          [sortField]: prevState.direction[sortField] === 'asc' ? 'desc' : 'asc'
        })
      };
    });
  };

  sortBy = filterBy => {
    const callbackMap = {
      [FILTER.BY_ID]: (a, b) => {
        return this.state.direction[filterBy] === 'asc'
          ? parseFloat(a.id) - parseFloat(b.id)
          : parseFloat(b.id) - parseFloat(a.id);
      },

      [FILTER.BY_COMPLETE]: (a, b) => {
        return this.state.direction[filterBy] === 'asc'
          ? a.completed - b.completed
          : b.completed - a.completed;
      },
      [FILTER.BY_TITLE]: (a, b) => {
        return this.state.direction[filterBy] === 'asc'
          ? a.title.localeCompare(b.title)
          : b.title.localeCompare(a.title);
      },
      [FILTER.BY_NAME]: (a, b) => {
        return this.state.direction[filterBy] === 'asc'
          ? a.user.name.localeCompare(b.user.name)
          : b.user.name.localeCompare(a.user.name);
      },
      [FILTER.BY_EMAIL]: (a, b) => {
        return this.state.direction[filterBy] === 'asc'
          ? a.user.email.localeCompare(b.user.email)
          : b.user.email.localeCompare(a.user.email);
      }
    };

    const data = this.props.todos || [];

    return data.sort(callbackMap[filterBy]);
  };

  render() {
    const { sortField, buttonInnerText, buttonStyle } = this.state;

    const preparedTodos = this.sortBy(sortField);

    return (
      <>
        {this.props.isLoaded ? (
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
                />
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
                    <TodoItem
                      task={task}
                      onSort={this.handleSort}
                      toggleTodo={this.props.toggleTodo}
                    />
                    <TodoUser user={task.user} />
                  </tr>
                );
              })}
            </tbody>
          </table>
        ) : (
          <button
            className={
              this.props.error ? 'loadTodosButton error' : 'loadTodosButton '
            }
            onClick={this.props.fetchTodos}
            disabled={this.props.isLoading ? true : false}
          >
            {!this.props.error ? buttonInnerText : this.props.error}
          </button>
        )}
      </>
    );
  }
}

const mapStateToProps = state => ({
  todos: state.todoReducer.todos,
  isLoaded: state.todoReducer.isLoaded,
  isLoading: state.todoReducer.isLoading,
  error: state.todoReducer.error
});

const mapDispatchToProps = dispatch => ({
  fetchTodos: () => dispatch(fetchTodos()),
  toggleTodo: id => dispatch(toggleTodo(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
