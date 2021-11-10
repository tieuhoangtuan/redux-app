import React, { useEffect } from "react";
import {
  useDispatch,
  useSelector,
} from "react-redux";

import SingleCart from "../../components/SingleCart";

function Cart() {
  const cart = useSelector((state) => state.cart);
  console.log(cart);
  return (
    <>
      {cart._products.map((product) => {
        return (
          <SingleCart
            key={`${product.id}`}
            name={`${product.name}`}
            price={`${product.price}`}
            description={`${product.description}`}
            img={`${product.img}`}
            id={`${product.id}`}
          />
        );
      })}
    </>
  );
}

export default Cart;
