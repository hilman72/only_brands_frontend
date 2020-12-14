import React from "react";

import "./other-review.style.scss";
import RecommendationCard from "../../Components/RecommendationCards/RecommendationCards.components";

const OtherReview = () => {
  return (
    <div className="otherReview">
      <h1>Review</h1>
      <div className="each">
        <RecommendationCard />
        <RecommendationCard />
      </div>
    </div>
  );
};

export default OtherReview;
