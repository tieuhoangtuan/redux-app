import React from "react";
import { useSelector } from "react-redux";
import Header from "../../components/Layout/Header";
import SingleProduct from "../../components/SingleProduct";

function Cart() {
  const cart = useSelector((state) => state.cart);
  console.log(cart);
  return (
    <>
      <Header type="cart" />
      <div
        style={{
          width: "100%",
          marginTop: "100px",
        }}
      >
        {cart._products.map((product) => {
          return (
            <div
              style={{
                display: "flex",
                justifyContent: "space-around",
                margin: "30px",
              }}
              key={product.id}
            >
              <SingleProduct
                name={`${product.name}`}
                price={`${product.price}`}
                description={`${product.description}`}
                img={`${product.img}`}
                id={`${product.id}`}
                type="cart"
                quantity={`${product.quantity}`}
              />
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Cart;
