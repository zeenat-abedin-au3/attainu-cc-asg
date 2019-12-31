import React from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../../actions/actions";

const DropDown = ({ loggedIn, logout, cartCount, history }) => {
  const handleLogout = () => {
    logout();

    history.push("/login");
  };
  return (
    <div>
      <div className="dropdown">
        <button
          className="btn btn-secondary dropdown-toggle"
          type="button"
          id="dropdownMenuButton"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          Users
        </button>
        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <Link className=" btn btn-block btn-info" to={`/profile/${loggedIn}`}>
            My Profile
          </Link>
          <button className=" btn btn-block btn-outline-info">
            {cartCount} Items in Cart
          </button>
          <button
            className=" btn btn-block btn-outline-danger"
            onClick={handleLogout}
          >
            LOG OUT
          </button>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  loggedIn: state.users.loggedIn,
  cartCount: state.cart.count
});

export default withRouter(connect(mapStateToProps, { logout })(DropDown));
