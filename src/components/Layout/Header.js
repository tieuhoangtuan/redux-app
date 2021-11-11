import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import CartBadge from "./CartBadge";
import { useSelector } from "react-redux";

export default function Header({ type }) {
  const cart = useSelector((state) => state.cart);
  let price = 0;
  cart._products.map((product) => {
    price =
      price + product.quantity * product.price;
  });
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
          >
            <Link
              style={{
                textDecoration: "none",
                color: "black",
              }}
              to="/"
            >
              Redux Cart
            </Link>
          </Typography>
          {type === "cart" && (
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1 }}
              style={{ color: "black" }}
            >
              Total: {price} $
            </Typography>
          )}

          <Link to="/cart">
            <CartBadge />
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
