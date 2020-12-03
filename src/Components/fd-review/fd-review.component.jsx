import React from "react";

import "./fd-review.style.scss";
import ReviewCard from "../review-card/review-card.component";

const FdReview = () => {
  return (
    <div className="fdReview">
      <h1>Friend Review</h1>
      <div className="each">
        <ReviewCard />
        <ReviewCard />
      </div>
    </div>
  );
};

export default FdReview;
