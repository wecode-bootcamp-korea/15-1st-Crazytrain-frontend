import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Community from "./Pages/Community/Community";
import CommunityDetail from "./Pages/Community/CommunityDetail/CommunityDetail";
import Navigation from "./Components/Navigation/Navigation";
import Store from "./Pages/Store/Store";
import Login from "./Pages/Account/Login/Login";
import Signup from "./Pages/Account/Signup/Signup";

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Navigation />
        <Switch>
          <Route exact path="/" component={CommunityDetail} />
          <Route exact path="/community" component={Community} />
          <Route exact path="/store" component={Store} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
