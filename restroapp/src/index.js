import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Store from "./Common/Store/Store";
import { Provider } from "react-redux";
import { styled } from "@mui/system";
import { Grid } from "@mui/material";
import { GlobalThemes } from "./Themes/GlobalThemes";

const StyledLayoutContainer = styled(
  Grid,
  {}
)({
  ...GlobalThemes,
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <StyledLayoutContainer>
      <Provider store={Store}>
        <App />
      </Provider>
    </StyledLayoutContainer>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
