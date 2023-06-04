import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Store from "./Common/Store/Store";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Provider } from "react-redux";

const theme = createTheme({
  typography: {
    fontFamily: "Poppins",
  },
  fontSize: {
    font075: "0.75rem !important",
  },
  palette: {
    primary: {
      // main: "#165788",
      main: "#595a9b",
      contrastText: "#fff",
    },
  },
  multilineColor: {
    color: "red !important",
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Provider store={Store}>
        <App />{" "}
      </Provider>
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
