import { CREATE_USER, LOGIN_USER, LOGOUT } from "../actions/actionTypes";

const INIT_STATE = {
  users: [],
  loggedIn: false
};

const userReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case CREATE_USER:
      return {
        ...state,
        users: [...state.users, action.payload]
      };
    case LOGIN_USER:
      return {
        ...state,
        loggedIn: action.payload
      };
    case LOGOUT:
      localStorage.removeItem("loggedInUser");
      return {
        ...state,
        loggedIn: false
      };
    default:
      return state;
  }
};

export default userReducer;
