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
      <div
        style={{
          width: "100%",
        }}
      >
        {cart._products.map((product) => {
          return (
            <div
              style={{
                display: "flex",
                justifyContent: "space-around",
              }}
            >
              <SingleCart
                key={`${product.id}`}
                name={`${product.name}`}
                price={`${product.price}`}
                description={`${product.description}`}
                img={`${product.img}`}
                id={`${product.id}`}
              />
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Cart;
