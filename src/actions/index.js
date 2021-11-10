import axios from "axios";
import { cartConstants } from "./constants";

export const getAllProducts = () => {
  return async (dispatch) => {
    dispatch({
      type: cartConstants.GET_ALL_PRODUCT_REQUEST,
    });
    const response = await axios.get(
      "https://5adc8779b80f490014fb883a.mockapi.io/products",
    );
    console.log(response);
  };
};
