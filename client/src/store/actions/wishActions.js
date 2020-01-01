import {
  FETCH_WISH_PENDING,
  FETCH_WISH_SUCCESS,
  FETCH_WISH_ERROR
} from "./typesActions";

//! GET PRODUCTS  //-------------------------------------------------------------

export function fetchWishlistPending() {
  return {
    type: FETCH_WISH_PENDING
  };
}

export function fetchWishlistSuccess(products) {
  return {
    type: FETCH_WISH_SUCCESS, //? The type defines what we would like our action to do.
    payload: products //? the payload let us send data
  };
}

export function fetchWishlistError(error) {
  return {
    type: FETCH_WISH_ERROR,
    payload: error
  };
}

//* fetching products: dispatching 2 actions (pending > success or error)

export function fetchWishlist(user_id) {
  console.log("inside action fetching cart");
  console.log(user_id);

  const axios = require("axios");
  return dispatch => {
    dispatch(fetchWishlistPending());
    axios
      .get(`http://localhost:5000/products/wishlist/${user_id}`)
      .then(res => {
        console.log("fetched wishlist:", res.data);
        if (res.data) {
          dispatch(fetchWishlistSuccess(res.data));
        }
      })
      .catch(err => {
        console.log("error:", err);
        dispatch(fetchWishlistError(err));
      });
  };
}
