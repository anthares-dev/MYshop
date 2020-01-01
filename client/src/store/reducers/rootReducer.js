import { combineReducers } from "redux";
import productReducer from "./productReducer";
import userReducer from "./userReducer";
import cartReducer from "./cartReducer";
import wishReducer from "./wishReducer";

const rootReducer = combineReducers({
  user: userReducer,
  products: productReducer,
  cart: cartReducer,
  wishlist: wishReducer
});

export default rootReducer;
