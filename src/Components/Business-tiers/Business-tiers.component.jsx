import React from "react";

import "./Business.tiers.style.scss";
import DiffRank from "../tier-rank/tier-rank.component";
import UserRank from "../user-rank/user-rank.component";

const BusinessTiers = (props) => {
  let who = localStorage.getItem("ob_who");

  return (
    <div>
      {who === "user" ? (
        <div>
          You Progress
          <UserRank data={props.data} />
        </div>
      ) : (
        <div></div>
      )}

      <div>
        <DiffRank data={props.data} />
      </div>
    </div>
  );
};

export default BusinessTiers;
