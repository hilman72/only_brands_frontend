import React from "react";

import "./BusinessProfiles.style.scss";
import BusinessDetail from "../../Components/Business-detail/Business-detail.component";
import BusinessWindows from "../../Components/Business-windows/Business-windows.component";
import Header from "../../Components/Header/Header.component";
import Grid from "@material-ui/core/Grid"
import Paper from "@material-ui/core/Paper"

function BusinessProfiles() {
  return (
    <div>
      <Header />
      <Grid container>
        <Grid className="bannerImg" item xs={12}>
          Banner Photo
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={2}>
            Gutter
        </Grid>
          <Grid container xs={8}>
            <Grid item xs={12}>
              Cover Photo
          </Grid>
            <Grid item xs={12}>
              <BusinessDetail />
            </Grid>
            <Grid item xs={12}>
              <Paper elevation={2}>
                <BusinessWindows />
              </Paper>
            </Grid>
          </Grid>
          <Grid item xs={2}>
            Gutter
        </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default BusinessProfiles;
