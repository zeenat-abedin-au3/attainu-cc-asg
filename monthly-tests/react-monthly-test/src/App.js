import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import { connect } from "react-redux";

import Header from "./components/shared/Header";
import Signup from "./components/Signup";
import Home from "./components/Home";
import Login from "./components/Login";
import Profile from "./components/Profile";
import { loginUser } from "./actions/actions";
import Product from "./components/Product";

class App extends Component {
  componentDidMount() {
    const isUserExists = localStorage.getItem("loggedInUser");
    if (isUserExists) {
      this.props.loginUser(JSON.parse(isUserExists));
    }
  }

  render() {
    return (
      <div className="container">
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/login" component={Login} />
          <Route path="/profile/:id" component={Profile} />
          <Route path="/product/:id" component={Product} />
        </Switch>
      </div>
    );
  }
}

export default connect(null, { loginUser })(App);
