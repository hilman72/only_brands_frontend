import React from "react";
import "./UserProfile.style.scss";
import { makeStyles } from "@material-ui/core/styles";

import UserInfoCard from "../../Components/UserInfoCard/UserInfoCard.components";

import RecommendationCarousel from "../../Components/RecommendationCarousel/RecommendationCarousel2.components";
import CouponCarousel from "../../Components/CouponCarousel/CouponCarousel.components";
import Header from "../../Components/Header/Header.component";

import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles(({ palette }) => ({
  UserProfile: {
    backgroundColor: "black",
  },

  divider: {
    backgroundColor: "#ff829b",
  },
  paper: {
    border: "5px solid #ff4c6d",
    borderRadius: "1rem",
  },
  container: {
    padding: "2rem 2rem 1rem 2rem",
  },
  container2: {
    padding: "1rem 0rem 0rem 0rem",
  },
  gutter: {
    height: 20,
  },
}));

function UserProfile() {
  const styles = useStyles();

  return (
    <div class="UserProfile">
      <Header />
      <Grid container spacing={3}>
        <Grid item xs={2}></Grid>
        <Grid item xs={8}>
          <Grid className={styles.gutter} item xs={12}></Grid>
          <Paper elevation={20}>
            <Grid
              container
              direction="row"
              justify="center"
              alignItems="center"
              spacing={2}
            >
              <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
                xs={12}
              >
                <Grid item xs={12}>
                  <UserInfoCard />
                </Grid>
              </Grid>
              <Grid container className={styles.container}>
                <Grid item xs={12}>
                  <Typography variant="h2" gutterBottom>
                    Recent Recommendations
                  </Typography>
                  <RecommendationCarousel />
                </Grid>
                <Grid item className={styles.container2} xs={12}>
                  <Typography variant="h2" gutterBottom>
                    Recent Coupons Claimed
                  </Typography>
                  <CouponCarousel />
                </Grid>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={2}></Grid>
      </Grid>
    </div>
  );
}

export default UserProfile;
