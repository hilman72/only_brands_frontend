import React, { useEffect } from "react";
import Axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import Grid from "@material-ui/core/Grid";

import "./other-review.style.scss";
import RecommendationCard from "../../Components/RecommendationCards/RecommendationCards.components";

const OtherReview = (props) => {
  useEffect(() => {
    "this is the final";
  });
  return (
    <div className="otherReview">
      <h1>Recommendations</h1>


          <div className="each">
          <Grid container spacing={2} xs={12}>
            {props.data && props.data.length > 0 ? (
              props.data.map((data, i) => {
                return <Grid item xs={6}>
                <RecommendationCard key={i} data={data} 
                />;
                 </Grid>
              })
            ) : (
              <div></div>
            )}
            </Grid>
          </div>

    </div>
  );
};

export default OtherReview;
