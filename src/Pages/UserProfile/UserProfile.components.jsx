import React from "react";
import "./UserProfile.style.scss";

import UserInfoCard from "../../Components/UserInfoCard/UserInfoCard.components";
// import BioCard from "../../Components/BioCard/BioCard.components";
import BusinessCarousel from "../../Components/BusinessCarousel/BusinessCarousel.components";
import RecommendationCarousel from "../../Components/RecommendationCarousel/RecommendationCarousel.components";
import CouponCarousel from "../../Components/CouponCarousel/CouponCarousel.components";
import Header from "../../Components/Header/Header.component";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Divider from "@material-ui/core/Divider";
import { makeStyles } from "@material-ui/core/styles";
import BrandCards from "../../Components/BrandCards/BrandCards.components";

const useStyles = makeStyles(({ palette }) => ({
  divider: {
    backgroundColor: "#ff829b",
  },
  paper: {
    border: "5px solid #ff4c6d",
    borderRadius: "1rem",
    zIndex:110,
  },
  rightContainer: {
    padding: "0.5rem",
    justifyContent: 'center',
  },
  recentRec:{
    padding: '0.5rem',
  },
  recentCou:{
    padding: '0.5rem',
  },
  bottomPaper:{
    paddingTop: '2rem',
    transform: 'translate(0,-1rem)',
    zIndex:100,
  },
}));

function UserProfile() {
  const styles = useStyles();

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
          <Paper elevation={4} className={styles.paper} square={false}>
            <Grid
              container
              direction="row"
              justify="center"
              alignItems="center"
              // spacing={2}
            >
              <Grid item xs={6}>
                <UserInfoCard />
              </Grid>
              {/* <Divider orientation="vertical" flexItem varient="middle"/> */}
              <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
                xs={6}
                className={styles.rightContainer}
              >
                <Grid container item xs={12}>
                  {/* <BioCard /> */}

                  <Grid item xs={12} justify="center" container>
                    <h2>About Me</h2>
                  </Grid>
                  <Grid item xs={12}>
                    <p>
                      We are going to learn different kinds of species in nature
                      that live together to form amazing environment.
                    </p>
                    <Divider className={styles.divider} />
                  </Grid>
                </Grid>
                <Grid container item xs={12}>
                  <Grid item xs={12} container justify="center">
                    <h2>Favourite Brands</h2>
                  </Grid>
                  {/* <Grid container item xs={12}>
                    <Grid item xs={4}>
                       <BrandCards />
                    </Grid>
                    <Grid item xs={4}>
                       <BrandCards />
                    </Grid>
                    <Grid item xs={4}>
                       <BrandCards />
                    </Grid>
                  </Grid> */}
                </Grid>
              </Grid>
            </Grid>
          </Paper>
          <Paper className={styles.bottomPaper}>
            <Grid container>
              <Grid item xs={0.5}>
                Gutter
              </Grid>
                  <Grid item xs={11}>

                    {/* ------------------- Recent Recommendations ------------------- */}
                    <Grid item xs={12} className={styles.recentRec}>
                      <h2>Recent Recommendations</h2>
                      {/* I want to do a 2x2 here */}
                      <RecommendationCarousel />
                    </Grid>
                    {/* ------------------- Recent Coupons Claimed ------------------- */}
                    <Grid item xs={12} className={styles.recentCou}>
                      <h2>Recent Coupons Claimed</h2>
                      <CouponCarousel />
                    </Grid>

                  </Grid>
              <Grid item xs={0.5}>
                Gutter
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
