import React, { useEffect, useState } from "react";
import { TextField, InputAdornment, Grid, Paper, Chip } from "@mui/material";
import IconComponent from "../../../Common/UIElements/Icons";
import { useNavigate } from "react-router-dom";
import ImageComponent from "../../../Common/UIElements/Image";
import { MenuItems } from "../../../Constants/constants";
import Typography from "@mui/material/Typography";
import { getFireStoreElements } from "../../../Utils/utils";
import HorizontalMenu from "../../../Common/UIElements/molecules/HorizontalMenu";
import { Stack } from "@mui/system";

export const MainMenu = () => {
  const [searchText, setSearchText] = useState("");
  const [selectedChip, setSelectedChip] = useState("breakFast");
  let menuItems = localStorage.getItem("menu");
  let menuTemp = menuItems?.length ? JSON.parse(menuItems) : [];
  const filteredMenuItems = typeof menuTemp === "string" ? menuTemp : menuTemp;
  /*const filteredMenuItems = menuTemp.filter((item) =>
    item.title.toLowerCase().includes(searchText.toLowerCase())
  );*/

  const handleSearchChange = (event) => {
    setSearchText(event.target.value);
  };

  useEffect(() => {
    getFireStoreElements("menu");
  }, []);

  return (
    <div className={"root"}>
      <Grid container spacing={2} direction={"column"} alignItems={"stretch"}>
        <Grid item xs={12} className={"search-container"}>
          <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
          >
            <Grid item xs={12}>
              <ImageComponent
                name="circleLogo"
                width={"100px"}
                height={"110px"}
              />
            </Grid>
            <Grid item xs={12} width={"100%"} paddingBottom={"1rem"}>
              <TextField
                className={"search-field"}
                fullWidth
                variant="outlined"
                placeholder="Search for your favorite dishes"
                value={searchText}
                onChange={handleSearchChange}
                InputProps={{
                  startAdornment: (
                    <InputAdornment
                      position="start"
                      sx={{ paddingRight: "4px" }}
                    >
                      <IconComponent name={"SearchIcon"} />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} className={"search-label"}>
          <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
          >
            <Grid item xs={12}>
              <Typography
                alignItems={"center"}
                variant="overline"
                className={"text-align-center global-font global-font-color"}
                padding={"1rem"}
              >
                What's on your mind?
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sx={{ margin: "0rem 1rem" }}>
          <Typography
            alignItems={"left"}
            variant="body1"
            className={"global-font global-font-color"}
            padding={"1rem 0rem 0.5rem 0rem"}
            fontWeight={"800"}
          >
            Popular menus
          </Typography>
        </Grid>
        <Grid item xs={12} sx={{ margin: "0rem 2rem" }}>
          <Stack direction="row" spacing={3}>
            <Chip
              label="Breakfast"
              color="success"
              className={`${selectedChip === "breakFast" ? "chip-button" : ""}`}
              variant="outlined"
              onClick={() => setSelectedChip("breakFast")}
            />
            <Chip
              label="Dinner"
              color="success"
              className={`${selectedChip === "dinner" ? "chip-button" : ""}`}
              variant="outlined"
              onClick={() => setSelectedChip("dinner")}
            />
            <Chip
              label="Snacks"
              color="success"
              className={`${selectedChip === "snacks" ? "chip-button" : ""}`}
              variant="outlined"
              onClick={() => setSelectedChip("snacks")}
            />
          </Stack>
        </Grid>

        <Grid
          item
          xs={12}
          style={{
            width: "80vw",
            overflowX: "auto",
            display: "flex",
            justifyContent: "flex-start",
          }}
        >
          <HorizontalMenu menuTime={selectedChip} />
        </Grid>
        <Grid item xs={12} sx={{ margin: "0rem 1rem" }}>
          <Typography
            alignItems={"left"}
            variant="body1"
            className={"global-font global-font-color"}
            padding={"1rem 0rem 0.5rem 0rem"}
            fontWeight={"800"}
          >
            Categories
          </Typography>
        </Grid>
        <Grid item xs={12} className={"menu-container"}>
          <Grid container spacing={1}>
            <MenuList filteredMenuItems={filteredMenuItems} />
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export const MenuList = ({ filteredMenuItems }) => {
  const navigate = useNavigate();
  const handleItemClick = (itemId) => {
    navigate(`/itemCategories?itemCategory=${itemId}`);
  };

  return (
    <Grid container spacing={1} className={"menu-container"}>
      {filteredMenuItems.map((menuItem) => (
        <Grid
          item
          xs={6}
          sm={8}
          key={menuItem.itemName}
          onClick={() => handleItemClick(menuItem.itemName)}
        >
          <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
          >
            <Grid item xs={12}>
              <Paper elevation={1} className={"menu-item"}>
                <ImageComponent
                  name={menuItem.imageUrl}
                  width={"100%"}
                  height={"100%"}
                  roundedCorners
                  className={"menu-item-image"}
                />
              </Paper>
            </Grid>
            <Grid item xs={12} alignItems={"center"}>
              <Typography
                variant="caption"
                className={"text-align-center global-font global-font-color"}
              >
                {menuItem.title}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      ))}
    </Grid>
  );
};
