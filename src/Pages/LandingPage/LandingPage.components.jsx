import React from 'react';
import './LandingPage.style.scss'
import Grid from '@material-ui/core/Grid';
import UserRegister from '../../Components/UserRegister/UserRegister.components';
import LoginButton from '../../Components/LoginButton/LoginButton.components';
import CouponCarousel from '../../Components/CouponCarousel/CouponCarousel.components'
import BusinessRegister from '../../Components/BusinessRegister/BusinessRegister.components'
import Footer from '../../Components/Footer/Footer.components'


function LandingPage() {


    return (
        <div>
            <div className="HeaderContainer">
                <Grid container spacing={3}>
                    <Grid item xs={6}>
                        <div className="Logo">
                            <h1 className="LogoHeader">OnlyBrands</h1>
                        </div>
                    </Grid>
                    <Grid item xs={6}>
                        <div className="LoginContainer">
                            <h2>Discounts, Coupons & Rewards.</h2>
                            <LoginButton />
                        </div>
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
                            <h1>About Only Brands</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                        sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                        </Grid>
                        <Grid item xs={7}>
                            <h1>Build A Loyalty Network</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                        sunt in culpa qui officia deserunt mollit anim id est laborum</p>
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
                        <div className="HowItWorkSteps">
                            Step 1
                       </div>
                    </Grid>
                    <Grid item xs={4}>
                        <div className="HowItWorkSteps">
                            Step 2
                       </div>
                    </Grid>
                    <Grid item xs={4}>
                        <div className="HowItWorkSteps">
                            Step 3
                       </div>
                    </Grid>
                </Grid>
            </div>
            <div className="RegisterContainer">
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <h1>Join The OnlyBrands Network</h1>
                    </Grid>
                    <Grid item xs={6}>
                        <div className="RegisterButton">
                            <UserRegister />
                        </div>
                    </Grid>
                    <Grid item xs={6}>
                        <div className="RegisterButton">
                            <BusinessRegister />
                        </div>
                    </Grid>
                </Grid>
            </div>
            <Footer />
        </div >
    )
}

export default LandingPage