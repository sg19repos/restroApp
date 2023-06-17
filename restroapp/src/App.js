import React, { useState } from "react";
import LayoutContainer from "./Modules/Common/Pages/LayoutContainer";
import { BrowserRouter as Router } from "react-router-dom";
import LoadingPage from "./Modules/Common/Pages/LoadingPage";

function App() {
  const [showLoading, setShowLoading] = useState(false);
  const [showHomePage, setShowHomePage] = useState(true);

  const handleNextPage = () => {
    setShowLoading(false);
    setShowHomePage(true);
  };
  return (
    <Router>
      {/*{showLoading && <LoadingPage nextPage={handleNextPage} />}*/}
      {showHomePage && <LayoutContainer />}
    </Router>
  );
}

export default App;
