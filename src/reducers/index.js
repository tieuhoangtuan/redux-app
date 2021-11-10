//state's stores and handle actions

import { combineReducers } from "redux";

const rootReducer = combineReducers({
  cart: cartReducer,
});
export default rootReducer;
