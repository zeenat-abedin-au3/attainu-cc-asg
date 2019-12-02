import React, { Component } from "react";
import TodoForm from "./components/TodoForm";
import ShowTodos from "./components/ShowTodos";
class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-7 m-auto">
            <TodoForm />
            <ShowTodos />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
