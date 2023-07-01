import React, { useState } from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { handleAddItem } from "../../../Utils/utils";

const QuantitySelectionBtn = ({ cart, setCart, item }) => {
  const [quantity, setQuantity] = useState(
    cart?.[item.itemId]?.quantity !== undefined
      ? cart?.[item.itemId]?.quantity
      : 1
  );

  const handleIncrement = () => {
    /*setQuantity((prevState) => {
      return prevState + 1;
    });*/
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    } else {
      setQuantity(0);
    }
  };

  return (
    <Box display="flex" alignItems="center" width="100%">
      <Button
        variant="outlined"
        sx={{
          flex: 1,
          height: "80%",
          margin: "0 8px",
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
          padding: "6px",
          border: "1px solid rgba(0, 0, 0, 0.23)",
          borderRadius: 2,
        }}
      >
        <Typography
          variant="h4"
          onClick={handleDecrement}
          className={"global-font-color"}
        >
          -
        </Typography>

        <Typography variant="h6" className={"global-font-color"}>
          {quantity !== undefined ? quantity : 1}
        </Typography>

        <Typography
          variant="h6"
          onClick={handleIncrement}
          className={"global-font-color"}
        >
          +
        </Typography>
      </Button>

      <Button
        variant="contained"
        color="primary"
        onClick={() => handleAddItem(item, quantity, setCart)}
        sx={{
          flex: 1,
          height: "100%",
          fontSize: "0.9rem",
        }}
        className={"global-theme-color"}
      >
        Add Item ₹
        {parseInt(item.itemPrice * (quantity !== undefined ? quantity : 1))}
      </Button>
    </Box>
  );
};

export default QuantitySelectionBtn;
