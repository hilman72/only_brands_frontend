import React from "react";
import FrontendSearch from "../../Components/FrontendSearch/FrontendSearch.components";
import Grid from "@material-ui/core/Grid"
import Header from "../../Components/Header/Header.component";
import Coupons from "../../Components/Coupon/Coupon.components"
import Paper from "@material-ui/core/Paper"
import { makeStyles } from "@material-ui/core/styles"
import "./CouponSearch.style.scss";

const useStyles = makeStyles({
  box: {
    padding: 20,
    margin: 20
  }
})

const CouponSearch = () => {

  const classes = useStyles();

  return (
    <div>
      <Header />
      <Grid container spacing={3}>
        <Grid item xs={2}>
          Gutter
        </Grid>
        <Grid item xs={8}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              Gutter
            </Grid>
            <Grid container xs={12}>
              <Grid item xs={2}>
                Gutter
              </Grid>
              <Grid item xs={8}>
                <Paper className={classes.box} elevation={5}>
                  <FrontendSearch />
                </Paper>
              </Grid>
              <Grid item xs={2}>
                Gutter
              </Grid>
              <Paper elevation={10}>
                <Grid container xs={12} spacing={3}>
                  <Grid item xs={6}>
                    <Coupons />
                  </Grid>
                  <Grid item xs={6}>
                    <Coupons />
                  </Grid>
                  <Grid item xs={6}>
                    <Coupons />
                  </Grid>
                  <Grid item xs={6}>
                    <Coupons />
                  </Grid>
                  <Grid item xs={6}>
                    <Coupons />
                  </Grid>
                  <Grid item xs={6}>
                    <Coupons />
                  </Grid>
                  <Grid item xs={6}>
                    <Coupons />
                  </Grid>
                  <Grid item xs={6}>
                    <Coupons />
                  </Grid>
                  <Grid item xs={6}>
                    <Coupons />
                  </Grid>
                  <Grid item xs={6}>
                    <Coupons />
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={2}>
          Gutter
        </Grid>
      </Grid>
    </div>
  );
};

export default CouponSearch;
