import React from "react";
import {
  Container,
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  Button,
  Divider,
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
  GlobalThemeColor,
  GlobalThemes,
  themeColor,
} from "../../../Themes/GlobalThemes";
import SubtotalTotalComponent from "../../../Common/UIElements/atoms/cartTotals";
import { Currency } from "../../../Common/UIElements/atoms/Currency";

export const CartPage = () => {
  const cartItems = [
    {
      id: 1,
      thumbnailUrl: "https://example.com/item1.jpg",
      // title: "Item 1",
      title: "Veg biryani",
      price: 10.99,
      quantity: 2,
    },
    {
      id: 2,
      thumbnailUrl: "https://example.com/item2.jpg",
      // title: "Item 2",
      title: "Masala Dosa",
      price: 7.99,
      quantity: 1,
    },
  ];

  const handleIncreaseQuantity = (itemId) => {
    // Handle logic to increase item quantity
  };

  const handleDecreaseQuantity = (itemId) => {
    // Handle logic to decrease item quantity
  };

  const handleRemoveItem = (itemId) => {
    // Handle logic to remove item from cart
  };

  const calculateTotal = () => {
    // Calculate the total price of all items in the cart
    const totalPrice = cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
    return totalPrice.toFixed(2);
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
          sx={{ ...GlobalFont, ...GlobalFontColor, paddingBottom: "4rem" }}
        >
          Cart
        </Typography>
        <Grid container spacing={2} direction={"column"} alignItems={"center"}>
          {cartItems.map((item) => (
            <Grid item xs={12} key={item.id} width={"300px"}>
              <Paper sx={ThemeCart.paper} elevation={2}>
                {/*<ListItem sx={{ ...ThemeCart.listItem }}>*/}
                <Grid
                  container
                  direction={"row"}
                  padding={"0.8rem"}
                  justifyContent="space-between"
                >
                  <Grid item xs={2}>
                    <ImageComponent
                      name={"biryani"}
                      width={"100%"}
                      height={"100%"}
                      roundedCorners
                      className={"thumbnail"}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <Grid
                      container
                      direction={"column"}
                      justifyContent="space-between"
                    >
                      <Grid item xs={12}>
                        <Typography
                          sx={{
                            primary: ThemeCart.title,
                            secondary: ThemeCart.description,
                            ...GlobalFont,
                            ...GlobalFontColor,
                          }}
                        >
                          {item.title}
                        </Typography>
                      </Grid>
                      <Grid item xs={12} paddingTop={"0.25rem"}>
                        <Currency amount={item.price} />
                      </Grid>
                    </Grid>
                  </Grid>

                  <IconComponent name={"RemoveCircleIcon"} color={themeColor} />
                </Grid>
              </Paper>
            </Grid>
          ))}
        </Grid>
        <Grid container direction={"column"}>
          <Grid item xs={12} sx={{ margin: "2rem 0rem" }}>
            <SubtotalTotalComponent />
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
