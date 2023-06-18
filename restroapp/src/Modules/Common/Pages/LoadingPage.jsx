import React, { useEffect, useState } from "react";
import ImageComponent from "../../../Common/UIElements/Image";
import { styled } from "@mui/system";
import Grid from "@mui/material/Grid";
import { ThemeItemDetails } from "../../../Themes/ItemDetails_theme";
import Typography from "@mui/material/Typography";

const LoadingPage = ({ nextPage }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      nextPage();
    }, 1000);

    return () => clearTimeout(timer);
  }, [nextPage]);

  const handleTransitionEnd = () => {
    setIsLoading(false);
  };
  const StyledLayoutContainer = styled(
    Grid,
    {}
  )({
    ...ThemeItemDetails,
  });
  return (
    <StyledLayoutContainer onTransitionEnd={handleTransitionEnd}>
      {isLoading && (
        <Grid
          display={"flex"}
          minHeight={"100vh"}
          container
          /*className={`global-theme-color loading-page-container ${
            isLoading ? "fade-out" : ""
          }`}*/
          className={`global-theme-color`}
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item xs={12} alignItems={"center"}>
            <ImageComponent
              className={"loading-image"}
              name={"circleLogoWhite2"}
              roundedCorners
            />
          </Grid>
          <Grid item xs={12}>
            <Typography
              variant={"body1"}
              className={"text-align-center global-font"}
              sx={{ color: "#fff" }}
            >
              Restaurant and Take away!
            </Typography>
          </Grid>
        </Grid>
      )}
    </StyledLayoutContainer>
  );
};

export default LoadingPage;
