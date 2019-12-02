import React, { Component } from "react";
import uniqid from "uniqid";
import { connect } from "react-redux";
import { ADD_TODO } from "../actions/types";

class TodoForm extends Component {
  state = {
    text: ""
  };
  handleChange = e => {
    this.setState({
      text: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    const newTodo = {
      id: uniqid(),
      text: this.state.text,
      completed: false
    };
    this.props.addTodo(newTodo);

    this.setState({
      text: ""
    });
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label htmlFor="todo">Add Todo</label>
          <input
            type="text"
            className="form-control"
            id="todo"
            onChange={this.handleChange}
            value={this.state.text}
            placeholder="Write your todo"
          />
        </div>

        <button type="submit" className="btn btn-outline-success">
          Create Todo
        </button>
      </form>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addTodo: todo => dispatch({ type: ADD_TODO, value: todo })
  };
};

export default connect(null, mapDispatchToProps)(TodoForm);
