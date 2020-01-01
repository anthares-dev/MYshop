import {
  FETCH_CART_PENDING,
  FETCH_CART_SUCCESS,
  FETCH_CART_ERROR
} from "./typesActions";

//! GET PRODUCTS  //-------------------------------------------------------------

export function fetchCartPending() {
  return {
    type: FETCH_CART_PENDING
  };
}

export function fetchCartSuccess(products) {
  return {
    type: FETCH_CART_SUCCESS, //? The type defines what we would like our action to do.
    payload: products //? the payload let us send data
  };
}

export function fetchCartError(error) {
  return {
    type: FETCH_CART_ERROR,
    payload: error
  };
}

//* fetching products: dispatching 2 actions (pending > success or error)

export function fetchCart(user_id) {
  console.log("inside action fetching cart");
  console.log(user_id);

  const axios = require("axios");
  return dispatch => {
    dispatch(fetchCartPending());
    axios
      .get(`http://localhost:5000/products/cart/${user_id}`)
      .then(res => {
        console.log("fetched cart:", res.data);
        if (res.data) {
          dispatch(fetchCartSuccess(res.data));
        }
      })
      .catch(err => {
        console.log("error:", err);
        dispatch(fetchCartError(err));
      });
  };
}
