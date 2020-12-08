import React from "react";

import "./BusinessProfiles.style.scss";
import BusinessDetail from "../../Components/Business-detail/Business-detail.component";
import BusinessWindows from "../../Components/Business-windows/Business-windows.component";
import Header from "../../Components/Header/Header.component";

class BusinessProfiles extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Header />
        <div className="B-body">
          <BusinessDetail />
          <BusinessWindows />
        </div>
      </div>
    );
  }
}

export default BusinessProfiles;
