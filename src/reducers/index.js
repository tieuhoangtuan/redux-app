//state's stores and handle actions

import { combineReducers } from "redux";
import productConstants from "./productReducer";

const rootReducer = combineReducers({
  products: productConstants,
});
export default rootReducer;
