import {
  FETCH_PRODUCTS_PENDING,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_ERROR,
  ADD_PRODUCT_CART,
  DEL_PRODUCT_CART
} from "../actions/typesActions";

//* defining the initial state
const initialState = {
  pending: false,
  products: [],
  error: null,
  addedToCart: []
};

function productReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_PRODUCTS_PENDING:
      // Mark the state as "loading" so we can show a spinner or something
      // Also, reset any errors. We're starting fresh.
      return {
        ...state,
        pending: true
      };
    case FETCH_PRODUCTS_SUCCESS:
      // All done: set pending "false".
      // Also, replace the items with the ones from the server
      return {
        ...state,
        pending: false,
        products: action.payload
      };
    case FETCH_PRODUCTS_ERROR:
      return {
        ...state,
        pending: false,
        error: action.payload
      };
    case ADD_PRODUCT_CART:
      return {
        ...state,
        addedToCart: [action.payload, ...state.addedToCart]
      };
    case DEL_PRODUCT_CART:
      return {
        ...state,
        addedToCart: state.addedToCart.filter(
          product_id => product_id !== action.payload
        )
      };

    default:
      // the dispatched action is not in this reducer, return the state unchanged
      return state;
  }
}

export default productReducer;
