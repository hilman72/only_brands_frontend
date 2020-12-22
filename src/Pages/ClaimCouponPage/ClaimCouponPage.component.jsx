import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";

// import Card from "@material-ui/core/Card";
// import { useHistory } from "react-router-dom";

import "./ClaimCouponPage.style.scss";

import ClaimCouponCard from "../../Components/CouponClaimCard/CouponClaimCard.component";

const useStyles = makeStyles(() => ({
  container: {
    height: "100vh",
  },
}));

const ClaimCouponPage = () => {
  const x = window.location.href.replaceAll("/", " ").split(" ");
  const render_id = x[x.length - 3];
  const render_send = x[x.length - 2];
  const render_b_name = x[x.length - 1];

  const detail = { id: render_id, send: render_send, b_name: render_b_name };

  // const history = useHistory();

  // const handleClick = () => {
  //   history.push("/");
  // };

  const styles = useStyles();

  return (
    <div>
      <div className={styles.positioning}>
        <Grid
          container
          justify="space-between"
          alignItems="center"
          className={styles.container}
          xs={12}
        >
          <Grid item xs={4}></Grid>
          <Grid item xs={4}>
            <ClaimCouponCard data={detail} />
          </Grid>
          <Grid item xs={4}></Grid>
        </Grid>
      </div>
    </div>
  );
};

export default ClaimCouponPage;
