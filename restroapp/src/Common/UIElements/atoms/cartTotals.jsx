import React from "react";
import { Box, Typography } from "@mui/material";
import { GlobalFont, GlobalFontColor } from "../../../Themes/GlobalThemes";
import { Currency } from "./Currency";

const SubtotalTotalComponent = () => {
  const subTotal = 100; // Example subtotal amount
  const taxRate = 0.13; // Example tax rate
  const total = subTotal + subTotal * taxRate;

  return (
    <Box
      sx={{
        border: "1px dotted #000",
        borderRadius: "10px",
        p: 2,
        ...GlobalFontColor,
      }}
    >
      {/* Subtotal section */}
      <Box sx={{ display: "flex", alignItems: "center", pb: 2 }}>
        <Typography variant="body1" sx={{ pr: 2, ...GlobalFont }}>
          Subtotal:
        </Typography>
        <Box sx={{ flex: 1, borderBottom: "1px dotted #000" }}></Box>

        {/*${subTotal.toFixed(2)}*/}
        <Currency amount={subTotal} />
      </Box>

      {/* Total section */}
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Typography variant="body1" sx={{ pr: 2, ...GlobalFont }}>
          Total:
        </Typography>
        <Box sx={{ flex: 1, borderBottom: "1px dotted #000" }}></Box>
        {/*${total.toFixed(2)}*/}
        <Currency amount={total} />
      </Box>
    </Box>
  );
};

export default SubtotalTotalComponent;
