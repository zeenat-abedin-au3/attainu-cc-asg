import { ADD_TO_CART } from "../actions/actionTypes";

const INIT_STATE = {
  count: 0
};

const cartReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        count: state.count + 1
      };

    default:
      return state;
  }
};

export default cartReducer;
