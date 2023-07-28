import React from "react";
import { LandingPage } from "./LandingPage";
import {
  LandingPagePath,
  ItemDetailsPath,
  CartPath,
  AccountPath,
  ItemCategoriesPath,
  LoginPath,
} from "./Routes/CommonModuleRoutes";
import { ItemDetails } from "./ItemDetails/ItemDetails";
import { ItemDetailsProps } from "../../../Constants/constants";
import { CartPage } from "./CartPage";
import { MyAccountPage } from "./AccountPage";
import { ItemCategories } from "./ItemCategories";
import { LoginPage } from "./LoginPage";

const CommonModulePages = ({
  page,
  cart,
  setCart,
  cartTotal,
  setCartTotal,
}) => {
  switch (page) {
    case LandingPagePath:
      return <LandingPage />;
    case ItemDetailsPath:
      return (
        <ItemDetails
          itemProps={ItemDetailsProps}
          cart={cart}
          setCart={setCart}
        />
      );
    case ItemCategoriesPath:
      return <ItemCategories cart={cart} setCart={setCart} />;
    case CartPath:
      return (
        <CartPage
          cart={cart}
          cartTotal={cartTotal}
          setCartTotal={setCartTotal}
          setCart={setCart}
        />
      );
    case AccountPath:
      return (
        <MyAccountPage accountName={"John Doe"} accountPhone={"+9698969896"} />
      );
    case LoginPath:
      return <LoginPage />;
    default:
      return <LandingPage />;
  }
};

export default CommonModulePages;
