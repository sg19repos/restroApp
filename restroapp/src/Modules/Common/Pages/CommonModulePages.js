import React from "react";
import { LandingPage } from "./LandingPage";
import {
  LandingPagePath,
  ItemDetailsPath,
  CartPath,
  AccountPath,
} from "./Routes/CommonModuleRoutes";
import { ItemDetails } from "./ItemDetails/ItemDetails";
import { ItemDetailsProps } from "../../../Constants/constants";
import { CartPage } from "./CartPage";
import { MyAccountPage } from "./AccountPage";

const CommonModulePages = ({ page }) => {
  switch (page) {
    case LandingPagePath:
      return <LandingPage />;
    case ItemDetailsPath:
      return <ItemDetails itemProps={ItemDetailsProps} />;
    case CartPath:
      return <CartPage />;
    case AccountPath:
      return (
        <MyAccountPage accountName={"John Doe"} accountPhone={"+9698969896"} />
      );
    default:
      return <LandingPage />;
  }
};

export default CommonModulePages;
