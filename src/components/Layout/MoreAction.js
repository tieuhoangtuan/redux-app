import * as React from "react";

import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import RemoveShoppingCartIcon from "@mui/icons-material/RemoveShoppingCart";
import EditIcon from "@mui/icons-material/Edit";
import { useDispatch } from "react-redux";
import { deleteAllProducts } from "../../actions/cartActions";
import Tooltip from "@mui/material/Tooltip";

export default function OpenIconSpeedDial() {
  const dispatch = useDispatch();

  return (
    <Tooltip
      title="More action"
      placement="left-end"
      arrow
    >
      <SpeedDial
        style={{ position: "fixed" }}
        ariaLabel="SpeedDial openIcon example"
        sx={{
          position: "absolute",
          bottom: 16,
          right: 16,
        }}
        icon={
          <SpeedDialIcon
            openIcon={<EditIcon />}
          />
        }
      >
        <SpeedDialAction
          icon={
            <RemoveShoppingCartIcon
              onClick={() => {
                dispatch(deleteAllProducts());
              }}
            />
          }
          tooltipTitle="Delete all products in cart"
        />
      </SpeedDial>
    </Tooltip>
  );
}
