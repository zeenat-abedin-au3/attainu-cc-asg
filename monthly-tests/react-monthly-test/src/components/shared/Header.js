import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import DropDown from "./DropDown";

const Header = ({ loggedIn }) => {
  return (
    <div className="row pt-2 mb-5 header-color pb-2">
      <div className="col-md-7">
        <div className="row align-items-center">
          <div className="col-md-4">
            <Link to="/" className="btn text-white">
              Mini Flipkart
            </Link>
          </div>
          <div className="col-md-8">
            <input type="text" placeholder="Search" className="form-control" />
          </div>
        </div>
      </div>
      <div className="col-md-5">
        {!loggedIn ? (
          <React.Fragment>
            <Link className="btn btn-outline-info text-white" to="/login">
              Sign In
            </Link>
            <Link className="btn btn-outine-successs text-white" to="/signup">
              Sign Up
            </Link>
          </React.Fragment>
        ) : (
          <DropDown />
        )}
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  loggedIn: state.users.loggedIn
});

export default connect(mapStateToProps)(Header);
