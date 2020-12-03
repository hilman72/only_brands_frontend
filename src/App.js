import "./App.css";
import React from "react";
import { Route, Switch } from "react-router-dom";

import BusinessProfiles from "./Pages/BusinessProfiles/BusinessProfiles.components";

class App extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div>
        <Switch>
          <Route path="/BusinessProfiles" component={BusinessProfiles} />
        </Switch>
      </div>
    );
  }
}

export default App;
