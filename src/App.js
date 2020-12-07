import "./App.css";
import React from "react";
import { Route, Switch } from "react-router-dom";

import BusinessProfiles from "./Pages/BusinessProfiles/BusinessProfiles.components";
import MyCouponPage from "./Pages/MyCouponPage/MyCouponPage.components";
import UserProfiles from "./Pages/UserProfiles/UserProfiles.components";
import LoginPage from "./Pages/LoginPage/LoginPage.components";
import LandingPage from "./Pages/LandingPage/LandingPage.components";
import CouponSearch from "./Pages/CouponSearch/CouponSearch.components";
import HomePage from "./Pages/HomePage/HomePage.components";

class App extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route path="/BusinessProfiles" component={BusinessProfiles} />
          <Route path="/MyCouponPage" component={MyCouponPage} />
          <Route path="/UserProfiles" component={UserProfiles} />
          <Route path="/LoginPage" component={LoginPage} />
          <Route path="/CouponSearch" component={CouponSearch} />
          <Route path="/HomePage" component={HomePage} />
        </Switch>
      </div>
    );
  }
}

export default App;
