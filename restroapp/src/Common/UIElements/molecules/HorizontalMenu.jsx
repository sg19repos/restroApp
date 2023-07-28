import React from "react";
import { Grid, Link, Paper } from "@mui/material";
import { snacks, dinner, breakfast } from "../../../Constants/constants";
import ImageComponent from "../Image";
import Typography from "@mui/material/Typography";
import IconComponent from "../Icons";
import { themeColor } from "../../../Themes/GlobalThemes";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import { useNavigate } from "react-router-dom";

export const HorizontalMenu = ({ menuTime }) => {
  let temp = [];
  if (menuTime === "breakFast") {
    temp = breakfast;
  } else if (menuTime === "snacks") {
    temp = snacks;
  } else if (menuTime === "dinner") {
    temp = dinner;
  }

  const navigate = useNavigate();
  const handleItemClick = (itemId) => {
    navigate(`/itemCategories?itemCategory=${itemId}`);
  };

  return (
    <div className="App">
      <div style={{ width: "100%", overflow: "auto" }}>
        <Grid container spacing={2} wrap="nowrap">
          {temp.map((item, index) => {
            if (index <= 2) {
              return (
                <Grid
                  item
                  key={index}
                  onClick={() => handleItemClick(item.itemTime)}
                >
                  <Card item={item} />
                </Grid>
              );
            }
            if (index === 3) {
              return (
                <Grid item xs={12} textAlign={"center"}>
                  <IconComponent
                    name={"ArrowCircleRightOutlinedIcon"}
                    sx={{
                      color: themeColor,
                      padding: "4rem 2rem 0rem 2rem",
                      fontSize: "2rem",
                    }}
                  />
                  <Link variant="body1" color={themeColor}>
                    Show more
                  </Link>
                </Grid>
              );
            }
          })}
        </Grid>
      </div>
    </div>
  );
};

const Card = ({ item }) => {
  return (
    <Paper
      sx={{
        height: "150px",
        width: "150px",
        margin: "0.5rem",
        padding: "0.5rem 0rem",
      }}
    >
      <Grid container direction="row" sx={{ height: "100%" }}>
        <Grid item xs={12} sx={{ height: "60%", padding: "0.5rem" }}>
          <ImageComponent
            name={item.imageUrl}
            roundedCorners
            className={"menu-item-image"}
            sx={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </Grid>
        <Grid
          item
          xs={12}
          sx={{
            height: "40%",
            marginTop: "0.5rem",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            borderRadius: "5% 5% 0% 0%",
          }}
        >
          <Grid container>
            <Grid item xs={12}>
              <Grid container direction={"row"}>
                <Grid item xs={10}>
                  <Typography
                    variant="caption"
                    className={"text-align-center global-font"}
                    sx={{
                      padding: "0.5rem",
                      color: "white",
                      fontSize: "0.8rem",
                      fontWeight: "800",
                      overflow: "hidden",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {item.itemTitle}
                  </Typography>
                </Grid>
                <Grid item xs={2} sx={{ paddingTop: "0.5rem" }}>
                  <FiberManualRecordIcon
                    sx={{
                      color: "green",
                      fontSize: "0.5rem",
                      border: "1px solid green",
                      borderRadius: "20%",
                      padding: "2px",
                    }}
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              {item.perPlatePieces && (
                <Typography
                  variant="caption"
                  className={"text-align-center global-font"}
                  sx={{ padding: "0.5rem", color: "white" }}
                >
                  {item.perPlatePieces} pieces
                </Typography>
              )}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default HorizontalMenu;
