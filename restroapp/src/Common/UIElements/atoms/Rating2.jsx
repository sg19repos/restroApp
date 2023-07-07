import * as React from "react";
import Rating from "@mui/material/Rating";
import { Typography } from "@mui/material";

export const Rating2 = ({ rating, totalRatings, showTotals }) => {
  return (
    <>
      <Rating name="size-small" defaultValue={rating} size="small" />
      {showTotals && <Typography component="legend">{totalRatings}</Typography>}
    </>
  );
};
