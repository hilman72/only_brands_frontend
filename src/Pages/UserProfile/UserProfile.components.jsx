import React from "react";
import "./UserProfile.style.scss";

import UserInfoCard from "../../Components/UserInfoCard/UserInfoCard.components";
import FavouriteCateCard from "../../Components/FavouriteCateCard/FavouriteCateCard.components";
import BadgeCard from "../../Components/BadgeCard/BadgeCard.components";
import FavouriteBrandsCard from "../../Components/FavouriteBrandsCard/FavouriteBrandsCard.components";
import RecommendationCarousel from "../../Components/RecommendationCarousel/RecommendationCarousel.components";
import CouponCarousel from "../../Components/CouponCarousel/CouponCarousel.components";
import Header from "../../Components/Header/Header.component";

function UserProfile() {
  return (
    <div class="UserProfile">
      <Header />
      <UserInfoCard />
      <FavouriteCateCard />
      <BadgeCard />
      <FavouriteBrandsCard />
      <p>Recent Recommendations</p>
      <RecommendationCarousel />
      <p>Recent Coupons Claimed</p>
      <CouponCarousel />
    </div>
  );
}

export default UserProfile;
