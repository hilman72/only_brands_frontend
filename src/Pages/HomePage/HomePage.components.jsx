import React from "react";
import BusinessCarousel from "../../Components/BusinessCarousel/BusinessCarousel.components";
import "./HomePage.style.scss";
import Grid from "@material-ui/core/Grid";
import CouponCarousel from "../../Components/CouponCarousel/CouponCarousel.components";
import PointsCarousel from "../../Components/PointsCarousel/PointsCarousel.components";
import RecommendationCarousel from "../../Components/RecommendationCarousel/RecommendationCarousel.components";
import Footer from "../../Components/Footer/Footer.components";
import Header from "../../Components/Header/Header.component";
import Button from "@material-ui/core/Button";

function HomePage() {
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
            <Grid container class="viewHeightContainer">

              {/* ---------------- Brands Recommendations ---------------- */}
              <Grid container justify="flex-start" >
                <Grid item xs={6}>
                  <h2>Hottest Brands</h2>
                  <BusinessCarousel />
                </Grid>
                <Grid justify="flex-start" item xs={6}>
                  <h2>Newest Brands</h2>
                  <BusinessCarousel />
                </Grid>
              </Grid>

              <Grid container>
                <Grid item xs={9}>
                  {/* ---------------- New Offers from Brands You Follow ---------------- */}
                  <Grid container item xs={12}>
                    <Grid item xs={10}>
                      <h2 className="CouponSectionHeaders">
                        New Offers from Brands You Follow
                      </h2>
                    </Grid>
                    <Grid item xs={2}>
                      <Button>More</Button>
                    </Grid>
                  </Grid>
                  <Grid item xs={12}>
                    <CouponCarousel />
                  </Grid>
                </Grid>
                {/* ---------------- Refer a Frend Button ---------------- */}
                <Grid item xs={3}>
                  <Grid item xs={12}>
                    <div className="ReferFriendContainer">
                      <h2>Refer A Friend</h2>
                      <h2>Explore New Brands</h2>
                    </div>
                  </Grid>
                </Grid>
              </Grid>

              <Grid container>
                <Grid container xs={12}>
                  {/* ---------------- Earned Points ---------------- */}
                  <Grid item xs={6}>
                    <Grid container item xs={12}>
                      <Grid item xs={10}>
                        <h2 className="CouponSectionHeaders">Earned Points</h2>
                      </Grid>
                      <Grid item xs={2}>
                        <Button>More</Button>
                      </Grid>
                    </Grid>
                    <Grid item xs={12}>
                      <PointsCarousel />
                    </Grid>
                  </Grid>
                  {/* ---------------- Recommendations From Friends ---------------- */}
                  <Grid item xs={6}>
                    <Grid container item xs={12}>
                      <Grid item xs={10}>
                        <h2 className="CouponSectionHeaders">
                          Recommendations From Friends
                        </h2>
                      </Grid>
                      <Grid item xs={2}>
                        <Button>More</Button>
                      </Grid>
                    </Grid>
                    <Grid item xs={12}>
                      <RecommendationCarousel />
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>

            </Grid>


            {/* ---------------- Your Coupons ---------------- */}
            <Grid container>
              <Grid item xs={12}>
                <Grid container item xs={12}>
                  <Grid item xs={10}>
                    <h2 className="CouponSectionHeaders">Your Coupons</h2>
                  </Grid>
                  <Grid item xs={2}>
                    <Button>More</Button>
                  </Grid>
                </Grid>
                <Grid item xs={12}>
                  <CouponCarousel />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={2}>
            Guttter
          </Grid>
        </Grid>
      </div>
      <Footer />
    </div>
  );
}

export default HomePage;
