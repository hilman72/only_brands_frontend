import React from "react";
import BusinessCarousel from "../../Components/BusinessCarousel/BusinessCarousel.components";
import "./HomePage.style.scss";
import Grid from "@material-ui/core/Grid";
import CouponCarousel from "../../Components/CouponCarousel/CouponCarousel.components";
import PointsCarousel from "../../Components/PointsCarousel/PointsCarousel.components";
import RecommendationCarousel from "../../Components/RecommendationCarousel/RecommendationCarousel.components";
import Footer from "../../Components/Footer/Footer.components";
import Header from "../../Components/Header/Header.component";
import Divider from "@material-ui/core/Divider"
import Card from "@material-ui/core/Card"
import Button from "@material-ui/core/Button";
import Paper from '@material-ui/core/Paper'
import { makeStyles } from '@material-ui/core/styles'
import { CardContent, Typography } from "@material-ui/core";


const useStyles = makeStyles(() => ({
  container: {
    padding: 20,
    borderBottom: '1px solid #ff829b'
  },
  button: {
    float: 'right'
  },
}));

function HomePage() {

  const classes = useStyles()
;
  return (
    <div>
      <div>
        <Header />
      </div>
      <div className="MainSection">
        <Grid container>
          {/* ---------------- Gutter ---------------- */}
          <Grid item xs={2}>
            Guttter
          </Grid>
          <Grid item xs={8}>
            <Paper elevation={4}> 
            <Grid container>

              {/* ---------------- Brands Recommendations ---------------- */}
              <Grid container justify="flex-start" >
                <Grid item className={classes.container} xs={6}>
                  <h2>Hottest Brands</h2>
                  <BusinessCarousel />
                </Grid>
                <Grid justify="flex-start" className={classes.container}  item xs={6}>
                  <h2>Newest Brands</h2>
                  <BusinessCarousel />
                </Grid>
              </Grid>
              
              <Grid container>
                <Grid item className={classes.container} xs={9}>
                  {/* ---------------- New Offers from Brands You Follow ---------------- */}
                  <Grid container item xs={12}>
                    <Grid item xs={10}>
                      <h2 className="CouponSectionHeaders">
                        New Offers from Brands You Follow
                      </h2>
                    </Grid>
                    <Grid item xs={2}>
                      <Button className={classes.button}>More</Button>
                    </Grid>
                  </Grid>
                  <Grid item xs={12}>
                    <CouponCarousel />
                  </Grid>
                </Grid>
                {/* ---------------- Refer a Frend Button ---------------- */}
                <Grid container  
                justify="center"
                alignItems="center"
                className={classes.container} 
                xs={3}>
                <Grid
                 item xs={12}>
                   <Card>
                     <CardContent>
                     <Typography variant="h2">
                        Refer A Friend
                    </Typography>
                     </CardContent>
                   </Card>
    
                  </Grid>
                </Grid>
              </Grid>

              <Grid container>
                <Grid container xs={12}>
                  {/* ---------------- Earned Points ---------------- */}
                  <Grid item className={classes.container} xs={6}>
                    <Grid container item xs={12}>
                      <Grid item xs={10}>
                        <h2 className="CouponSectionHeaders">Earned Points</h2>
                      </Grid>
                      <Grid item xs={2}>
                        <Button className={classes.button} >More</Button>
                      </Grid>
                    </Grid>
                    <Grid item xs={12}>
                      <PointsCarousel />
                    </Grid>
                  </Grid>
                  {/* ---------------- Recommendations From Friends ---------------- */}
                  <Grid item className={classes.container} xs={6}>
                    <Grid container item xs={12}>
                      <Grid item xs={10}>
                        <h2 className="CouponSectionHeaders">
                          Recommendations From Friends
                        </h2>
                      </Grid>
                      <Grid item xs={2}>
                        <Button className={classes.button} >More</Button>
                      </Grid>
                    </Grid>
                    <Grid item xs={12}>
                      <RecommendationCarousel />
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>

          </Paper>



          </Grid>
          <Grid item xs={2}>
            Gutter
          </Grid>
        </Grid>
      </div>
      <Footer />
    </div>
  );
}

export default HomePage;
