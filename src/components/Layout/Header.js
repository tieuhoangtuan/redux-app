import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import CartBadge from "./CartBadge";

export default function Header() {
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

          <Link to="/cart">
            <CartBadge />
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
