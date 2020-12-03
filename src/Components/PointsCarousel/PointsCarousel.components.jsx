import React from 'react';
import './PointsCarousel.style.scss';
import PointsCards from '../PointsCards/PointsCards.components'
import Grid from '@material-ui/core/Grid'

function PointsCarousel(){

    return(
        <div className="CardContainer">
        <Grid container spacing={3}>
            <Grid xs={3}>
            <PointsCards />
            </Grid>
            <Grid xs={3}>
            <PointsCards />
            </Grid>
            <Grid xs={3}>
            <PointsCards />
            </Grid>
            <Grid xs={3}>
            <PointsCards />
            </Grid>
        </Grid>
    </div>
    )
}

export default PointsCarousel;