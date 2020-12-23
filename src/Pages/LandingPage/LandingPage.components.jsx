import React from "react";
import useWindowSize from 'react-use/lib/useWindowSize'
import Confetti from 'react-confetti'

import { useHistory } from "react-router-dom";
import "./LandingPage.style.scss";
import Grid from "@material-ui/core/Grid";
import CouponCarousel from "../../Components/CouponCarousel/CouponCarousel.components";
import Footer from "../../Components/Footer/Footer.components";
import Button from "@material-ui/core/Button";
import SvgIcon from '@material-ui/core/SvgIcon'
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import logo from "../../Assets/Images/logo.png";
// import { mdiTicketPercent } from '@mdi/js';

function CouponIcon(props){

  return(
    <SvgIcon {...props}>
    <path d="M4,4A2,2 0 0,0 2,6V10C3.11,10 4,10.9 4,12A2,2 0 0,1 2,14V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V14A2,2 0 0,1 20,12C20,10.89 20.9,10 22,10V6C22,4.89 21.1,4 20,4H4M15.5,7L17,8.5L8.5,17L7,15.5L15.5,7M8.81,7.04C9.79,7.04 10.58,7.83 10.58,8.81A1.77,1.77 0 0,1 8.81,10.58C7.83,10.58 7.04,9.79 7.04,8.81A1.77,1.77 0 0,1 8.81,7.04M15.19,13.42C16.17,13.42 16.96,14.21 16.96,15.19A1.77,1.77 0 0,1 15.19,16.96C14.21,16.96 13.42,16.17 13.42,15.19A1.77,1.77 0 0,1 15.19,13.42Z" />
    </SvgIcon>
  )
}

function LandingPage( ) {
  const history = useHistory();
  const { width, height } = useWindowSize()

  return (
    <div>
      <div className="HeaderContainer">

        <div class='body'>
          <div class="wrap">

          <CouponIcon class="svg" style={{zIndex: 200 }}/>
          <CouponIcon class="svg" style={{zIndex: 200 }}/>
          <CouponIcon class="svg" style={{zIndex: 200 }}/>
          <CouponIcon class="svg" style={{zIndex: 200 }}/>
          <CouponIcon class="svg" style={{zIndex: 200 }}/>
          <CouponIcon class="svg" style={{zIndex: 200 }}/>
          <CouponIcon class="svg" style={{zIndex: 200 }}/>
          <CouponIcon class="svg" style={{zIndex: 200 }}/>
          <CouponIcon class="svg" style={{zIndex: 200 }}/>
          <CouponIcon class="svg" style={{zIndex: 200 }}/>
          <CouponIcon class="svg" style={{zIndex: 200 }}/>
          <CouponIcon class="svg" style={{zIndex: 200 }}/>
          <CouponIcon class="svg" style={{zIndex: 200 }}/>
          <CouponIcon class="svg" style={{zIndex: 200 }}/>
          <CouponIcon class="svg" style={{zIndex: 200 }}/>
          <CouponIcon class="svg" style={{zIndex: 200 }}/>
          <CouponIcon class="svg" style={{zIndex: 200 }}/>
          <CouponIcon class="svg" style={{zIndex: 200 }}/>
          <CouponIcon class="svg" style={{zIndex: 200 }}/>
          <CouponIcon class="svg" style={{zIndex: 200 }}/>

          </div>
        </div>

        <Grid container spacing={3} alignItems="center" justify="center">
          <Grid item xs={6}>
            {/* <div className="Logo"> */}
              {/* <h1 className="LogoHeader">OnlyBrands</h1> */}
              <img src={logo} className="logo"/>
            {/* </div> */}
          </Grid>
          <Grid container xs={6} spacing={3}>
            <Grid item xs={12}>
              <h2 className="tagline">Reap the Rewards.</h2>
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
                  className="RegisterButton"
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
      {/* <div className="CarouselContainer">
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
      </div> */}
      <Footer />
    </div>
  );
}

export default LandingPage;
