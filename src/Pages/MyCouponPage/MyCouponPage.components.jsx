import React from "react";
import "./MyCouponPage.style.scss";
import CouponList from "../../Components/CouponList/CouponList.component";
import Header from "../../Components/Header/Header.component";
import Grid from "@material-ui/core/Grid"

const MyCouponPage = () => (
  <div>
     <Header />
    <Grid container spacing={3}>
      <Grid item xs={2}>
        Gutter
      </Grid>
      <Grid item xs={8}>
      <CouponList />
      </Grid>
      <Grid item xs={2}>
        Gutter
      </Grid>
    </Grid>
  </div>
);

export default MyCouponPage;
