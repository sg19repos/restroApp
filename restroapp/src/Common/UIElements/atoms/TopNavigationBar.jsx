import React from "react";
import { AppBar, Toolbar, Typography, IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";
import IconComponent from "../Icons";
import ImageComponent from "../Image";

const TopNavBar = () => {
  const navigate = useNavigate();
  const handleIconClick = (path) => {
    navigate(path);
  };
  return (
    <AppBar position="absolute" elevation={0} color={"transparent"}>
      <Toolbar>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="back"
          onClick={() => handleIconClick("/home")}
        >
          <IconComponent
            name="ArrowBackIcon"
            sx={{
              color: "#774936",
            }}
          />
        </IconButton>
        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1, textAlign: "center" }}
        ></Typography>
        <div className={"navbar-icons-alignment"}>
          {/*<IconButton
            edge="center"
            color="inherit"
            aria-label="cart"
            sx={{ margin: "0rem 4rem" }}
            onClick={() => handleIconClick("/home")}
          >
            <ImageComponent name="circleLogo" width={"30px"} height={"30px"} />
          </IconButton>*/}
          <IconButton
            edge="end"
            color="inherit"
            aria-label="cart"
            onClick={() => handleIconClick("/cart")}
          >
            <IconComponent
              name="LocalDiningOutlinedIcon"
              sx={{
                color: "#774936",
              }}
            />
          </IconButton>
          <IconButton
            color="inherit"
            aria-label="account"
            onClick={() => handleIconClick("/account")}
            sx={{ marginLeft: "1rem" }}
          >
            <IconComponent
              name="AccountCircleIcon"
              sx={{
                color: "#774936",
              }}
            />
          </IconButton>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default TopNavBar;
