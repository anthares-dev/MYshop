import {
  FETCH_PRODUCTS_PENDING,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_ERROR
} from "./typesActions";

//! GET PRODUCTS  //-------------------------------------------------------------

export function fetchProductsPending() {
  return {
    type: FETCH_PRODUCTS_PENDING
  };
}

export function fetchProductsSuccess(products) {
  return {
    type: FETCH_PRODUCTS_SUCCESS, //? The type defines what we would like our action to do.
    payload: products //? the payload let us send data
  };
}

export function fetchProductsError(error) {
  return {
    type: FETCH_PRODUCTS_ERROR,
    payload: error
  };
}

//* fetching products: dispatching 2 actions (pending > success or error)

export function fetchProducts() {
  console.log("inside action fetching products");
  const axios = require("axios");
  return dispatch => {
    dispatch(fetchProductsPending());
    axios
      .get("http://localhost:5000/products/")
      .then(res => {
        console.log("fetched data:", res.data);
        if (res.data) {
          dispatch(fetchProductsSuccess(res.data));
        }
      })
      .catch(err => {
        console.log("error:", err);
        dispatch(fetchProductsError(err));
      });
  };
}
