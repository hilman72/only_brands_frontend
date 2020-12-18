import "./App.css";
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import { connect } from "react-redux";

import UserProfile from "./Pages/UserProfile/UserProfile.components";
import BusinessProfiles from "./Pages/BusinessProfiles/BusinessProfiles.components";
import MyCouponPage from "./Pages/MyCouponPage/MyCouponPage.components";
import LoginPage from "./Pages/LoginPage/LoginPage.components";
import LandingPage from "./Pages/LandingPage/LandingPage.components";
import CouponSearch from "./Pages/CouponSearch/CouponSearch.components";
import HomePage from "./Pages/HomePage/HomePage.components";
import RegisterPage from "./Pages/RegisterPage/RegisterPage.component";
import AfterRegister from "./Pages/AfterRegisterPage/after_register.component";
import Error from "./Pages/errorPage/error.component";
import NotYet from "./Pages/Notyet_verifyPage/notyet_verify.component";
import TestingPage from "./Pages/TestingPage/TestingPage.jsx";

class App extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    const PurePrivateRoute = ({ component, isAuthenticated, ...rest }) => {
      const Component = component;
      if (Component != null) {
        return (
          <Route
            {...rest}
            render={(props) =>
              isAuthenticated ? (
                <Component {...props} />
              ) : (
                <Redirect
                  to={{
                    pathname: "/LoginPage",
                  }}
                />
              )
            }
          />
        );
      } else {
        return null;
      }
    };

    const PrivateRoute = connect((state) => ({
      isAuthenticated: state.authStore.isAuthenticated,
    }))(PurePrivateRoute);

    return (
      <div>
        <Router>
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route path="/LoginPage" component={LoginPage} />
            <Route path="/RegisterPage" component={RegisterPage} />
            <Route path="/TestingPage" component={TestingPage} />
            <Route path="/After" component={AfterRegister} />
            <Route path="/Error" component={Error} />
            <PrivateRoute path="/UserProfiles/:name" component={UserProfile} />
            <PrivateRoute path="/NotYet" component={NotYet} />
            <PrivateRoute
              path="/BusinessProfiles/:name"
              component={BusinessProfiles}
            />
            <PrivateRoute path="/MyCouponPage/:name" component={MyCouponPage} />
            <PrivateRoute path="/LoginPage" component={LoginPage} />
            <PrivateRoute path="/CouponSearch" component={CouponSearch} />
            <PrivateRoute path="/HomePage" component={HomePage} />
          </Switch>
        </Router>
      </div>
    );
  }
}

// const App=()=> {
//   return (
//     <div className="App">
//       <UserProfile />
//     </div>
//   );
// }

export default App;
