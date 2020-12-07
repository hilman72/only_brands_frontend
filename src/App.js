import "./App.css";
import React from "react";
import { Route, Switch } from "react-router-dom";

import UserProfile from "./Pages/UserProfile/UserProfile.components";

class App extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div>
        <Switch>
          <Route path="/UserProfiles" component={UserProfile} />
        </Switch>
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
