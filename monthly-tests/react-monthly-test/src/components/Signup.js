import React, { Component } from "react";
import { connect } from "react-redux";
import uuid from "uuid";

import Input from "./shared/Input";
import { createUser } from "../actions/actions";

class Signup extends Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    mobile: ""
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    const {
      firstName,
      lastName,
      email,
      password,
      confirmPassword,
      mobile
    } = this.state;
    if (password !== confirmPassword) {
      alert("Password not matched");
      return;
    }
    const newUser = {
      id: uuid.v4(),
      firstName,
      lastName,
      email,
      password,
      confirmPassword,
      mobile
    };

    this.props.createUser(newUser);
    this.props.history.push("/login");

    this.setState({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
      mobile: ""
    });
  };
  render() {
    const {
      firstName,
      lastName,
      email,
      password,
      confirmPassword,
      mobile
    } = this.state;
    return (
      <div className="row">
        <div className="col-md-8 m-auto">
          <form onSubmit={this.handleSubmit}>
            <Input
              name="firstName"
              labelText="First Name"
              type="text"
              value={firstName}
              onChange={this.handleChange}
            />
            <Input
              name="lastName"
              labelText="Last Name"
              type="text"
              value={lastName}
              onChange={this.handleChange}
            />

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

            <Input
              name="confirmPassword"
              labelText="Confirm Password"
              type="password"
              value={confirmPassword}
              onChange={this.handleChange}
            />

            <Input
              name="mobile"
              labelText="Mobile"
              type="text"
              value={mobile}
              onChange={this.handleChange}
            />

            <button type="submit" className="btn btn-primary">
              Sign Up
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default connect(null, { createUser })(Signup);
