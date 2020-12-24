import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CommunityDetail from "./Pages/Community/CommunityDetail/CommunityDetail";
import Navigation from "./Components/Navigation/Navigation";
import CommunityHome from "./Pages/Community/CommunityHome/CommunityHome";
import Store from "./Pages/Store/Store";
import Login from "./Pages/Account/Login/Login";
import Signup from "./Pages/Account/Signup/Signup";
import Product from "./Pages/Store/Product/Product";
import Cart from "./Pages/Cart/Baguni";
import Footer from "./Components/Footer/Footer";

// const HIDE_NAVIGATION = ["/login", "/signup"];
// const HIDE_FOOTER = ["/login", "/signup", "/storemain"];
// const navigation = HIDE_NAVIGATION.includes(window.location.pathname) ? null : (
//   <Navigation />
// );
// const footer = HIDE_FOOTER.includes(window.location.pathname) ? null : (
//   <Footer />
// );

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={CommunityHome} />
          <Route exact path="/community/" component={CommunityDetail} />
          <Route exact path="/store/product" component={Product} />
          <Route exact path="/cart" component={Cart} />
          <Route exact path="/storemain" component={Store} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
