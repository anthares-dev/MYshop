import {
  LOAD_USERS_PENDING,
  LOAD_USERS_SUCCESS,
  LOAD_USERS_ERROR
} from "../actions/typesActions";

//* defining the initial state
const initialState = {
  pending: false,
  user: [],
  error: null
};

function userReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_USERS_PENDING:
      // Mark the state as "loading" so we can show a spinner or something
      // Also, reset any errors. We're starting fresh.
      return {
        ...state,
        pending: true
      };
    case LOAD_USERS_SUCCESS:
      // All done: set pending "false".
      // Also, replace the items with the ones from the server
      return {
        ...state,
        pending: false,
        user: action.payload
      };
    case LOAD_USERS_ERROR:
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

export default userReducer;
