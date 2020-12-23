import React, { useEffect } from "react";
import Axios from "axios";
import { useSelector, useDispatch } from "react-redux";

import "./other-review.style.scss";
import RecommendationCard from "../../Components/RecommendationCards/RecommendationCards.components";

const OtherReview = (props) => {
  useEffect(() => {
    "this is the final";
  });
  return (
    <div className="otherReview">
      <h1>Review</h1>
      <div className="each">
        {props.data && props.data.length > 0 ? (
          props.data.map((data, i) => {
            return <RecommendationCard key={i} data={data} />;
          })
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
};

export default OtherReview;
