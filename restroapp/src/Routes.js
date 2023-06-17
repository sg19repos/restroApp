import React from "react";
import { Route, Routes, useHistory } from "react-router-dom";
import CommonModuleRoutes from "./Modules/Common/Pages/Routes/CommonModuleRoutes";

// const ConsignerPages = React.lazy(() =>
//   import("./Modules/Consigner/ConsignerPages")
// );

import CommonModulePages from "./Modules/Common/Pages/CommonModulePages";

const RoutesTemp = () => {
  const allRoutes = [
    {
      ModulePages: CommonModulePages,
      ModuleRoutes: CommonModuleRoutes,
    },
  ];
  return (
    <>
      <Routes>
        {allRoutes.map((m) => {
          const PagesComponent = m.ModulePages;
          return m.ModuleRoutes.map((v) => (
            <Route
              key={v.path}
              path={v.path}
              exact={v.exact}
              title={v.title}
              tns={v.tns}
              element={<PagesComponent page={v.path} />}
            />
            // <GateWay
            //   key={v.path}
            //   exact={v.exact}
            //   title={v.title}
            //   pageType={v.type}
            //   path={"/" + v.path}
            //   tns={v.tns}>
            //   <PagesComponent page={v.path} />/
            // </GateWay>
          ));
        })}
        {/*<Route path={"/error"} title={"Error"}>*/}
        {/*  <Error />*/}
        {/*</Route>*/}
        {/*<Route title={"404"}>*/}
        {/*  <Error*/}
        {/*    type={"404"}*/}
        {/*    backToLinkLabel={":BackLogin"}*/}
        {/*    btnClickFunction={() => history.push("/" + LogoutPage)}*/}
        {/*  />*/}
        {/*</Route>*/}
      </Routes>
    </>
  );
};

export default RoutesTemp;
