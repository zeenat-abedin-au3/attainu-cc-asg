import { CREATE_USER, LOGIN_USER, LOGOUT, ADD_TO_CART } from "./actionTypes";

export const createUser = user => ({
  type: CREATE_USER,
  payload: user
});

export const loginUser = status => ({
  type: LOGIN_USER,
  payload: status
});

export const logout = () => ({
  type: LOGOUT
});

export const addToCart = () => ({
  type: ADD_TO_CART
});
