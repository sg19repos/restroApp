import React from "react";
import { Grid, Paper, Typography, Button, Chip, Avatar } from "@mui/material";
import { QuantitySelection2 } from "../atoms/QuantitySelectionBtnGroup";
import ImageComponent from "../Image";
import { Currency } from "../atoms/Currency";
import { GlobalFont } from "../../../Themes/GlobalThemes";
import { Rating2 } from "../atoms/Rating2";
import IconComponent from "../Icons";
import DoneIcon from "@mui/icons-material/Done";
import { useNavigate } from "react-router-dom";
import { padding } from "@mui/system";

export const ItemTile = ({ element, cart, setCart }) => {
  const navigate = useNavigate();
  const handleItemClick = (itemId) => {
    navigate(`/itemDetails?itemId=${itemId}`);
  };
  return (
    <Paper elevation={2} sx={{ padding: "1rem", margin: "1rem" }}>
      <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <Grid item xs={5} alignItems={"center"}>
          <Grid
            container
            direction={"column"}
            alignItems={"center"}
            justifyContent={"center"}
          >
            <Grid item xs={12}>
              <ImageComponent name={element.imageUrl} width={"100px"} />
            </Grid>
            <Grid item xs={12}>
              <Chip
                label="More details"
                variant="outlined"
                size={"small"}
                onClick={() => handleItemClick(element.itemId)}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={7} sx={{ paddingLeft: "2rem" }}>
          <Grid container direction="column" spacing={1}>
            <Grid item>
              <Typography
                sx={{
                  ...GlobalFont,
                  fontWeight: "200",
                }}
                variant={"body2"}
              >
                {element.itemTitle}
              </Typography>
            </Grid>
            <Grid item xs={4} sx={{ fontWeight: "400" }}>
              <Currency amount={element.itemPrice} fontSize={"1rem"} />
            </Grid>
            <Grid item>
              <Rating2
                rating={4}
                readOnly={true}
                totalRatings={45}
                showTotals={false}
              />
            </Grid>
            <Grid item container alignItems="center">
              <QuantitySelection2
                item={element}
                cart={cart}
                setCart={setCart}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
};
