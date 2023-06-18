import React from "react";
import { styled } from "@mui/system";
import Grid from "@mui/material/Grid";
import { ImagePlaceHolderTheme } from "../../../Themes/AtomsThemes";
import ImageComponent from "../Image";

const StyledImagePlaceHolder = styled(
  Grid,
  {}
)({
  ...ImagePlaceHolderTheme,
});
const CircularImagePlaceholder = () => {
  return (
    <StyledImagePlaceHolder>
      <div className={"root"}>
        <ImageComponent className={"image"} name={"dosa"} roundedCorners />
      </div>
    </StyledImagePlaceHolder>
  );
};

export default CircularImagePlaceholder;
