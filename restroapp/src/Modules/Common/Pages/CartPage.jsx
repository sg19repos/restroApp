import React, { useEffect, useState } from "react";
import {
  Container,
  Typography,
  IconButton,
  Button,
  Paper,
} from "@mui/material";
import { styled } from "@mui/system";
import Grid from "@mui/material/Grid";
import { ThemeCart } from "../../../Themes/CartThemes";
import IconComponent from "../../../Common/UIElements/Icons";
import ImageComponent from "../../../Common/UIElements/Image";
import {
  GlobalFont,
  GlobalFontColor,
  GlobalThemes,
  themeColor,
} from "../../../Themes/GlobalThemes";
import { Currency } from "../../../Common/UIElements/atoms/Currency";
import { ShippingAddress } from "../../../Common/UIElements/molecules/ShippingAddress";
import { Total2 } from "../../../Common/UIElements/atoms/Totals2";
import { handleAlterCart } from "../../../Utils/utils";

export const CartPage = ({ cart, cartTotal, setCartTotal, setCart }) => {
  const [cartTemp, setCartTemp] = useState({ ...cart });
  useEffect(() => {
    setCartTemp({ ...cart });
    let cartTotalTemp = 0;
    cart &&
      Object.keys(cart)?.length &&
      Object.keys(cart)?.forEach((element) => {
        cartTotalTemp +=
          cart?.[element]?.itemPrice * (cart?.[element]?.quantity || 1);
      });
    setCartTotal(cartTotalTemp);
  }, [cart]);
  const handleIncreaseQuantity = (item) => {
    handleAlterCart(item, "increase", setCart, setCartTotal);
  };
  const handleDecreaseQuantity = (item) => {
    handleAlterCart(item, "decrease", setCart, setCartTotal);
  };

  const StyledCart = styled(
    Grid,
    {}
  )({
    ...ThemeCart,
    ...GlobalThemes,
  });

  return (
    <StyledCart>
      <Container maxWidth="sm" sx={ThemeCart.root}>
        <Typography
          variant="h5"
          align="center"
          gutterBottom
          sx={{ ...GlobalFont, ...GlobalFontColor, paddingBottom: "2rem" }}
        >
          Cart
        </Typography>
        <Typography
          variant="body2"
          align="left"
          sx={{ ...GlobalFont, ...GlobalFontColor, paddingBottom: "1rem" }}
        >
          Shipping address
        </Typography>
        <ShippingAddress address="4-4-91, 4th lane, 5th apartment, Bayyapanahalli, Bengaluru south" />

        <Typography
          variant="body2"
          align="left"
          sx={{ ...GlobalFont, ...GlobalFontColor, padding: "1rem 0rem" }}
        >
          Order summary
        </Typography>
        <Grid container spacing={2} direction={"column"} alignItems={"center"}>
          {cartTemp && Object.keys(cartTemp)?.length ? (
            Object.keys(cartTemp)?.map((item) => (
              <Grid item xs={12} key={item.itemId} width={"300px"}>
                <Paper sx={ThemeCart.paper} elevation={2}>
                  <Grid
                    container
                    direction={"row"}
                    padding={"0.8rem"}
                    justifyContent="space-between"
                  >
                    <Grid item xs={3}>
                      <ImageComponent
                        name={cartTemp[item].itemId}
                        width={"100%"}
                        height={"100%"}
                        roundedCorners
                        className={"thumbnail"}
                      />
                    </Grid>
                    <Grid item xs={8} sx={{ paddingLeft: "0.75rem" }}>
                      <Grid
                        container
                        direction={"column"}
                        justifyContent="space-between"
                      >
                        <Grid item xs={12} maxHeight={"1.5rem"}>
                          <Grid
                            container
                            direction={"row"}
                            justifyContent={"space-around"}
                          >
                            <Grid item xs={9}>
                              <Typography
                                sx={{
                                  primary: ThemeCart.title,
                                  secondary: ThemeCart.description,
                                  ...GlobalFont,
                                  ...GlobalFontColor,
                                }}
                                variant={"body2"}
                                // fontSize={"0.85rem"}
                              >
                                {cartTemp[item]?.itemTitle}
                              </Typography>
                            </Grid>
                            <Grid item xs={3}>
                              <Typography
                                sx={{
                                  primary: ThemeCart.title,
                                  secondary: ThemeCart.description,
                                  ...GlobalFont,
                                  ...GlobalFontColor,
                                }}
                                fontSize={"0.8rem"}
                              >
                                # {cartTemp[item]?.quantity}
                              </Typography>
                            </Grid>
                          </Grid>
                        </Grid>
                        <Grid item xs={12} paddingTop={"0.25rem"}>
                          <Currency
                            amount={cartTemp[item]?.itemPrice}
                            color={themeColor}
                            fontSize={"0.8rem"}
                          />
                        </Grid>
                        <Grid item xs={12} paddingTop={"0.25rem"}>
                          <Typography
                            sx={{
                              primary: ThemeCart.title,
                              secondary: ThemeCart.description,
                              ...GlobalFont,
                              ...GlobalFontColor,
                            }}
                            fontSize={"0.6rem"}
                          >
                            Total :{" "}
                            {cartTemp[item]?.quantity *
                              cartTemp[item]?.itemPrice}
                          </Typography>
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid item xs={1}>
                      <Grid
                        container
                        direction="column"
                        justifyContent="space-between"
                        alignItems="center"
                        minHeight={"90%"}
                      >
                        <Grid
                          item
                          xs={12}
                          height={"inherit"}
                          color={themeColor}
                        >
                          <IconButton
                            edge="start"
                            color="inherit"
                            aria-label="back"
                            onClick={() => {
                              handleIncreaseQuantity(cartTemp[item]);
                            }}
                            sx={{ padding: "0.25rem" }}
                          >
                            <IconComponent
                              name={"AddBoxIcon"}
                              color={themeColor}
                            />
                          </IconButton>
                        </Grid>
                        <Grid item xs={12} color={themeColor}>
                          <IconButton
                            edge="start"
                            color="inherit"
                            aria-label="back"
                            onClick={() => {
                              handleDecreaseQuantity(cartTemp[item]);
                            }}
                            sx={{ padding: "0.25rem" }}
                          >
                            <IconComponent
                              name={"IndeterminateCheckBoxOutlinedIcon"}
                              color={themeColor}
                            />
                          </IconButton>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Paper>
              </Grid>
            ))
          ) : (
            <Paper
              sx={{ ...ThemeCart.paper, width: "280px", marginTop: "1rem" }}
              elevation={1}
            >
              <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
              >
                <Grid item xs={12} sx={{ margin: "4rem" }}>
                  <Typography
                    sx={{
                      primary: ThemeCart.title,
                      secondary: ThemeCart.description,
                      ...GlobalFont,
                      ...GlobalFontColor,
                    }}
                    fontSize={"0.6rem"}
                  >
                    Please add items to your cart
                  </Typography>
                </Grid>
              </Grid>
            </Paper>
          )}
        </Grid>
        <Grid container direction={"column"}>
          <Grid item xs={12} sx={{ margin: "2rem 0rem" }}>
            <Total2 totalAmount={cartTotal} />
          </Grid>
          <Grid item xs={12} alignSelf={"center"}>
            <Button
              variant="contained"
              color="primary"
              size={"large"}
              sx={ThemeCart.checkoutButton}
            >
              Proceed to Checkout
            </Button>
          </Grid>
        </Grid>
      </Container>
    </StyledCart>
  );
};
