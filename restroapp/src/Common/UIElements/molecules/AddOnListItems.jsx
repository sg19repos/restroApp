import React from "react";
import Checkbox from "@mui/material/Checkbox";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import { Currency } from "../atoms/Currency";

const AddOnItemList = () => {
  const itemList = [
    { id: 1, name: "Papad", price: 10 },
    { id: 2, name: "Special Lemon Tea", price: 22 },
    { id: 3, name: "Boiled Egg", price: 15 },
    // Add more items as needed
  ];

  return (
    <List>
      {itemList.map((item) => (
        <ListItem
          key={item.id}
          disableGutters
          sx={{ alignItems: "center", fontSize: "0.8rem" }}
        >
          <ListItemIcon sx={{ minWidth: 0, marginRight: "8px" }}>
            <FiberManualRecordIcon
              sx={{
                color: "green",
                fontSize: "0.5rem",
                border: "1px solid green",
                borderRadius: "20%",
                padding: "2px",
              }}
            />
          </ListItemIcon>
          <ListItemText
            primary={item.name}
            disableTypography
            className={"list-item-font"}
          />
          <Currency amount={item.price} fontSize={"0.75rem"} />
          <Checkbox
            size={"small"}
            sx={{
              color: "#774936",
              "&.Mui-checked": {
                color: "#774936",
              },
            }}
          />
        </ListItem>
      ))}
    </List>
  );
};

export default AddOnItemList;
