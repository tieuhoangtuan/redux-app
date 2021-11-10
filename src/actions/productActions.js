import axios from "axios";
import { productConstants } from "./constants";

export const getAllProducts = () => {
  return async (dispatch) => {
    dispatch({
      type: productConstants.GET_ALL_PRODUCT_REQUEST,
    });
    const response = await axios.get(
      "https://fakestoreapi.com/products",
    );
    console.log(response);
    if (response) {
      dispatch({
        type: productConstants.GET_ALL_PRODUCT_SUCCESS,
        payload: response.data,
      });
    } else {
      dispatch({
        type: productConstants.GET_ALL_PRODUCT_FAILURE,
      });
    }
  };
};
