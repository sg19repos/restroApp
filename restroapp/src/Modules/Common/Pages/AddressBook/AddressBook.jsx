import React, { useState } from "react";
import {
  Grid,
  Typography,
  Card,
  CardContent,
  Radio,
  Button,
} from "@mui/material";
import {
  GlobalFont,
  GlobalFontColor,
  GlobalThemeColor,
  themeColor,
} from "../../../../Themes/GlobalThemes";
import IconComponent from "../../../../Common/UIElements/Icons";
import { styled } from "@mui/system";
import { AddressTheme } from "../../../../Themes/AddressThemes";
import { RadioButtonUnchecked, RadioButtonChecked } from "@mui/icons-material";
import CheckCircleOutlineOutlinedIcon from "@mui/icons-material/CheckCircleOutlineOutlined";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { useNavigate } from "react-router-dom";
import { AddressEntryPagePath } from "../Routes/CommonModuleRoutes";

const addresses = [
  {
    id: "1",
    name: "John Doe",
    addressLine1: "123 Main Street",
    addressLine2: "Apartment 4",
    city: "New York",
    pincode: "10001",
    state: "NY",
  },
  {
    id: "2",
    name: "Jane Smith",
    addressLine1: "456 Maple Avenue",
    addressLine2: "Suite 8",
    city: "Los Angeles",
    pincode: "90001",
    state: "CA",
  },
  // Add more address objects as needed
];

const StyledAddressBookComponent = styled(
  Grid,
  {}
)({
  ...AddressTheme,
});

export const AddressBook = () => {
  const [selectedAddressId, setSelectedAddressId] = useState(1);
  const handleAddressSelect = (addressId) => {
    setSelectedAddressId(addressId);
  };
  const navigate = useNavigate();
  const handleNavigatePage = (path) => {
    navigate(`/` + path);
  };
  return (
    <StyledAddressBookComponent>
      <Grid
        container
        direction="column"
        alignItems="flex-start"
        spacing={2}
        sx={{ width: "100%", margin: "1rem 0.5rem" }}
      >
        <Grid item xs={12}>
          <Typography
            sx={{ ...GlobalFont, ...GlobalFontColor }}
            variant="body1"
          >
            <IconComponent name={"MapsHomeWorkRoundedIcon"} /> Choose delivery
            address
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Button
            fullWidth
            sx={{ ...GlobalFont, ...GlobalThemeColor }}
            variant={"contained"}
            startIcon={<AddCircleIcon />}
            onClick={() => handleNavigatePage(AddressEntryPagePath)}
          >
            Add new
          </Button>
        </Grid>
        {addresses.map((address, index) => (
          <Grid item key={address.id} xs={12} sx={{ width: "100%" }}>
            <Card
              sx={{
                width: "100%",
                position: "relative",
                border: "1px solid " + themeColor,
              }}
            >
              <CardContent onClick={() => handleAddressSelect(address.id)}>
                <Radio
                  checked={selectedAddressId === address.id}
                  onChange={() => handleAddressSelect(address.id)}
                  icon={<RadioButtonUnchecked fontSize="small" />}
                  checkedIcon={<RadioButtonChecked fontSize="small" />}
                  sx={{
                    position: "absolute",
                    top: "8px",
                    right: "8px",
                    ".MuiRadio-colorPrimary": themeColor,
                  }}
                />
                <Typography className={"address-label-text"} variant="h6">
                  {address.name}
                </Typography>
                <Typography className={"address-label-text"}>
                  {address.addressLine1}
                </Typography>
                {address.addressLine2 && (
                  <Typography className={"address-label-text"}>
                    {address.addressLine2}
                  </Typography>
                )}
                <Typography className={"address-label-text"}>
                  {address.city}, {address.pincode}
                </Typography>
                <Typography className={"address-label-text"}>
                  {address.state}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
        <Grid item xs={12} alignItems={"center"} sx={{ marginTop: "2rem" }}>
          <Button
            fullWidth
            sx={{ ...GlobalFont, ...GlobalThemeColor }}
            variant={"contained"}
            startIcon={<CheckCircleOutlineOutlinedIcon />}
          >
            Save Changes
          </Button>
        </Grid>
      </Grid>
    </StyledAddressBookComponent>
  );
};
