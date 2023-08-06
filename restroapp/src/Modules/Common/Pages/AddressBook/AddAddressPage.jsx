import React, { useState } from "react";
import {
  Button,
  FormHelperText,
  Grid,
  IconButton,
  InputAdornment,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import {
  GlobalFont,
  GlobalFontColor,
  GlobalThemeColor,
  themeColor,
} from "../../../../Themes/GlobalThemes";
import { styled } from "@mui/system";
import { AddressTheme } from "../../../../Themes/AddressThemes";
import IconComponent from "../../../../Common/UIElements/Icons";
import CheckCircleOutlineOutlinedIcon from "@mui/icons-material/CheckCircleOutlineOutlined";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { AddressBookPath } from "../Routes/CommonModuleRoutes";
import { useNavigate } from "react-router-dom";

const StyledAddressComponent = styled(
  Grid,
  {}
)({
  ...AddressTheme,
});

export const AddressEntryPage = () => {
  const [ph, setPh] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);

  const handleEmailChange = (event) => {
    const emailValue = event.target.value;
    setEmail(emailValue);
    setEmailError(!isValidEmail(emailValue));
  };
  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  const navigate = useNavigate();
  const handleNavigatePage = (path) => {
    navigate(`/` + path);
  };

  return (
    <StyledAddressComponent>
      <Grid
        container
        spacing={2}
        sx={{
          border: "1px solid #ccc",
          borderRadius: "2%",
          padding: "1rem",
          marginTop: "1rem",
          ...GlobalFont,
          ...GlobalFontColor,
        }}
      >
        <Grid item xs={12}>
          <Typography variant="h6" sx={{ ...GlobalFont }}>
            <IconComponent name={"MapsHomeWorkRoundedIcon"} /> Add your address
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Link
            onClick={() => handleNavigatePage(AddressBookPath)}
            sx={{ ...GlobalFont }}
            variant="body2"
          >
            View Address book
          </Link>
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="name"
            label="Name"
            variant="standard"
            fullWidth
            sx={{ fontFamily: "Poppins !important" }}
            className={"address-input-fields"}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="Mobile number"
            fullWidth
            variant="standard"
            // value={ph.startsWith("+91") ? ph : "+91" + ph}
            value={ph.startsWith("+91") ? ph : "" + ph}
            // onChange={(event) => setPh(event.target.value)}
            onInput={(event) => {
              // Enforce numeric input on non-mobile devices
              event.target.value = event.target.value.replace(/[^0-9]/g, "");
            }}
            onChange={(event) => {
              const inputNumber = event.target.value.replace(/\D/g, ""); // Remove all non-numeric characters
              setPh(
                inputNumber.startsWith("91")
                  ? "+" + inputNumber
                  : "+91" + inputNumber
              );
            }}
            inputProps={{
              inputMode: "numeric",
              pattern: "[0-9]*", // Ensure numeric input on mobile devices
            }}
            sx={{ ...GlobalFont }}
            className={"address-input-fields"}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            fullWidth
            type={"email"}
            variant="standard"
            label="Enter your email"
            sx={{ ...GlobalFont }}
            className={"address-input-fields"}
            value={email}
            onChange={handleEmailChange}
            error={emailError}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton edge="end" disabled>
                    {emailError ? (
                      <IconComponent
                        name={"EmailIcon"}
                        color={"red"}
                        sx={{ color: "red" }}
                      />
                    ) : (
                      <IconComponent name={"EmailIcon"} />
                    )}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          {emailError && (
            <FormHelperText error>Email is not valid</FormHelperText>
          )}
        </Grid>
        <Grid item xs={6}>
          <TextField
            fullWidth
            variant="standard"
            label="Enter your city"
            sx={{ ...GlobalFont }}
            className={"address-input-fields"}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            fullWidth
            variant="standard"
            label="Enter your pincode"
            sx={{ ...GlobalFont }}
            className={"address-input-fields"}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            fullWidth
            variant="standard"
            label="Enter your state"
            sx={{ ...GlobalFont }}
            className={"address-input-fields"}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            fullWidth
            multiline
            variant="standard"
            label="Enter your address"
            className={"address-input-fields"}
          />
        </Grid>

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
    </StyledAddressComponent>
  );
};
