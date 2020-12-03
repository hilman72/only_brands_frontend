import React from 'react';
import './CouponCarousel.style.scss'
import Coupon from '../Coupon/Coupon.components'
import Grid from '@material-ui/core/Grid';


function CouponCarousel() {

    return (
        <div className="CouponContainer">
            <Grid container spacing={3}>
                <Grid xs={2}>
                <Coupon />
                </Grid>
                <Grid xs={2}>
                <Coupon />
                </Grid>
                <Grid xs={2}>
                <Coupon />
                </Grid>
                <Grid xs={2}>
                <Coupon />
                </Grid>
                <Grid xs={2}>
                <Coupon />
                </Grid>
                <Grid xs={2}>
                <Coupon />
                </Grid>
            </Grid>
        </div>
    )
}

export default CouponCarousel;