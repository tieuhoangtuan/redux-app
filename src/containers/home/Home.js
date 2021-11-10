import React, { useEffect } from "react";
import {
  useDispatch,
  useSelector,
} from "react-redux";
import { getAllProducts } from "../../actions";
import SingleProduct from "../../components/SingleProduct";

function Home() {
  const products = useSelector(
    (state) => state.products,
  );
  const dispatch = useDispatch();
  useEffect(() => {
    console.log("2");
    dispatch(getAllProducts());
  }, []);

  return (
    <>
      {products._products.map((product) => {
        return (
          <SingleProduct
            key={`${product.id}`}
            name={`${product.title}`}
            price={`${product.price}`}
            description={`${product.description}`}
            img={`${product.image}`}
          />
        );
      })}
    </>
  );
}

export default Home;
