import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAllProducts } from "../../actions";

function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    console.log("2");
    dispatch(getAllProducts());
  }, []);
  return <div>home</div>;
}

export default Home;
