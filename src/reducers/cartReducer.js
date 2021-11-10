import { cartConstants } from "../actions/constants";

const initState = {
  _products: [],
  cartCount: 0,
  loading: false,
};
export default (state = initState, action) => {
  console.log(action);

  switch (action.type) {
    case cartConstants.ADD_TO_CART_REQUEST:
      state = {
        ...state,
        loading: true,
      };
      break;
    case cartConstants.ADD_TO_CART_SUCCESS:
      //cart empty
      if (state.cartCount === 0) {
        let cart = {
          id: action.payload.id,
          quantity: 1,
          name: action.payload.title,
          img: action.payload.image,
          description: action.payload.description,
          price: action.payload.price,
        };
        state._products.push(cart);
      }
      //cart have product
      else {
        let check = false;
        state._products.map((p, key) => {
          //product in cart == product add
          if (p.id === action.payload.id) {
            //increase quantity
            state._products[key].quantity++;
            check = true;
          }
        });
        //product add don't have in cart
        if (!check) {
          let _cart = {
            id: action.payload.id,
            quantity: 1,
            name: action.payload.title,
            img: action.payload.image,
            description:
              action.payload.description,
            price: action.payload.price,
          };
          state._products.push(_cart);
        }
      }
      state = {
        ...state,
        cartCount: state.cartCount + 1,
      };

      break;
    case cartConstants.ADD_TO_CART_FAILURE:
      state = {
        initState,
      };
      break;

    case cartConstants.DELETE_PRODUCT_REQUEST:
      state = {
        ...state,
        loading: true,
      };
      break;
    case cartConstants.DELETE_PRODUCT_SUCCESS:
      state = {
        ...state,
        loading: false,
      };

      break;
    case cartConstants.ADD_TO_CART_FAILURE:
      state = {
        initState,
      };
      break;

    default:
      return state;
  }

  return state;
};
