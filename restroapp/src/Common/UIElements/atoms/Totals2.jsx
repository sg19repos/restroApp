import React from "react";
import { Grid, Paper, Typography } from "@mui/material";
import {
  GlobalFont,
  GlobalFontColor,
  themeColor,
} from "../../../Themes/GlobalThemes";
import { Currency } from "./Currency";
import { ThemeCart } from "../../../Themes/CartThemes";
import { Box } from "@mui/system";

export const Total2 = ({ totalAmount }) => {
  const discount = 100;
  return (
    <Paper sx={ThemeCart.paper} elevation={2}>
      <Grid
        container
        direction={"column"}
        sx={{
          // border: `1px solid ${themeColor}`,
          borderRadius: "10px",
          padding: "1rem 1rem",
        }}
        justifyContent="space-between"
      >
        <Grid item xs={12} sx={{ padding: "1rem 0.5rem 0rem 1rem" }}>
          <Grid
            container
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Grid item xs={5}>
              <Typography
                variant={"body2"}
                sx={{ ...GlobalFont, ...GlobalFontColor }}
              >
                Subtotal
              </Typography>
            </Grid>
            <Grid item xs={2}>
              <Typography
                variant={"body2"}
                sx={{ ...GlobalFont, ...GlobalFontColor }}
              >
                :
              </Typography>
            </Grid>
            <Grid item xs={5} sx={{ paddingLeft: "2rem" }}>
              <Currency
                amount={totalAmount}
                color={themeColor}
                fontSize={"0.8rem"}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sx={{ padding: "1rem 0.5rem 0rem 1rem" }}>
          <Grid
            container
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Grid item xs={5}>
              <Typography
                variant={"body2"}
                sx={{ ...GlobalFont, ...GlobalFontColor }}
              >
                Discount
              </Typography>
            </Grid>
            <Grid item xs={2}>
              <Typography
                variant={"body2"}
                sx={{ ...GlobalFont, ...GlobalFontColor }}
              >
                :
              </Typography>
            </Grid>
            <Grid item xs={5} sx={{ paddingLeft: "2rem" }}>
              <Currency amount={100} color={themeColor} fontSize={"0.8rem"} />
            </Grid>
          </Grid>
        </Grid>
        <Box sx={{ borderBottom: "1px dotted #000", padding: "1rem" }}></Box>
        <Grid item xs={12} sx={{ padding: "1rem" }}>
          <Grid
            container
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Grid item xs={5}>
              <Typography
                variant={"body2"}
                sx={{ ...GlobalFont, ...GlobalFontColor }}
              >
                Grand total
              </Typography>
            </Grid>
            <Grid item xs={2}>
              <Typography
                variant={"body2"}
                sx={{ ...GlobalFont, ...GlobalFontColor }}
              >
                :
              </Typography>
            </Grid>
            <Grid item xs={5} sx={{ paddingLeft: "2rem" }}>
              <Currency
                // amount={totalAmount - discount}
                amount={totalAmount}
                color={themeColor}
                fontSize={"1rem"}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
};
