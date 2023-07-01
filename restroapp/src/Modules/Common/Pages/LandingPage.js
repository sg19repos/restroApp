import React, { useEffect } from "react";
import { MainMenu } from "./MainMenuPage";
import { styled } from "@mui/system";
import Grid from "@mui/material/Grid";
import { ThemeItemDetails } from "../../../Themes/ItemDetails_theme";
import { getFireStoreElements } from "../../../Utils/utils";

export const LandingPage = () => {
  const StyledLayoutContainer = styled(
    Grid,
    {}
  )({
    ...ThemeItemDetails,
  });

  useEffect(() => {
    getFireStoreElements("itemDetails");
  }, []);
  return (
    <StyledLayoutContainer>
      <MainMenu />
    </StyledLayoutContainer>
  );
};
