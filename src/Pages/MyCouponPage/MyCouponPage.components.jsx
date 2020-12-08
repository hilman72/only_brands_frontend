import React from "react";
import "./MyCouponPage.style.scss";
import CouponList from "../../Components/CouponList/CouponList.component";
import Header from "../../Components/Header/Header.component";

const MyCouponPage = () => (
  <div>
    <Header />
    <CouponList />
  </div>
);

export default MyCouponPage;
