import React, { useEffect } from "react";
import { BsFillShieldLockFill, BsTelephoneFill } from "react-icons/bs";
import { CgSpinner } from "react-icons/cg";

import OtpInput from "otp-input-react";
import { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
// import { auth } from "./firebase.config";
import { auth } from "../../../firebase";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { toast, Toaster } from "react-hot-toast";
import ImageComponent from "../../../Common/UIElements/Image";
import { Grid, Paper, TextField, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import {
  GlobalFont,
  GlobalFontColor,
  GlobalThemeColor,
  themeColor,
} from "../../../Themes/GlobalThemes";
import { ThemeCart } from "../../../Themes/CartThemes";
import { useNavigate } from "react-router-dom";
import { LandingPagePath } from "./Routes/CommonModuleRoutes";

export const LoginPage = () => {
  const [otp, setOtp] = useState("");
  const [ph, setPh] = useState("");
  const [loading, setLoading] = useState(false);
  const [showOTP, setShowOTP] = useState(false);
  const [user, setUser] = useState(null);

  function onCaptchVerify() {
    if (!window.recaptchaVerifier) {
      window.recaptchaVerifier = new RecaptchaVerifier(
        "recaptcha-container",
        {
          size: "invisible",
          callback: (response) => {
            onSignup();
          },
          "expired-callback": () => {},
        },
        auth
      );
    }
  }

  function onSignup() {
    setLoading(true);
    onCaptchVerify();

    const appVerifier = window.recaptchaVerifier;

    const formatPh = "+" + ph;

    signInWithPhoneNumber(auth, formatPh, appVerifier)
      .then((confirmationResult) => {
        window.confirmationResult = confirmationResult;
        setLoading(false);
        setShowOTP(true);
        toast.success("OTP sent successfully!");
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }

  function onOTPVerify() {
    setLoading(true);
    window.confirmationResult
      .confirm(otp)
      .then(async (res) => {
        console.log(res);
        setUser(res.user);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }

  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate("/" + LandingPagePath);
    }
  }, [user]);

  return (
    <Grid
      container
      direction="column"
      justifyContent="space-evenly"
      alignItems="center"
    >
      <Grid item xs={12}>
        <Toaster toastOptions={{ duration: 4000 }} />
        <div id="recaptcha-container" />
      </Grid>
      <Grid
        item
        xs={12}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "20%",
          marginTop: "1rem",
        }}
      >
        <ImageComponent name="circleLogo" width={"100px"} height={"110px"} />
      </Grid>

      {showOTP ? (
        <Grid
          item
          xs={12}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "20%",
            ...GlobalFontColor,
            ...GlobalFont,
          }}
        >
          <Grid
            container
            direction={"row"}
            sx={{ ...GlobalFont }}
            textAlign={"center"}
          >
            <Grid item xs={12}>
              <Typography htmlFor="otp" sx={{ ...GlobalFont }}>
                Enter 6 digit verification number
              </Typography>
            </Grid>
            <Grid item xs={12} sx={{ marginTop: "2rem" }}>
              <OtpInput
                value={otp}
                onChange={setOtp}
                OTPLength={6}
                otpType="number"
                disabled={false}
                autoFocus
                className="opt-container"
                inputStyles={{
                  borderRadius: "20%",
                  marginRight: "1rem",
                  borderColor: themeColor,
                }}
              />
            </Grid>
            <Grid item xs={12} sx={{ marginTop: "2rem" }}>
              <Button
                onClick={onOTPVerify}
                variant={"contained"}
                sx={{ ...GlobalThemeColor }}
              >
                {loading && (
                  <CgSpinner size={20} className="mt-1 animate-spin" />
                )}
                <span>Verify OTP</span>
              </Button>
            </Grid>
          </Grid>
        </Grid>
      ) : (
        <Paper
          sx={{
            ...ThemeCart.paper,
            padding: "1rem 3rem 3rem 3rem",
            borderRadius: "10%",
            textAlign: "center",
          }}
          elevation={1}
        >
          <Grid item xs={12} sx={{ marginTop: "4rem" }}>
            <Typography
              sx={{
                ...GlobalFont,
                textAlign: "center",
                ...GlobalFontColor,
              }}
              variant={"caption"}
            >
              Enter your mobile number to receive OTP
            </Typography>
          </Grid>
          <Grid item xs={12} sx={{ marginTop: "4rem" }}>
            <TextField
              label="Mobile Number"
              variant="standard"
              fullWidth
              size={"small"}
              sx={{ ...GlobalFontColor }}
              value={ph.startsWith("+91") ? ph : "+91" + ph}
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
            />
          </Grid>
          <Grid
            item
            xs={12}
            sx={{
              alignItems: "center",
              marginTop: "1rem",
            }}
          >
            <Button
              onClick={onSignup}
              variant="contained"
              color="primary"
              size="small"
              sx={{ ...GlobalThemeColor }}
            >
              Send Code via SMS
            </Button>
          </Grid>
        </Paper>
      )}
    </Grid>
  );
};
