import {
  LOAD_USERS_PENDING,
  LOAD_USERS_SUCCESS,
  LOAD_USERS_ERROR
} from "./typesActions";

//! GET USERS  //-------------------------------------------------------------

export function loadUsersPending() {
  return {
    type: LOAD_USERS_PENDING
  };
}

export function loadUsersSuccess(users) {
  return {
    type: LOAD_USERS_SUCCESS, //? The type defines what we would like our action to do.
    payload: users //? the payload let us send data
  };
}

export function loadUsersError(error) {
  return {
    type: LOAD_USERS_ERROR,
    payload: error
  };
}

//* fetching products: dispatching 2 actions (pending > success or error)

export function loadUsers() {
  console.log("inside action fetching users");
  const axios = require("axios");
  return dispatch => {
    dispatch(loadUsersPending());
    axios
      .get("http://localhost:5000/users/")
      .then(res => {
        console.log("fetched users:", res.data);
        if (res.data) {
          dispatch(loadUsersSuccess(res.data));
        }
      })
      .catch(err => {
        console.log("error:", err);
        dispatch(loadUsersError(err));
      });
  };
}
