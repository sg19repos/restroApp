import * as React from "react";
import Rating from "@mui/material/Rating";
import { Typography } from "@mui/material";

export const Rating2 = ({ rating, readOnly, totalRatings, showTotals }) => {
  return (
    <>
      <Rating
        name="size-small"
        readOnly={readOnly}
        defaultValue={rating}
        size="small"
      />
      {showTotals && <Typography component="legend">{totalRatings}</Typography>}
    </>
  );
};
