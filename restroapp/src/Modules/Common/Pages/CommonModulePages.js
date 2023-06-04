import React from "react";
import { LandingPage } from "./LandingPage";
import { LandingPagePath } from "./Routes/CommonModuleRoutes";

const CommonModulePages = ({ page }) => {
  switch (page) {
    case LandingPagePath:
      return <LandingPage />;
    default:
      return <>Test4</>;
  }
};

export default CommonModulePages;
