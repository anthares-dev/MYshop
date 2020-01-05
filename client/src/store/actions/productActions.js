import {
  FETCH_PRODUCTS_PENDING,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_ERROR,
  ADD_PRODUCT_CART,
  DEL_PRODUCT_CART
} from "./typesActions";

//! GET ALL PRODUCTS  //-------------------------------------------------------------

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

//! HERE ADD other product action for the complete CRUD operations (for the CMS)

//! ADD a product_id in the productlist for the cart //-------------------------------------------------------------
export const addProductCart = product_id => dispatch => {
  const axios = require("axios");
  axios
    .post(`http://localhost:5000/products/cart/${product_id}`)
    .then(() => {
      dispatch({
        type: ADD_PRODUCT_CART,
        payload: product_id
      });
    })
    .catch(err => console.log("error:", err));
};

//! DELETE a product_id in the productlist for the cart //-------------------------------------------------------------
export const delProductCart = product_id => dispatch => {
  console.log("inside del product cart action");

  const axios = require("axios");
  axios
    .put(`http://localhost:5000/products/cart/${product_id}/update`)
    .then(() => {
      dispatch({
        type: DEL_PRODUCT_CART,
        payload: product_id
      });
    })
    .catch(err => console.log("error:", err));
};
