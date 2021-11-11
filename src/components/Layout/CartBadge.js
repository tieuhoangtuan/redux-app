import * as React from "react";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useSelector } from "react-redux";
import Tooltip from "@mui/material/Tooltip";
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

export default function CartBadge() {
  const cart = useSelector((state) => state.cart);
  return (
    <Tooltip title="Cart" arrow>
      <IconButton aria-label="cart">
        <StyledBadge
          badgeContent={cart.cartCount}
          color="secondary"
        >
          <ShoppingCartIcon />
        </StyledBadge>
      </IconButton>
    </Tooltip>
  );
}
