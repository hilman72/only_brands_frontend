import React from "react";
import "./UserProfile.style.scss";

import UserInfoCard from "../../Components/UserInfoCard/UserInfoCard.components";
import FavouriteCateCard from "../../Components/FavouriteCateCard/FavouriteCateCard.components";
import BadgeCard from "../../Components/BadgeCard/BadgeCard.components";
import BusinessCarousel from "../../Components/BusinessCarousel/BusinessCarousel.components"
import RecommendationCarousel from "../../Components/RecommendationCarousel/RecommendationCarousel.components";
import CouponCarousel from "../../Components/CouponCarousel/CouponCarousel.components";
import Header from "../../Components/Header/Header.component";
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'

function UserProfile() {
  return (
    <div class="UserProfile">
      <Header />
      <Grid container spacing={3}>
        <Grid item xs={2}>
          Gutter
          </Grid>
        <Grid item xs={8}>
            <Grid item xs={12}>
            Gutter
            </Grid>
          <Paper elevation={20}>
            <Grid
              container
              direction="row"
              justify="center"
              alignItems="center"
              spacing={2}>
              <Grid item xs={6}>
                <UserInfoCard />
              </Grid>
              <Grid container
                direction="row"
                justify="center"
                alignItems="center"
                xs={6}>
                <FavouriteCateCard />
                <BadgeCard />
              </Grid>
              <Grid item xs={12}>
                <BusinessCarousel />
              </Grid>
              <Grid item xs={12}>
                <p>Recent Recommendations</p>
                <RecommendationCarousel />
              </Grid>
              <Grid item xs={12}>
                <p>Recent Coupons Claimed</p>
                <CouponCarousel />
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={2}>
          Gutter
        </Grid>
      </Grid>
    </div>
  );
}

export default UserProfile;
