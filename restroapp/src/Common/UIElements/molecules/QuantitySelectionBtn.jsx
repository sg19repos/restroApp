import React, { useState } from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";

const QuantitySelectionBtn = ({ price }) => {
  const [quantity, setQuantity] = useState(1);

  const handleIncrement = () => {
    setQuantity((prevState) => {
      return prevState + 1;
    });
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleAddItem = () => {
    // Implement the logic for adding the item to the cart or performing any other action.
    // You can access the selected quantity using the `quantity` state variable.
    // You can also access the `price` prop for further processing.

    // For demonstration purposes, we'll simply log the selected quantity and price.
    console.log(`Quantity: ${quantity}`);
    console.log(`Price: ${price}`);
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
          {quantity}
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
        onClick={handleAddItem}
        sx={{
          flex: 1,
          height: "100%",
          fontSize: "0.9rem",
        }}
        className={"global-theme-color"}
      >
        Add Item ₹{parseInt(price * quantity)}
      </Button>
    </Box>
  );
};

export default QuantitySelectionBtn;
