import React, { useState, useEffect } from "react";

import "./business-windows.style.scss";
import BusinessDiffCom from "../Business-diff-com/Business-diff-com.component";

const BusinessWindows = () => {
  const [who, setWho] = useState("");

  useEffect(() => {
    let x = localStorage.getItem("ob_who");
    setWho(x);
  }, [who]);

  return (
    <div className="B-windows">
      <BusinessDiffCom who={who} />
    </div>
  );
};

export default BusinessWindows;
