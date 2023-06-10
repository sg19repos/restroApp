import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

const LayoutContainer = ({ children }) => {
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
        }}>
        <Grid item xs={12}>
          <Box
            m={1}
            p={2}
            minHeight={"92%"}
            className={"mainBorder plainBorder roundCorners"}>
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
            {children}
            {/*{<OrderPreview />}*/}
          </Box>
        </Grid>
      </Grid>
      {/*{!["/signup", "/login"].includes(history.location.pathname) && (*/}
    </>
  );
};

export default LayoutContainer;
