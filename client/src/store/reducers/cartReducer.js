import {
  FETCH_CART_PENDING,
  FETCH_CART_SUCCESS,
  FETCH_CART_ERROR
} from "../actions/typesActions";

//* defining the initial state
const initialState = {
  pending: false,
  cart: [],
  error: null
};

function cartReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_CART_PENDING:
      // Mark the state as "loading" so we can show a spinner or something
      // Also, reset any errors. We're starting fresh.
      return {
        ...state,
        pending: true
      };
    case FETCH_CART_SUCCESS:
      // All done: set pending "false".
      // Also, replace the items with the ones from the server
      return {
        ...state,
        pending: false,
        cart: action.payload
      };
    case FETCH_CART_ERROR:
      return {
        ...state,
        pending: false,
        error: action.payload
      };

    default:
      // the dispatched action is not in this reducer, return the state unchanged
      return state;
  }
}

export default cartReducer;
