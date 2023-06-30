import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import { Paper, Typography } from "@mui/material";
import { styled } from "@mui/system";
import { ThemeItemDetails } from "../../../../Themes/ItemDetails_theme";
import ImageComponent from "../../../../Common/UIElements/Image";
import StarRating from "../../../../Common/UIElements/atoms/Rating";
import QuantitySelectionBtn from "../../../../Common/UIElements/molecules/QuantitySelectionBtn";
import AddOnItemList from "../../../../Common/UIElements/molecules/AddOnListItems";
import { useLocation, useParams } from "react-router-dom";

export const ItemDetails = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const itemId = searchParams.get("itemId");
  const [item, setItem] = useState({});

  useEffect(() => {
    let itemTemp = JSON.parse(localStorage.getItem("itemDetails")).find(
      (element) => {
        return element.itemId === itemId;
      }
    );

    if (itemTemp) {
      setItem(itemTemp);
    } else {
      let itemTemp = JSON.parse(localStorage.getItem("itemDetails")).find(
        (element) => {
          return element.itemId === "generalItem";
        }
      );
      setItem(itemTemp);
    }
  }, [itemId]);

  let { itemDescription, itemPrice, itemRating, itemTitle } = item || {};

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
            name={itemId}
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
          <StarRating value={itemRating} ratingsCount={48} />
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
