import React from "react";

import "./BusinessProfiles.style.scss";
import BusinessDetail from "../../Components/Business-detail/Business-detail.component";
import BusinessWindows from "../../Components/Business-windows/Business-windows.component";

class BusinessProfiles extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <div className="header"> header</div>
        <div className="B-body">
          <BusinessDetail />
          <BusinessWindows />
        </div>
      </div>
    );
  }
}

export default BusinessProfiles;
