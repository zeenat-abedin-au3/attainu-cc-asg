import { combineReducers } from "redux";

import userReducer from "./userReducer";
import dealReducer from "./dealReducer";
import cartReducer from "./cartReducer";

export default combineReducers({
  users: userReducer,
  deals: dealReducer,
  cart: cartReducer
});
