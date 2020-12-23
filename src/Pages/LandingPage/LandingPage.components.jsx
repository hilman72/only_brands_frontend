import React from "react";
import useWindowSize from 'react-use/lib/useWindowSize'
import Confetti from 'react-confetti'

import { useHistory } from "react-router-dom";
import "./LandingPage.style.scss";
import Grid from "@material-ui/core/Grid";
import CouponCarousel from "../../Components/CouponCarousel/CouponCarousel.components";
import Footer from "../../Components/Footer/Footer.components";
import Button from "@material-ui/core/Button";

function LandingPage() {
  const history = useHistory();
  const { width, height } = useWindowSize()

  return (
    <div>
      <div className="HeaderContainer">
      <Confetti
      opacity={1}
      width={width}
      height={height}
      />
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <div className="Logo">
              <h1 className="LogoHeader">OnlyBrands</h1>
            </div>
          </Grid>
          <Grid container xs={6} spacing={3}>
            <Grid item xs={12}>
              <h2>Rewards, Recommendations & Referrals</h2>
            </Grid>
            <Grid className="RegisterBtnContainer" container spacing={3}>
              <Grid item className="RegisterBtnContainer" xs={12}>
                <Button
                  variant="contained"
                  size="large"
                  className="LoginButton"
                  color="primary"
                  onClick={() => {
                    history.push("/LoginPage");
                  }}
                >
                  Login
                </Button>
              </Grid>
              <Grid className="RegisterBtnContainer" item xs={12}>
                <Button
                  variant="contained"
                  size="large"
                  className="LoginButton"
                  color="secondary"
                  onClick={() => {
                    history.push("/RegisterPage");
                  }}
                >
                  Register
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
      <div className="CarouselContainer">
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <h1>Check Out The Hottest Offers in Town </h1>
            <CouponCarousel />
          </Grid>
          <Grid item xs={12}>
            <h1>Check Out The Newest Brands in Town </h1>
            <CouponCarousel />
          </Grid>
        </Grid>
      </div>
      <div className="AboutSection">
        <div className="AboutOnlyBrands">
          <Grid container spacing={3}>
            <Grid item xs={7}>
              <h1>About OnlyBrands</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum
              </p>
            </Grid>
            <Grid item xs={7}>
              <h1>Build A Loyalty Network</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum
              </p>
            </Grid>
          </Grid>
        </div>
      </div>
      <div className="HowItWorksContainer">
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <h1>How It Works</h1>
          </Grid>
          <Grid item xs={4}>
            <div className="HowItWorkSteps">Step 1</div>
          </Grid>
          <Grid item xs={4}>
            <div className="HowItWorkSteps">Step 2</div>
          </Grid>
          <Grid item xs={4}>
            <div className="HowItWorkSteps">Step 3</div>
          </Grid>
        </Grid>
      </div>
      <Footer />
    </div>
  );
}

export default LandingPage;
