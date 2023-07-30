import React from "react";
import {
  Grid,
  Paper,
  Typography,
  Button,
  Chip,
  Avatar,
  Divider,
} from "@mui/material";
import { QuantitySelection2 } from "../atoms/QuantitySelectionBtnGroup";
import ImageComponent from "../Image";
import { Currency } from "../atoms/Currency";
import { GlobalFont } from "../../../Themes/GlobalThemes";
import { Rating2 } from "../atoms/Rating2";
import IconComponent from "../Icons";
import DoneIcon from "@mui/icons-material/Done";
import { useNavigate } from "react-router-dom";
import { padding } from "@mui/system";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import { ItemVegNonVegMappings } from "../../../Constants/mappings";

export const ItemTile2 = ({ element, cart, setCart }) => {
  const navigate = useNavigate();
  const handleItemClick = (itemId) => {
    navigate(`/itemDetails?itemId=${itemId}`);
  };
  return (
    <Paper elevation={2} sx={{ padding: "1rem", margin: "0.25rem" }}>
      <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <Grid item xs={12} alignItems={"center"}>
          <Grid
            container
            direction={"column"}
            alignItems={"center"}
            justifyContent={"center"}
          >
            <Grid item xs={12}>
              <ImageComponent
                name={element.imageUrl}
                width={"95px"}
                height={"100px"}
              />
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12} sx={{ paddingTop: "0.5rem" }}>
          <Divider
            sx={{ height: 1, backgroundColor: "gray", margin: "0.5rem 0" }}
          />
          <Grid container direction="column">
            <Grid item xs={12}>
              <Typography
                sx={{
                  ...GlobalFont,
                  fontWeight: "800",
                  overflow: "hidden",
                  whiteSpace: "nowrap",
                  textOverflow: "ellipsis",
                }}
                variant={"body2"}
              >
                {element.itemTitle}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography
                sx={{
                  ...GlobalFont,
                  fontWeight: "200",
                  overflow: "hidden",
                  whiteSpace: "nowrap",
                }}
                variant={"caption"}
              >
                {element.perPlatePieces}{" "}
                {element.perPlatePieces > 1 ? "pieces" : "piece"}
              </Typography>
            </Grid>
          </Grid>

          <Grid item xs={12} sx={{ fontWeight: "400", margin: "0.5rem 0rem" }}>
            <Grid container direction={"row"}>
              <Grid item xs={10}>
                <Currency amount={element.itemPrice} fontSize={"1.25rem"} />
              </Grid>
              <Grid item xs={2} sx={{ marginTop: "0.25rem" }}>
                <FiberManualRecordIcon
                  sx={{
                    color:
                      element.vegNonVeg === ItemVegNonVegMappings.VEG
                        ? "green"
                        : "red",
                    fontSize: "0.5rem",
                    border:
                      "1px solid " +
                      `${
                        element.vegNonVeg === ItemVegNonVegMappings.VEG
                          ? "green"
                          : "red"
                      }`,
                    borderRadius: "20%",
                    padding: "2px",
                  }}
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid
            item
            xs={12}
            container
            alignItems="center"
            sx={{ margin: "0.5rem 0rem" }}
          >
            <QuantitySelection2 item={element} cart={cart} setCart={setCart} />
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
};
