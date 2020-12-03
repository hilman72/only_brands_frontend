import React from 'react';
import Grid from "@material-ui/core/Grid";
import './Footer.style.scss'

const Footer=()=>{
    const year = new Date().getFullYear();
return (
<div class="Footer">
    <Grid
    container
    direction="row"
    justify="center"
    alignItems="center"
    >
    OnlyBrands ⓒ {year}
    </Grid>
</div>
)
}


export default Footer