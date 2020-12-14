import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

import Coupon from "../../Components/Coupon/Coupon.components";

import "./Business-Coupon.style.scss";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

const BusinessCoupon = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <Coupon />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Coupon />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Coupon />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Coupon />
        </Grid>
      </Grid>
    </div>
  );
};
export default BusinessCoupon;
