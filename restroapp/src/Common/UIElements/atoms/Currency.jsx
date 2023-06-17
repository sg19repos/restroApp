import React from "react";
import Typography from "@mui/material/Typography";

export const Currency = ({ amount, fontSize }) => {
  const currencySymbol = (
    <Typography variant="body2" className={"currency-symbol"}>
      ₹
    </Typography>
  );
  return (
    <>
      {currencySymbol}
      <Typography
        variant="body2"
        sx={{ fontSize: fontSize }}
        className={"list-item-font"}
      >
        {amount}
      </Typography>
    </>
  );
};
