import React from "react";

import "./review-card.style.scss";

const ReviewCard = (props) => {
  return (
    <div className="reviewCard">
      <div className="upperCard">
        <div className="icon">icon</div>
        <div className="photo">photo</div>
      </div>
      <div className="lowerCard">
        <p className="UserName">sam..O</p>
        <p className="Description">hihihihih</p>
      </div>
    </div>
  );
};

export default ReviewCard;
