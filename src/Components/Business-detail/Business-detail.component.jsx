import React from "react";
import Grid from "@material-ui/core/Grid";

import "./Business-detail.style.scss";

const BusinessDetail = () => {
  return <div className="B-detail">
    <Grid container>
      <Grid container item xs={12}>
        Banner Photo
      </Grid>
      <Grid container item xs={12}>
        <Grid item xs={2}>
          Gutter
        </Grid>
        <Grid container item xs={8}>
          <Grid container item xs={12}>
            <Grid item xs={8}>
              Description
            </Grid>
            <Grid item xs={4}>
              <Grid container item xs={12}>
                <Grid item xs={3}>
                  social media icon
                </Grid>
                <Grid item xs={3}>
                  social media icon
                </Grid>
                <Grid item xs={3}>
                  social media icon
                </Grid>
                <Grid item xs={3}>
                  social media icon
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid container item xs={12}>
            <Grid item xs={8}>
              <Grid container item xs={12}>
                <Grid item xs={8}>
                Details
                </Grid>
              <Grid item xs={4}>
                Chat
                </Grid>
          </Grid>
            </Grid>
            <Grid item xs={4}>
              Create Coupon
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={2}>
          Gutter
        </Grid>
      </Grid>
    </Grid>
  </div>;
};

export default BusinessDetail;
