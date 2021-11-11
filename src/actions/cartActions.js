import { cartConstants } from "./constants";

export const addToCart = (product) => {
  return async (dispatch) => {
    dispatch({
      type: cartConstants.ADD_TO_CART_REQUEST,
    });
    console.log(product);
    if (product) {
      dispatch({
        type: cartConstants.ADD_TO_CART_SUCCESS,
        payload: product,
      });
    } else {
      dispatch({
        type: cartConstants.ADD_TO_CART_FAILURE,
      });
    }
  };
};

export const deleteProduct = (productId) => {
  return async (dispatch) => {
    dispatch({
      type: cartConstants.DELETE_PRODUCT_REQUEST,
    });

    if (productId) {
      dispatch({
        type: cartConstants.DELETE_PRODUCT_SUCCESS,
        payload: productId,
      });
    } else {
      dispatch({
        type: cartConstants.DELETE_PRODUCT_FAILURE,
      });
    }
  };
};

export const increaseProduct = (productId) => {
  return async (dispatch) => {
    dispatch({
      type: cartConstants.INCREASE_PRODUCT_CART_REQUEST,
    });

    if (productId) {
      dispatch({
        type: cartConstants.INCREASE_PRODUCT_CART_SUCCESS,
        payload: productId,
      });
    } else {
      dispatch({
        type: cartConstants.INCREASE_PRODUCT_CART_FAILURE,
      });
    }
  };
};

export const decreaseProduct = (productId) => {
  return async (dispatch) => {
    dispatch({
      type: cartConstants.DECREASE_PRODUCT_CART_REQUEST,
    });

    if (productId) {
      dispatch({
        type: cartConstants.DECREASE_PRODUCT_CART_SUCCESS,
        payload: productId,
      });
    } else {
      dispatch({
        type: cartConstants.DECREASE_PRODUCT_CART_FAILURE,
      });
    }
  };
};
