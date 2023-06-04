import React from "react";
import LayoutContainer from "./Modules/Common/Pages/LayoutContainer";
import { BrowserRouter as Router } from "react-router-dom";
// import "./App.css";
// import GlobalCSS from "../src/GlobalTheme";
import RoutesTemp from "./Routes";

function App() {
  // GlobalCSS();
  return (
    <Router>
      {/* {window.location.pathname !== "/" ? <Header /> : null} */}
      <LayoutContainer>
        <RoutesTemp />
      </LayoutContainer>
    </Router>
  );
}

export default App;
