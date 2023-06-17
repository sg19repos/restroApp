import React from "react";
import { Grid, Rating, Typography } from "@mui/material";
import IconComponent from "../Icons";

const StarRating = ({ value, ratingsCount }) => {
  return (
    <>
      <Grid container sx={{ width: "75%" }}>
        <Grid item xs={7}>
          <Rating
            name="star-rating"
            value={value}
            precision={0.5}
            readOnly
            emptyIcon={<IconComponent name="StarBorderIcon" />}
          />
        </Grid>
        <Grid item xs={5}>
          <Typography variant="body2" color="textSecondary" component="span">
            {ratingsCount} ratings
          </Typography>
        </Grid>
      </Grid>
    </>
  );
};

export default StarRating;
