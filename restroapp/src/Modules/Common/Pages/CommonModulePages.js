import React from "react";
import { LandingPage } from "./LandingPage";
import {
  LandingPagePath,
  ItemDetailsPath,
  CartPath,
} from "./Routes/CommonModuleRoutes";
import { ItemDetails } from "./ItemDetails/ItemDetails";
import { ItemDetailsProps } from "../../../Constants/constants";
import { CartPage } from "./CartPage";

const CommonModulePages = ({ page }) => {
  switch (page) {
    case LandingPagePath:
      return <LandingPage />;
    case ItemDetailsPath:
      return <ItemDetails itemProps={ItemDetailsProps} />;
    case CartPath:
      return <CartPage />;
    default:
      return <LandingPage />;
  }
};

export default CommonModulePages;
