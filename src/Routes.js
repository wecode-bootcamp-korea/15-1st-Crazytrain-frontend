import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CommunityDetail from "./Pages/Community/CommunityDetail/CommunityDetail";
import CommunityHome from "./Pages/Community/CommunityHome/CommunityHome";
import Store from "./Pages/Store/Store";
import Login from "./Pages/Account/Login/Login";
import Signup from "./Pages/Account/Signup/Signup";
import Product from "./Pages/Store/Product/Product";
import Cart from "./Pages/Cart/Baguni";
import UploadImg from "./Pages/WritePost/UploadImg";

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={CommunityHome} />
          <Route exact path="/community/" component={CommunityDetail} />
          <Route exact path="/store/product/:id" component={Product} />
          <Route exact path="/cart" component={Cart} />
          <Route exact path="/storemain" component={Store} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/Uploadimg" component={UploadImg} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
