import React from "react";
import FrontendSearch from "../../Components/FrontendSearch/FrontendSearch.components";
import BrandCards from "../../Components/BrandCards/BrandCards.components";
import Header from "../../Components/Header/Header.component";

import "./CouponSearch.style.scss";

const CouponSearch = () => {
  return (
    <div>
      <Header />
      <FrontendSearch />
      <BrandCards />
    </div>
  );
};

export default CouponSearch;
