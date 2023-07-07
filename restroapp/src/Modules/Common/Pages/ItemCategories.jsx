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
import { itemCategories } from "../../../Constants/constants";
import QuantitySelectionBtn from "../../../Common/UIElements/molecules/QuantitySelectionBtn";
import { ItemTile } from "../../../Common/UIElements/molecules/ItemTile";

export const ItemCategories = ({ cart, setCart }) => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const itemCategory = searchParams.get("itemCategory");

  const navigate = useNavigate();
  const handleItemClick = (itemId) => {
    navigate(`/itemDetails?itemId=${itemId}`);
  };
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
            <ImageComponent name={itemCategory} />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} style={{ height: "80%", overflowY: "scroll" }}>
        {Object.values(itemCategories[itemCategory]).map((element) => {
          return (
            /*<Grid container justifyContent="flex-end" alignItems="center">
              <Paper sx={{ width: "100%", marginTop: "2rem" }} elevation={2}>
                <Grid item xs={12}>
                  <Grid
                    container
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                    padding={"1rem"}
                  >
                    <Grid item xs={4}>
                      <ImageComponent name={element.image} width={"100px"} />
                    </Grid>
                    <Grid item xs={8} sx={{ paddingLeft: "1rem" }}>
                      <Grid
                        container
                        direction={"column"}
                        justifyContent="center"
                      >
                        <Grid item xs={12}>
                          <Typography
                            sx={{
                              ...GlobalFont,
                              fontWeight: "bold",
                            }}
                            variant={"body2"}
                          >
                            {element.title}
                          </Typography>
                        </Grid>
                        <Grid item xs={12}>
                          <Grid
                            container
                            direction={"row"}
                            sx={{
                              marginTop: "1rem",
                              GlobalFont,
                              color: themeColor,
                            }}
                          >
                            <Grid item xs={4} sx={{ fontWeight: "bold" }}>
                              <Currency
                                amount={element.price}
                                fontSize={"1rem"}
                              />
                            </Grid>
                            <Grid item xs={8}>
                              <Button
                                variant={"contained"}
                                size={"small"}
                                sx={{
                                  GlobalFont,
                                  color: themeColor,
                                  backgroundColor: "#fff",
                                  fontSize: "0.5rem",
                                }}
                                onClick={() => handleItemClick(element.id)}
                              >
                                Order now
                              </Button>
                            </Grid>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>*/
            <ItemTile element={element} cart={cart} setCart={setCart} />
          );
        })}
      </Grid>
    </Grid>
  );
};
