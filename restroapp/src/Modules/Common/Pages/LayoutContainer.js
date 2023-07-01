import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { useLocation } from "react-router-dom";
import CommonModuleRoutes from "./Routes/CommonModuleRoutes";
import TopNavBar from "../../../Common/UIElements/atoms/TopNavigationBar";
import RoutesTemp from "../../../Routes";
import StickyFooter from "../../../Common/UIElements/molecules/StickyFooter";

const LayoutContainer = () => {
  const [showNavBar, setShowNavBar] = useState(true);
  const [showCartFooter, setShowCartFooter] = useState(false);
  const [cart, setCart] = useState({});
  const [cartTotal, setCartTotal] = useState(0);
  const location = useLocation();
  const updatedLocation = location.pathname || window.location.pathname;
  useEffect(() => {
    let routeElement = CommonModuleRoutes.find((element) => {
      return element.path === updatedLocation?.split("/")?.[1];
    });
    setShowNavBar(routeElement?.showNavBar);
    setShowCartFooter(routeElement?.showCartFooter);
  }, [updatedLocation]);
  return (
    <>
      <Grid
        container
        layout={"column"}
        className={"mainBackground"}
        style={{
          // minHeight: !["/signup", "/login"].includes(history.location.pathname)
          // minHeight: footerPresent ? "calc(90vh)" : "calc(100vh)",
          minHeight: "calc(100vh)",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {showNavBar && <TopNavBar sx={{ height: "10vh" }} />}
        <Grid
          item
          xs={12}
          style={{
            height: showNavBar ? "80vh" : "100vh",
            marginTop: showNavBar ? "1.8rem" : "",
            paddingBottom: "20%",
            flex: 1,
          }}
        >
          <Box
            m={1}
            p={2}
            minHeight={"80%"}
            className={"mainBorder plainBorder roundCorners"}
          >
            {/*<PickupLocation />*/}
            {/*<Pincode />*/}
            {/*<CategoryList />*/}
            {/*<ConsignmentPhysics />*/}
            {/*<TimePicker fullWidth={false} />*/}
            {/*{"\u2728"}*/}
            {/*<Consignments />*/}
            {/*<ConsignmentsList />*/}
            {/*<ViewConsignmentDetails />*/}
            {/*<CreateJourney />*/}
            {/*<VehicleSelection />*/}
            {/*<LocationSearch_obselete />*/}
            {/*<CarrierList />*/}
            {/*<ViewCarrier />*/}
            {/*<ModeSelection />*/}
            <RoutesTemp
              cart={cart}
              setCart={setCart}
              cartTotal={cartTotal}
              setCartTotal={setCartTotal}
            />
            {/*{children}*/}
            {/*{<OrderPreview />}*/}
          </Box>
        </Grid>
        <Grid item xs={12}>
          {showCartFooter && (
            <StickyFooter
              cart={cart}
              setCart={setCart}
              cartTotal={cartTotal}
              setCartTotal={setCartTotal}
            />
          )}
        </Grid>
      </Grid>
      {/*{!["/signup", "/login"].includes(history.location.pathname) && (*/}
    </>
  );
};

export default LayoutContainer;
