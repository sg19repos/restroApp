import React, { useState } from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import { handleAddItem, handleAlterCart } from "../../../Utils/utils";
import Typography from "@mui/material/Typography";
import { GlobalFontColor, themeColor } from "../../../Themes/GlobalThemes";

export const QuantitySelection2 = ({ cart, setCart, item }) => {
  const [quantity, setQuantity] = useState(
    cart?.[item.itemId]?.quantity !== undefined
      ? cart?.[item.itemId]?.quantity
      : 0
  );

  const handleIncrement = () => {
    /*setQuantity((prevState) => {
          return prevState + 1;
        });*/
    setQuantity(quantity + 1);
    handleAlterCart(item, "increase", setCart);
  };

  const handleDecrement = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    } else {
      setQuantity(0);
    }
    handleAlterCart(item, "decrease", setCart);
  };

  return quantity ? (
    <ButtonGroup variant="outlined" aria-label="outlined primary button group">
      <Button onClick={handleDecrement}>-</Button>
      <Button sx={{ fontWeight: "bold" }}>
        {quantity !== undefined ? quantity : 0}
      </Button>
      <Button onClick={handleIncrement}>+</Button>
    </ButtonGroup>
  ) : (
    <Button
      sx={{
        backgroundColor: "#fff",
        padding: "0.1rem",
        "&:hover": {
          backgroundColor: "#fff",
        },
      }}
      variant={"contained"}
      size={"small"}
      onClick={handleIncrement}
      disableRipple
      disableTouchRipple
      disableFocusRipple
    >
      <Typography variant="caption" sx={{ ...GlobalFontColor }}>
        Add
      </Typography>
    </Button>
  );
};
