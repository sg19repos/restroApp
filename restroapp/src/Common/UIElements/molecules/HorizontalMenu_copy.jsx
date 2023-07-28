import React from "react";
import { Grid, Card, CardContent, IconButton } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const HorizontalMenu = () => {
  const menuItems = [
    { title: "Item 1", content: "Content of Item 1" },
    { title: "Item 2", content: "Content of Item 2" },
    { title: "Item 3", content: "Content of Item 3" },
    { title: "Item 4", content: "Content of Item 4" },
    // Add more items here...
  ];

  return (
    <Grid
      container
      alignItems="center"
      sx={{ overflowX: "auto", padding: "16px", width: "100vw" }}
    >
      <Grid
        container
        spacing={2}
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        {menuItems.map((item, index) => (
          <Grid item key={index} xs={3}>
            <Card sx={{ minWidth: 200 }}>
              <CardContent>
                <h3>{item.title}</h3>
                <p>{item.content}</p>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Grid item sx={{ marginLeft: "auto" }}>
        <IconButton color="primary" aria-label="More">
          <ArrowForwardIcon />
        </IconButton>
      </Grid>
    </Grid>
  );
};

export default HorizontalMenu;
