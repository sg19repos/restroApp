import React from "react";
import { Link } from "react-router-dom";
import { MainMenu } from "./MainMenuPage";
import { styled } from "@mui/system";
import Grid from "@mui/material/Grid";
import { ThemeItemDetails } from "../../../Themes/ItemDetails_theme";

export const LandingPage = () => {
  const StyledLayoutContainer = styled(
    Grid,
    {}
  )({
    ...ThemeItemDetails,
  });
  return (
    <StyledLayoutContainer>
      <MainMenu />
    </StyledLayoutContainer>
  );
};
