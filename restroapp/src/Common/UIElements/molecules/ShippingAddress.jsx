import React from "react";
import { Typography, Box, Paper, IconButton } from "@mui/material";
import { Room } from "@mui/icons-material";
import { GlobalFont, GlobalFontColor } from "../../../Themes/GlobalThemes";

export const ShippingAddress = ({ address }) => {
  return (
    <Paper
      component={Box}
      display="flex"
      alignItems="center"
      padding="1rem"
      marginBottom="2rem"
      boxShadow={0}
    >
      <IconButton edge="start" color="primary" aria-label="navigate">
        <Room />
      </IconButton>
      <Box flexGrow={1} ml={1}>
        <Typography
          variant="caption"
          sx={{ ...GlobalFont, ...GlobalFontColor }}
        >
          {address}
        </Typography>
      </Box>
    </Paper>
  );
};
