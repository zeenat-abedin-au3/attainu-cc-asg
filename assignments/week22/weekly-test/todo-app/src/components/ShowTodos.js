import React, { Component } from "react";
import { connect } from "react-redux";
import { REMOVE_TODO, SET_COMPLETED } from "../actions/types";

class ShowTodos extends Component {
  state = {
    filterType: "all"
  };
  handleDelete = id => {
    let confirmation = window.confirm("You want to delete ?");
    if (confirmation) {
      this.props.removeTodo(id);
    }
  };
  handleFilterType = type => {
    this.setState({
      filterType: type
    });
  };
  render() {
    let filtertedTodos = [...this.props.todos];
    if (this.state.filterType === "all") {
      filtertedTodos = this.props.todos;
    }
    if (this.state.filterType === "complete") {
      filtertedTodos = filtertedTodos.filter(todo => todo.completed);
    }
    if (this.state.filterType === "notComplete") {
      filtertedTodos = filtertedTodos.filter(todo => !todo.completed);
    }

    return (
      <div className="card card-body mt-3">
        <div className="btn-group" role="group" aria-label="Basic example">
          <button
            className={`btn btn-outline-secondary ${
              this.state.filterType === "all" ? "active" : ""
            }`}
            onClick={() => this.handleFilterType("all")}
          >
            All
          </button>
          <button
            className={`btn btn-outline-secondary ${
              this.state.filterType === "complete" ? "active" : ""
            }`}
            onClick={() => this.handleFilterType("complete")}
          >
            Completed
          </button>
          <button
            className={`btn btn-outline-secondary ${
              this.state.filterType === "notComplete" ? "active" : ""
            }`}
            onClick={() => this.handleFilterType("notComplete")}
          >
            Not Completed
          </button>
        </div>
        <p className="lead mt-3 text-center">All Todos</p>
        <ul className="list-group">
          {filtertedTodos.map(todo => (
            <li key={todo.id} className="list-group-item">
              <i
                onClick={() => this.props.setCompleted(todo.id)}
                style={{ cursor: "pointer" }}
                className={`${
                  todo.completed ? "fas" : "far"
                } fa-check-circle fa-1x`}
              ></i>{" "}
              {todo.text}
              <span
                className="float-right"
                onClick={() => this.handleDelete(todo.id)}
                style={{ cursor: "pointer" }}
              >
                <i className="fas fa-trash text-danger"></i>
              </span>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    todos: state.todos.todos
  };
};
const mapDispatchToProps = dispatch => {
  return {
    removeTodo: id => dispatch({ type: REMOVE_TODO, value: id }),
    setCompleted: id => dispatch({ type: SET_COMPLETED, value: id })
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ShowTodos);
