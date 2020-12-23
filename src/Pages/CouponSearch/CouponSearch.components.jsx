import React, { useState, useEffect } from "react";
import FrontendSearch from "../../Components/FrontendSearch/FrontendSearch.components";
import Grid from "@material-ui/core/Grid";
import Header from "../../Components/Header/Header.component";
import Coupons from "../../Components/Coupon/Coupon.components";
import UserCards from "../../Components/UserCards/UserCards.components";
import BrandCard from "../../Components/BrandCards/BrandCards.components";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card"
import "./CouponSearch.style.scss";
import Axios from "axios";
import { useSelector, useDispatch } from "react-redux";

const useStyles = makeStyles({
  box: {
    padding: 5,
    margin: 30,
    border: '5px solid #ff4c6d'
  },
  cardPaper: {
    boxShadow: "none",
  },
  body: {
    backgroundColor: "#f0f0f0",
  },
});

const CouponSearch = () => {
  const [finaldisplay, setFinaldisplay] = useState([]);
  const choosesearchstate = useSelector((state) => state.searchStore);
  const { loading, success: success1, searchdata } = choosesearchstate;

  const choose = localStorage.getItem("filter");

  useEffect(async () => {
    if (searchdata) {
      console.log([...searchdata]);
      setFinaldisplay([...searchdata]);
    } else {
      setFinaldisplay("");
    }
  }, [success1]);

  const classes = useStyles();

  return (
    <div className={classes.body}>
      <Header />
      <Grid container spacing={3}>
        <Grid item xs={2}>
        </Grid>
        <Grid item xs={8}>
          <Grid container spacing={3}>
            <Grid container xs={12}>
              <Grid item xs={2}>

              </Grid>
              <Grid item xs={8}>
                <Paper className={classes.box} elevation={5}>
                 <h2>Search Results</h2>
                </Paper>
              </Grid>
              <Grid item xs={2}>

              </Grid>

                {choose === "Coupons" ? (
                  <Grid container xs={12} spacing={3}>
                    {finaldisplay && finaldisplay.length > 0 ? (
                      finaldisplay.map((data, i) => {
                        return (
                          <Grid item s={6}>
                            <Coupons key={i} data={data} />
                          </Grid>
                        );
                      })
                    ) : (
                      <div><h4>No Coupons Available.</h4></div>
                    )}

                    {/* <UserCards /> */}
                  </Grid>
                ) : choose === "Brands" ? (
                  <Grid container xs={12} spacing={3}>
                    {finaldisplay && finaldisplay.length > 0 ? (
                      finaldisplay.map((data, i) => {
                        return (
                          <Grid item s={6}>
                            <BrandCard key={i} data={data} />
                          </Grid>
                        );
                      })
                    ) : (
                      <div><h4>No Brands Available.</h4></div>
                    )}

                    {/* <UserCards /> */}
                  </Grid>
                ) : choose === "Users" ? (
                  <Grid container xs={12} spacing={3}>
                    {finaldisplay && finaldisplay.length > 0 ? (
                      finaldisplay.map((data, i) => {
                        return (
                          <Grid item s={6}>
                            <UserCards key={i} data={data} />
                          </Grid>
                        );
                      })
                    ) : (
                      <div><h4>No Users Available.</h4></div>
                    )}
                  </Grid>
                ) : (
                  <div></div>
                )}

            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={2}>
        </Grid>
      </Grid>
    </div>
  );
};

export default CouponSearch;
