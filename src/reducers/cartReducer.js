import { cartConstants } from "../actions/constants";

const initState = {
  carts: [],
  _products: [],
  loading: false,
};

export default (state = initState, action) => {
  console.log(action);
  switch (action.type) {
    case cartConstants.GET_ALL_PRODUCT_REQUEST:
      state = {
        ...state,
        loading: true,
      };
      break;
    case cartConstants.GET_ALL_PRODUCT_SUCCESS:
      state = {
        ...state,
        _products: action.payload._products,
        loading: false,
      };
      break;
    case cartConstants.GET_ALL_PRODUCT_FAILURE:
      state = {
        initState,
      };
      break;
    default:
      return state;
  }
  return state;
};
