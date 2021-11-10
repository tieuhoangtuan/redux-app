import React from "react";
import Box from "@mui/material/Box";
import { alpha } from "@mui/material/styles";
import { useDispatch } from "react-redux";
import DeleteIcon from "@mui/icons-material/Delete";
import { deleteProduct } from "../actions/cartActions";

export default function SingleProduct({
  name,
  price,
  img,
  description,
  id,
}) {
  const dispatch = useDispatch();
  const clickHandle = (productId) => {
    dispatch(deleteProduct(productId));
  };
  return (
    <Box
      style={{ margin: "24px" }}
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
          ${price}
        </Box>
        <Box
          onClick={clickHandle.bind(this, id)}
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
      </Box>
    </Box>
  );
}
