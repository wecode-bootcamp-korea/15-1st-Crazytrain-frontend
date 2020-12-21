import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CommunityHome from "./Pages/Community/CommunityHome/CommunityHome";
import Store from "./Pages/Store/Store";
import Login from "./Pages/Account/Login/Login";
import Signup from "./Pages/Account/Signup/Signup";
import Product from "./Pages/Store/Product/Product";

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/community" component={CommunityHome} />
          <Route exact path="/store" component={Store} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/store/product" component={Product} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
