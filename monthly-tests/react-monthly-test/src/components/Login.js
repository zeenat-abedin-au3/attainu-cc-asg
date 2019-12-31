import React, { Component } from "react";
import { connect } from "react-redux";

import Input from "./shared/Input";
import { loginUser } from "../actions/actions";

class Login extends Component {
  state = {
    email: "",
    password: ""
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    const { email, password } = this.state;

    const isMatched = this.props.users.find(
      user => user.email === email && user.password === password
    );
    if (!isMatched) {
      alert("Wrong Credentials");
      this.props.loginUser(false);
      return;
    }
    this.props.loginUser(isMatched.id);
    this.props.history.push("/");
    localStorage.setItem("loggedInUser", JSON.stringify(isMatched));

    this.setState({
      email: "",
      password: ""
    });
  };
  render() {
    const { email, password } = this.state;
    return (
      <div className="row">
        <div className="col-md-8 m-auto">
          <form onSubmit={this.handleSubmit}>
            <Input
              name="email"
              labelText="Email"
              type="email"
              value={email}
              onChange={this.handleChange}
            />
            <Input
              name="password"
              labelText="Password"
              type="password"
              value={password}
              onChange={this.handleChange}
            />

            <button type="submit" className="btn btn-primary">
              Login
            </button>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  users: state.users.users
});

export default connect(mapStateToProps, { loginUser })(Login);
