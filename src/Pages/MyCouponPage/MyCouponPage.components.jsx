import React, { useState, useEffect } from "react";
import "./MyCouponPage.style.scss";
import CouponList from "../../Components/CouponList/CouponList.component";
import Header from "../../Components/Header/Header.component";
import Grid from "@material-ui/core/Grid";

const MyCouponPage = (props) => {
  const [who, setWho] = useState("");
  const [coupon, setCoupon] = React.useState([]);
  const [ref, setRef] = React.useState([]);

  const x = window.location.href.replaceAll("/", " ").split(" ");
  const render_user = x[x.length - 1];

  const you_who = localStorage.getItem("ob_who");

  useEffect(() => {
    setWho(you_who);
    if (who === "user") {
      fetch(`http://localhost:5000/api/myCoupon/user/${render_user}`)
        .then((res) => res.json())
        .then((data) => {
          setCoupon([...data]);
        });
    } else if (who === "business") {
      fetch(`http://localhost:5000/api/myCoupon/business/${render_user}`)
        .then((res) => res.json())
        .then((data) => {
          setCoupon([...data]);
        });
    }
  }, [who, render_user]);

  return (
    <div>
      <Header />
      <Grid container spacing={3}>
        <Grid item xs={2}>
          Gutter
        </Grid>
        <Grid item xs={8}>
          <CouponList coupon={coupon} />
        </Grid>
        <Grid item xs={2}>
          Gutter
        </Grid>
      </Grid>
    </div>
  );
};

export default MyCouponPage;
