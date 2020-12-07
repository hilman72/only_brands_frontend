import React from "react";
import "./FavouriteBrandsCard.components.scss";

import BrandCards from "../BrandCards/BrandCards.components"

function FavouriteBrandsCard() {
  return (
    <div class="FavouriteBrandsCard">
      <p>FavouriteBrandsCard</p>
      <BrandCards />
      <BrandCards />
      <BrandCards />
    </div>
  );
}

export default FavouriteBrandsCard;
