import React from "react";

import "./Business.tiers.style.scss";
import DiffRank from "../tier-rank/tier-rank.component";
import UserRank from "../user-rank/user-rank.component";

const BusinessTiers = () => {
  return (
    <div>
      <div>
        You Progress
        <UserRank />
      </div>
      <div>
        <DiffRank />
      </div>
    </div>
  );
};

export default BusinessTiers;
