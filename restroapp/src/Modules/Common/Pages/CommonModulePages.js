import React from "react";
import { LandingPage } from "./LandingPage";
import { LandingPagePath, ItemDetailsPath } from "./Routes/CommonModuleRoutes";
import { ItemDetails } from "./ItemDetails/ItemDetails";
import { ItemDetailsProps } from "../../../Constants/constants";

const CommonModulePages = ({ page }) => {
  switch (page) {
    case LandingPagePath:
      return <LandingPage />;
    case ItemDetailsPath:
      return <ItemDetails itemProps={ItemDetailsProps} />;
    default:
      return <LandingPage />;
  }
};

export default CommonModulePages;
