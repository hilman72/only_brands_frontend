import React, { useState, useEffect } from "react";
import FrontendSearch from "../../Components/FrontendSearch/FrontendSearch.components";
import Grid from "@material-ui/core/Grid"
import Header from "../../Components/Header/Header.component";
import Coupons from "../../Components/Coupon/Coupon.components"
import UserCards from '../../Components/UserCards/UserCards.components'
import Paper from "@material-ui/core/Paper"
import { makeStyles } from "@material-ui/core/styles"
import "./CouponSearch.style.scss";
import Axios from "axios";

const useStyles = makeStyles({
  box: {
    padding: 20,
    margin: 20
  },
  cardPaper:{
    boxShadow:'none',
  },
  body:{
    backgroundColor:'#f0f0f0',
  }
})

const CouponSearch = () => {

  const [first, setFirst] = useState(false);
  const [finaldisplay, setFinaldisplay] = useState([]);

  useEffect(async () => {
    let b = localStorage.getItem('searchlink')
    //await Axios.get(`http://localhost:5000/api/search/${different}/${event.target[0].value}`)
    if (b !== null || b !== undefined) {
      setFirst(true)
    }
    if (first === true) {
      Axios.get(b).then(data => {
        let a = data.data;
        console.log(a)
        setFinaldisplay([...a])
      })
    }
  }, [first])


  const classes = useStyles();


  return (
    <div className={classes.body}>
      <Header />
      <Grid container spacing={3}>
        <Grid item xs={2}>
          Gutter
        </Grid>
        <Grid item xs={8}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              Gutter
            </Grid>
            <Grid container xs={12}>
              <Grid item xs={2}>
                Gutter
              </Grid>
              <Grid item xs={8}>
                <Paper className={classes.box} elevation={5}>
                  <FrontendSearch />
                </Paper>
              </Grid>
              <Grid item xs={2}>
                Gutter
              </Grid>
              <Paper className={classes.cardPaper}>
                <Grid container xs={12} spacing={3}>

                  {/* {finaldisplay && finaldisplay.length > 0 ? (
                    finaldisplay.map((data, i) => {
                      return (
                        <Grid item s={6}>
                          <Coupons key={i} data={data} />
                        </Grid>
                      );
                    })
                  ) : (
                      <div>Sorry No Coupon</div>
                    )} */}

                    <UserCards />

                  {/* <Grid item xs={6}>
                   <Coupons />
                </Grid> */}

                </Grid>
              </Paper>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={2}>
          Gutter
        </Grid>
      </Grid>
    </div>
  );
};

export default CouponSearch;
