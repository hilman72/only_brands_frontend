import React from 'react';
import BusinessCarousel from '../../Components/BusinessCarousel/BusinessCarousel.components';
import './HomePage.style.scss'
import Grid from '@material-ui/core/Grid';
import CouponCarousel from '../../Components/CouponCarousel/CouponCarousel.components'
import PointsCarousel from '../../Components/PointsCarousel/PointsCarousel.components'
import RecommendationCarousel from '../../Components/RecommendationCarousel/RecommendationCarousel.components'
import Footer from '../../Components/Footer/Footer.components'
import Header from '../../Components/Header/Header.component'

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
                            <h1>Hottest Brands</h1>
                            <BusinessCarousel />
                        </Grid>
                        <Grid item xs={6}>
                            <h1>Newest Brands</h1>
                            <BusinessCarousel />
                        </Grid>
                    </Grid>
                    <div className="CouponSection">
                        <Grid container spacing={3}>
                            <Grid item xs={12}>
                                <h1 className="CouponSectionHeaders">Earned Points</h1>
                                <button>More</button>
                            </Grid>
                            <Grid item xs={9}>
                            <PointsCarousel />
                            </Grid>
                            <Grid item xs={3}>
                                <div className="ReferFriendContainer">
                                <h1>Refer A Friend</h1>
                                </div>
                            </Grid>
                            <Grid item xs={12}>
                                <h1 className="CouponSectionHeaders">Brands You Follow</h1>
                                <button>More</button>
                            </Grid>
                            <Grid item xs={12}>
                                <CouponCarousel />
                            </Grid>
                            <Grid item xs={12}>
                                <h1 className="CouponSectionHeaders">Recommendations From Friends</h1>
                                <button>More</button>
                            </Grid>
                            <Grid item xs={12}>
                                <RecommendationCarousel />
                            </Grid>
                            <Grid item xs={12}>
                                <h1 className="CouponSectionHeaders">Your Coupons</h1>
                                <button>More</button>
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