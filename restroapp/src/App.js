import React, { useEffect, useState } from "react";
import LayoutContainer from "./Modules/Common/Pages/LayoutContainer";
import { BrowserRouter as Router } from "react-router-dom";
import RoutesTemp from "./Routes";
import TopNavBar from "./Common/UIElements/atoms/TopNavigationBar";
import CommonModuleRoutes from "./Modules/Common/Pages/Routes/CommonModuleRoutes";

function App() {
  const [showNavBar, setShowNavBar] = useState(true);

  useEffect(() => {
    let routeElement = CommonModuleRoutes.find((element) => {
      return element.path === window.location.pathname.split("/")?.[1];
    });
    setShowNavBar(routeElement?.showNavBar);
  }, [window.location.pathname]);

  return (
    <Router>
      <LayoutContainer>
        {showNavBar && <TopNavBar sx={{ height: "10vh" }} />}
        <div
          style={{
            height: showNavBar ? "90vh" : "100vh",
            marginTop: showNavBar ? "1.8rem" : "",
          }}
        >
          <RoutesTemp />
        </div>
      </LayoutContainer>
    </Router>
  );
}

export default App;
