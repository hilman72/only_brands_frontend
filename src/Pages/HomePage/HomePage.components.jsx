import React from 'react';
import BusinessCarousel from '../../Components/BusinessCarousel/BusinessCarousel.components';
import './HomePage.style.scss'
import Grid from '@material-ui/core/Grid';
import CouponCarousel from '../../Components/CouponCarousel/CouponCarousel.components'
import PointsCarousel from '../../Components/PointsCarousel/PointsCarousel.components'
import RecommendationCarousel from '../../Components/RecommendationCarousel/RecommendationCarousel.components'
import Footer from '../../Components/Footer/Footer.components'
import Header from '../../Components/Header/Header.component'
import Button from '@material-ui/core/Button';

function HomePage() {

    return (
        <div>
            <div>
                <Header/>
            </div>
            <div className="MainSection">
                <div className="BrandSection">
                    <Grid container spacing={3}>
                        <Grid item xs={6}>
                            <h2>Hottest Brands</h2>
                            <BusinessCarousel />
                        </Grid>
                        <Grid item xs={6}>
                            <h2>Newest Brands</h2>
                            <BusinessCarousel />
                        </Grid>
                    </Grid>
                    <div className="CouponSection">
                        <Grid container spacing={3}>
                            <Grid item xs={12}>
                                <h2 className="CouponSectionHeaders">Earned Points</h2>
                                <Button variant="contained">More</Button>
                            </Grid>
                            <Grid item xs={9}>
                            <PointsCarousel />
                            </Grid>
                            <Grid item xs={3}>
                                <div className="ReferFriendContainer">
                                <h2>Refer A Friend</h2>
                                </div>
                            </Grid>
                            <Grid item xs={12}>
                                <h2 className="CouponSectionHeaders">Brands You Follow</h2>
                                <Button variant="contained">More</Button>
                            </Grid>
                            <Grid item xs={12}>
                                <CouponCarousel />
                            </Grid>
                            <Grid item xs={12}>
                                <h2 className="CouponSectionHeaders">Recommendations From Friends</h2>
                                <Button variant="contained">More</Button>
                            </Grid>
                            <Grid item xs={12}>
                                <RecommendationCarousel />
                            </Grid>
                            <Grid item xs={12}>
                                <h2 className="CouponSectionHeaders">Your Coupons</h2>
                                <Button variant="contained">More</Button>
                            </Grid>
                            <Grid item xs={12}>
                                <CouponCarousel />
                            </Grid>
                        </Grid>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default HomePage;