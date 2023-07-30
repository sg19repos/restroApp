import React, { useState, useEffect } from "react";
import { Button, Grid, Paper, Typography } from "@mui/material";
import ImageComponent from "../../../Common/UIElements/Image";
import {
  GlobalFont,
  GlobalFontColor,
  GlobalThemeColor,
  themeColor,
} from "../../../Themes/GlobalThemes";
import { Currency } from "../../../Common/UIElements/atoms/Currency";
import { useLocation, useNavigate } from "react-router-dom";
import {
  breakfast,
  breakFastMenu,
  dinner,
  itemCategories,
  menuItems,
  snacks,
} from "../../../Constants/constants";
import QuantitySelectionBtn from "../../../Common/UIElements/molecules/QuantitySelectionBtn";
import { ItemTile } from "../../../Common/UIElements/molecules/ItemTile";
import { ItemTile2 } from "../../../Common/UIElements/molecules/ItemTile2";
import { filterItemsByCriteria } from "../../../Utils/utils";

export const ItemCategories = ({ cart, setCart }) => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const itemCategory = searchParams.get("itemCategory");

  const navigate = useNavigate();
  const handleItemClick = (itemId) => {
    navigate(`/itemDetails?itemId=${itemId}`);
  };

  let temp = filterItemsByCriteria(itemCategory, menuItems);

  return (
    <Grid container style={{ height: "100vh" }}>
      <Grid item xs={12} style={{ height: "20%", display: "block" }}>
        <Grid
          container
          justifyContent="flex-end"
          alignItems="center"
          style={{ height: "100%" }}
          sx={{ ...GlobalThemeColor }}
        >
          <Grid item xs={6}>
            <Typography
              sx={{
                ...GlobalFont,
                paddingLeft: "1rem",
                textTransform: "uppercase",
                fontWeight: "bold",
              }}
              variant={"h5"}
              color={"#fff"}
            >
              {itemCategory}
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <ImageComponent
              name={itemCategory}
              height={"150px"}
              width={"150px"}
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} style={{ height: "80%", overflowY: "scroll" }}>
        <Grid container>
          {/*{itemCategories[itemCategory] &&
          Object.values(itemCategories[itemCategory])?.length
            ? Object.values(itemCategories[itemCategory]).map((element) => {
                return (
                  <ItemTile element={element} cart={cart} setCart={setCart} />
                );
              })
            :*/}
          {temp?.map((element) => {
            return (
              <Grid item xs={6} sx={{ marginTop: "1rem" }}>
                <ItemTile2 element={element} cart={cart} setCart={setCart} />
              </Grid>
            );
          })}
        </Grid>
      </Grid>
    </Grid>
  );
};
