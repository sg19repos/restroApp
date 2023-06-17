import React from "react";
import { Icon } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import ArrowBack from "@mui/icons-material/ArrowBack";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LocalDiningOutlinedIcon from "@mui/icons-material/LocalDiningOutlined";
import SearchIcon from "@mui/icons-material/Search";

const IconComponent = ({ name, ...rest }) => {
  const getIcon = (iconName) => {
    switch (iconName) {
      case "FavoriteBorderIcon":
        return <FavoriteBorderIcon />;
      case "StarBorderIcon":
        return <StarBorderIcon />;
      case "ArrowBackIcon":
        return <ArrowBack />;
      case "ShoppingCartIcon":
        return <ShoppingCartIcon />;
      case "AccountCircleIcon":
        return <AccountCircleIcon />;
      case "LocalDiningOutlinedIcon":
        return <LocalDiningOutlinedIcon />;
      case "SearchIcon":
        return <SearchIcon />;
      case "edit":
        return "edit";
      case "delete":
        return "delete";
      // Add more cases for other icons as needed
      default:
        return "";
    }
  };
  // return <Icon {...rest}>{name}</Icon>;
  const icon = getIcon(name);
  return <Icon {...rest}>{icon}</Icon>;
  // return <FavoriteBorderIcon />;
};

export default IconComponent;
