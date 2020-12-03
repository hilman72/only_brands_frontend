import React from "react";

import "./other-review.style.scss";
import ReviewCard from "../review-card/review-card.component";

const OtherReview = () => {
  return (
    <div className="otherReview">
      <h1>Review</h1>
      <div className="each">
        <ReviewCard />
        <ReviewCard />
      </div>
    </div>
  );
};

export default OtherReview;
