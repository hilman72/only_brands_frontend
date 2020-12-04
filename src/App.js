// import React from 'react';
// import './App.css';
// // import LandingPage from './Pages/LandingPage/LandingPage.components'
// import HomePage from './Pages/HomePage/HomePage.components'

// function App() {
//   return (
//     <div className="App">
//       {/* <LandingPage />  */}
//       <HomePage />
//     </div>
//   );
// }

export default App;


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
