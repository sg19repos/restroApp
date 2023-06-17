import React, { useEffect } from "react";
import Grid from "@mui/material/Grid";
import { Paper, Typography } from "@mui/material";
import { styled } from "@mui/system";
import { ThemeItemDetails } from "../../../../Themes/ItemDetails_theme";
import ImageComponent from "../../../../Common/UIElements/Image";
import IconComponent from "../../../../Common/UIElements/Icons";
import StarRating from "../../../../Common/UIElements/atoms/Rating";
import QuantitySelectionBtn from "../../../../Common/UIElements/molecules/QuantitySelectionBtn";
import AddOnItemList from "../../../../Common/UIElements/molecules/AddOnListItems";

export const ItemDetails = ({ itemProps }) => {
  let { itemTitle, itemImage, itemPriceDetails, itemDescription, itemRatings } =
    itemProps || {};

  const StyledLayoutContainer = styled(
    Grid,
    {}
  )({
    ...ThemeItemDetails,
  });
  return (
    <StyledLayoutContainer>
      <Grid container>
        <Grid item xs={12} sx={{ height: "40%" }}>
          <ImageComponent
            name={"biryani"}
            width={"100%"}
            height={"100%"}
            roundedCorners
          />
        </Grid>
        <Grid item xs={12} sx={{ height: "60%", padding: "16px" }}>
          <Typography variant="body1" className={"item-title"}>
            {itemTitle}
          </Typography>
          {/*<IconComponent name="FavoriteBorderIcon" />*/}
          <StarRating value={3.5} ratingsCount={48} />
          <Typography variant="h5" gutterBottom className={"item-sub-title"}>
            {"About"}
          </Typography>
          <Typography
            variant="body2"
            gutterBottom
            className={"item-description"}
          >
            {itemDescription}
          </Typography>
        </Grid>
        <Grid item xs={12} sx={{ margin: "0rem 0.8rem 1rem 0.8rem" }}>
          <Paper elevation={2} sx={{ padding: "0rem 1.5rem" }}>
            <AddOnItemList />
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <QuantitySelectionBtn price={99.9} />
        </Grid>
      </Grid>
    </StyledLayoutContainer>
  );
};
