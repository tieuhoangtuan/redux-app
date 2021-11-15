import React, {
  useState,
  useEffect,
} from "react";
import Box from "@mui/material/Box";
import { alpha } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import {
  useDispatch,
  useSelector,
} from "react-redux";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import {
  addToCart,
  deleteProduct,
  increaseProduct,
  decreaseProduct,
} from "../actions/cartActions";
import DeleteIcon from "@mui/icons-material/Delete";
import TextField from "@mui/material/TextField";

export default function SingleProduct({
  name,
  price,
  img,
  description,
  id,
  type,
  quantity = 1,
}) {
  const products = useSelector(
    (state) => state.products,
  );
  const [productQuantity, setProductQuantity] =
    useState(quantity);
  useEffect(() => {
    setProductQuantity(quantity);
  }, [quantity]);
  const dispatch = useDispatch();
  const clickAddHandle = (productId) => {
    let addProduct;

    products._products.map((product) => {
      if (product.id == productId) {
        addProduct = product;
      }
    });

    dispatch(addToCart(addProduct));
  };
  const clickDeleteHandle = (productId) => {
    dispatch(deleteProduct(productId));
  };
  const increaseHandle = (productId) => {
    dispatch(increaseProduct(productId));
  };
  const decreaseHandle = (productId) => {
    dispatch(decreaseProduct(productId));
  };
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: {
          xs: "column",
          md: "row",
        },
        alignItems: "center",
        bgcolor: "background.paper",
        overflow: "hidden",
        borderRadius: "12px",
        boxShadow: 1,
        fontWeight: "bold",
      }}
    >
      <Box
        component="img"
        sx={{
          height: 233,
          width: 350,
          maxHeight: { xs: 233, md: 167 },
          maxWidth: { xs: 350, md: 250 },
        }}
        alt="The house from the offer."
        src={`${img}`}
      />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: {
            xs: "center",
            md: "flex-start",
          },
          m: 3,
          minWidth: { md: 350 },
        }}
      >
        <Box
          component="span"
          sx={{ fontSize: 16, mt: 1 }}
        >
          {name}
        </Box>
        <Box
          component="span"
          sx={{
            color: "primary.main",
            fontSize: 22,
          }}
        >
          ${price * quantity}
        </Box>

        {type === "home" && (
          <Box
            style={{ color: "green" }}
            sx={{
              mt: 1.5,
              p: 1.5,
              backgroundColor: (theme) =>
                alpha(
                  theme.palette.primary.main,
                  0.1,
                ),
              borderRadius: "5px",
              color: "primary.main",
              fontWeight: "medium",
              display: "flex",
              cursor: "pointer",
              fontSize: 18,
              alignItems: "center",
              "& svg": {
                fontSize: 28,
                mr: 0.5,
              },
            }}
            onClick={clickAddHandle.bind(
              this,
              id,
            )}
          >
            <AddShoppingCartIcon />
            ADD TO CART
          </Box>
        )}
        {type === "cart" && (
          <>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "flex-end",
                margin: "10px 0",
              }}
            >
              {quantity == 1 ? (
                <IconButton
                  disabled
                  onClick={decreaseHandle.bind(
                    this,
                    id,
                  )}
                >
                  <RemoveCircleOutlineIcon />
                </IconButton>
              ) : (
                <IconButton
                  onClick={decreaseHandle.bind(
                    this,
                    id,
                  )}
                >
                  <RemoveCircleOutlineIcon />
                </IconButton>
              )}
              <TextField
                value={productQuantity}
                onChange={(e) => {
                  setProductQuantity(
                    e.target.value,
                  );
                }}
                id="standard-basic"
                label="Quantity"
                variant="standard"
                style={{
                  width: "25%",
                  textAlign: "center",
                }}
              />

              <IconButton
                onClick={increaseHandle.bind(
                  this,
                  id,
                )}
              >
                <AddCircleOutlineIcon />
              </IconButton>
            </div>

            <Box
              onClick={clickDeleteHandle.bind(
                this,
                id,
              )}
              style={{ color: "red" }}
              sx={{
                mt: 1.5,
                p: 1.5,
                backgroundColor: (theme) =>
                  alpha(
                    theme.palette.primary.main,
                    0.1,
                  ),
                borderRadius: "5px",
                color: "primary.main",
                fontWeight: "medium",
                display: "flex",
                cursor: "pointer",
                fontSize: 18,
                alignItems: "center",
                "& svg": {
                  fontSize: 28,
                  mr: 0.5,
                },
              }}
            >
              <DeleteIcon />
              DELETE
            </Box>
          </>
        )}
      </Box>
    </Box>
  );
}
