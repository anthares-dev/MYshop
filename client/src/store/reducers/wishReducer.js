import {
  FETCH_WISH_PENDING,
  FETCH_WISH_SUCCESS,
  FETCH_WISH_ERROR
} from "../actions/typesActions";

//* defining the initial state
const initialState = {
  pending: false,
  wishlist: [],
  error: null
};

function cartReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_WISH_PENDING:
      // Mark the state as "loading" so we can show a spinner or something
      // Also, reset any errors. We're starting fresh.
      return {
        ...state,
        pending: true
      };
    case FETCH_WISH_SUCCESS:
      // All done: set pending "false".
      // Also, replace the items with the ones from the server
      return {
        ...state,
        pending: false,
        wishlist: action.payload
      };
    case FETCH_WISH_ERROR:
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
