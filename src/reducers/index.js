//state's stores and handle actions

import { combineReducers } from "redux";
import productConstants from "./productReducer";

const rootReducer = combineReducers({
  cart: productConstants,
});
export default rootReducer;
