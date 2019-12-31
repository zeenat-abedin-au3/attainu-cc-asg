import React, { Component } from "react";
import { connect } from "react-redux";

class Profile extends Component {
  render() {
    const userProfile = this.props.users.find(
      user => user.id === this.props.match.params.id
    );
    if (!userProfile) {
      return (
        <div className="alert">
          <p className="lead text-center">User Not Found</p>
        </div>
      );
    }
    return (
      <div className="card card-body">
        <h3>
          Name: {userProfile.firstName} {userProfile.lastName}
          <span className="btn btn-info float-right">Edit</span>
        </h3>
        <p className="lead">Email: {userProfile.email}</p>
        <p className="lead">Phone: {userProfile.mobile}</p>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  users: state.users.users
});

export default connect(mapStateToProps)(Profile);
