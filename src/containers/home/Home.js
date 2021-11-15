import React, { useEffect } from "react";
import {
  useDispatch,
  useSelector,
} from "react-redux";

import Header from "../../components/Layout/Header";
import { getAllProducts } from "../../actions";
import SingleProduct from "../../components/SingleProduct";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
function Home() {
  const products = useSelector(
    (state) => state.products,
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllProducts());
  }, []);

  return (
    <>
      <Header type="home" />

      <div
        style={{
          width: "100%",
          marginTop: "88px",
        }}
      >
        {products.loading ? (
          <div
            style={{
              display: "flex",
              width: "inherit",
              height: "inherit",
              margin: "auto 0",
              position: "absolute",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <CircularProgress />
          </div>
        ) : (
          <Box
            sx={{
              display: "grid",
              columnGap: 3,
              rowGap: 1,
              gridTemplateColumns:
                "repeat(2, 1fr)",
            }}
          >
            {products._products.map((product) => {
              return (
                <SingleProduct
                  key={`${product.id}`}
                  name={`${product.title}`}
                  price={`${product.price}`}
                  description={`${product.description}`}
                  img={`${product.image}`}
                  id={`${product.id}`}
                  type="home"
                />
              );
            })}
          </Box>
        )}
      </div>
    </>
  );
}

export default Home;
