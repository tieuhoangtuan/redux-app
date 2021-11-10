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
  console.log(products);
  const dispatch = useDispatch();
  useEffect(() => {
    console.log("2");
    dispatch(getAllProducts());
  }, []);
  return (
    <>
      <SingleProduct />
    </>
  );
}

export default Home;
