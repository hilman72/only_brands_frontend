import React from "react";

import "./business-windows.style.scss";
import BusinessDiffCom from "../Business-diff-com/Business-diff-com.component";

class BusinessWindows extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="B-windows">
        <BusinessDiffCom />
      </div>
    );
  }
}

export default BusinessWindows;
