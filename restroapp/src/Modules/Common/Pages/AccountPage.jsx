import React from "react";
import { Typography, Paper, Grid } from "@mui/material";
import CircularImagePlaceholder from "../../../Common/UIElements/atoms/ImagePlaceHolder";
import {
  GlobalFont,
  GlobalFontColor,
  themeColor,
} from "../../../Themes/GlobalThemes";
import IconComponent from "../../../Common/UIElements/Icons";

export const MyAccountPage = ({ accountName, accountPhone }) => {
  return (
    <div>
      <Typography
        variant="h6"
        align="center"
        gutterBottom
        sx={{ ...GlobalFont, ...GlobalFontColor }}
      >
        Profile
      </Typography>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          paddingTop: "2rem",
        }}
      >
        <CircularImagePlaceholder />
        <Typography
          variant="body1"
          sx={{
            ...GlobalFont,
            ...GlobalFontColor,
            paddingTop: "1rem",
            textTransform: "upperCase",
          }}
        >
          {accountName}
        </Typography>
        <Typography
          variant="caption"
          sx={{
            ...GlobalFont,
            ...GlobalFontColor,
            paddingBottom: "1rem",
            textTransform: "upperCase",
          }}
        >
          {accountPhone}
        </Typography>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: "2rem",
          padding: "2rem",
          ...GlobalFont,
          ...GlobalFontColor,
        }}
      >
        <Paper
          style={{
            width: "250px",
            padding: "20px",
            marginBottom: "10px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Grid container direction={"row"}>
            <Grid item xs={2}>
              <IconComponent
                name={"FastfoodRoundedIcon"}
                sx={{
                  color: themeColor,
                }}
              />
            </Grid>
            <Grid item xs={9}>
              <Typography
                variant="body2"
                sx={{
                  ...GlobalFont,
                  ...GlobalFontColor,
                }}
              >
                Orders
              </Typography>
            </Grid>
            <Grid item xs={1}>
              <IconComponent
                name={"KeyboardArrowRightRoundedIcon"}
                sx={{
                  color: themeColor,
                  align: "right",
                }}
              />
            </Grid>
          </Grid>
        </Paper>
        <Paper
          style={{
            width: "250px",
            padding: "20px",
            marginBottom: "10px",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Grid container direction={"row"}>
            <Grid item xs={2}>
              <IconComponent
                name={"HomeRoundedIcon"}
                sx={{
                  color: themeColor,
                }}
              />
            </Grid>
            <Grid item xs={9}>
              <Typography
                variant="body2"
                sx={{
                  ...GlobalFont,
                  ...GlobalFontColor,
                }}
              >
                Addresses
              </Typography>
            </Grid>
            <Grid item xs={1}>
              <IconComponent
                name={"KeyboardArrowRightRoundedIcon"}
                sx={{
                  color: themeColor,
                  align: "right",
                }}
              />
            </Grid>
          </Grid>
        </Paper>
        <Paper
          style={{
            width: "250px",
            padding: "20px",
            marginBottom: "10px",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Grid container direction={"row"}>
            <Grid item xs={2}>
              {" "}
              <IconComponent
                name={"AccountBalanceWalletRoundedIcon"}
                sx={{
                  color: themeColor,
                }}
              />
            </Grid>
            <Grid item xs={9}>
              {" "}
              <Typography
                variant="body2"
                sx={{
                  ...GlobalFont,
                  ...GlobalFontColor,
                }}
              >
                Payments
              </Typography>
            </Grid>
            <Grid item xs={1}>
              <IconComponent
                name={"KeyboardArrowRightRoundedIcon"}
                sx={{
                  color: themeColor,
                  align: "right",
                }}
              />
            </Grid>
          </Grid>
        </Paper>
        <Paper
          style={{
            width: "250px",
            padding: "20px",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Grid container direction={"row"}>
            <Grid item xs={2}>
              {" "}
              <IconComponent
                name={"LogoutRoundedIcon"}
                sx={{
                  color: "red",
                }}
              />
            </Grid>
            <Grid item xs={9}>
              <Typography variant="body2" sx={{ ...GlobalFont, color: "red" }}>
                Logout
              </Typography>
            </Grid>
            <Grid item xs={1}>
              {" "}
              <IconComponent
                name={"KeyboardArrowRightRoundedIcon"}
                sx={{
                  color: themeColor,
                  align: "right",
                }}
              />
            </Grid>
          </Grid>
        </Paper>
      </div>
    </div>
  );
};
