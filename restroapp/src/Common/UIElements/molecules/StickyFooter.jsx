import React from "react";
import { Grid, Paper, Typography, Button } from "@mui/material";
import { styled } from "@mui/system";
import { ThemeStickyFooter } from "../../../Themes/StickyFooterTheme";
import { Currency } from "../atoms/Currency";
import CircularImagePlaceholder from "../atoms/ImagePlaceHolder";
import IconComponent from "../Icons";
import { themeColor } from "../../../Themes/GlobalThemes";

const StyledFooter = styled(
  Grid,
  {}
)({
  ...ThemeStickyFooter,
});
const StickyFooter = () => {
  return (
    <StyledFooter>
      <Paper className={"footer"} elevation={12}>
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Grid item xs={2}>
            <CircularImagePlaceholder />
          </Grid>
          <Grid item xs={6}>
            <Grid
              container
              direction="column"
              justifyContent="center"
              alignItems="flex-start"
            >
              <Grid item xs={12}>
                <Typography
                  variant={"caption"}
                  fontSize={"0.65rem"}
                  className={"text-align-center global-font"}
                >
                  Veg biryani
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Grid
                  container
                  direction={"row"}
                  alignItems={"left"}
                  justifyContent={"space-around"}
                >
                  <Grid item xs={10}>
                    <Typography
                      variant={"caption"}
                      fontSize={"0.6rem"}
                      className={"text-align-center global-font"}
                    >
                      View menu
                    </Typography>
                  </Grid>
                  <Grid item xs={2}>
                    <IconComponent name={"ArrowRightIcon"} color={themeColor} />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={4}>
            <Button className={"total-button"}>
              <Grid container direction={"column"} alignItems={"center"}>
                <Grid item xs={12}>
                  <Currency amount={100} fontSize={"0.75rem"} />
                </Grid>
                <Grid item xs={12}>
                  <Typography
                    variant={"caption"}
                    className={"text-align-center global-font"}
                    sx={{ color: "#fff" }}
                  >
                    View Cart
                  </Typography>
                </Grid>
              </Grid>
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </StyledFooter>
  );
};

export default StickyFooter;
