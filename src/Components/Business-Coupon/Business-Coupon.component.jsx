import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

import Coupon from "../../Components/Coupon/Coupon.components";

import "./Business-Coupon.style.scss";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

const BusinessCoupon = (props) => {
  const classes = useStyles();
  const [cou, setCou] = useState([]);
  const [first, setFirst] = useState(true);

  useEffect(() => {
    let x = props.coupon;
    if (x.length > 0) {
      setFirst(true);
    }
    if (first === true) {
      setCou([...x]);
    }
  }, [first, props.coupon, cou]);

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        {cou && cou.length > 0 ? (
          cou.map((data, i) => {
            return (
              <Grid item xs={12} sm={6}>
                <Coupon key={i} data={data} />
              </Grid>
            );
          })
        ) : (
          <div>Sorry No Coupon</div>
        )}
      </Grid>
    </div>
  );
};
export default BusinessCoupon;

{
  /* <Card key={i} name={data.name} link={data.link} tag={data.tag} /> */
}
