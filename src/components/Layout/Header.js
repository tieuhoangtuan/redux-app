import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import CartBadge from "./CartBadge";
import { useSelector } from "react-redux";
import IconButton from "@mui/material/IconButton";
import HomeIcon from "@mui/icons-material/Home";
import GroupIcon from "@mui/icons-material/Group";
import Tooltip from "@mui/material/Tooltip";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";

const StyledBadge = styled(Badge)(
  ({ theme }) => ({
    "& .MuiBadge-badge": {
      right: -3,
      top: 13,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: "0 4px",
    },
  }),
);
export default function Header() {
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
              <Tooltip title="Home" arrow>
                <IconButton aria-label="home">
                  <HomeIcon
                    style={{ color: "black" }}
                  />
                </IconButton>
              </Tooltip>
            </Link>
            <Link
              style={{
                textDecoration: "none",
                color: "black",
              }}
              to="/list"
            >
              <Tooltip title="Team" arrow>
                <IconButton aria-label="home">
                  <StyledBadge
                    badgeContent={5}
                    color="secondary"
                  >
                    <GroupIcon
                      style={{ color: "black" }}
                    />
                  </StyledBadge>
                </IconButton>
              </Tooltip>
            </Link>
          </Typography>

          <Typography
            variant="h5"
            component="div"
            sx={{ flexGrow: 1 }}
            style={{ color: "black" }}
          >
            Total: {price} $
          </Typography>

          <Link to="/cart">
            <CartBadge />
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
