import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Community from "./Pages/Community/Community";
import Store from "./Pages/Store/Store";
import Login from "./Pages/Account/Login/Login";
import Signup from "./Pages/Account/Signup/Signup";
import Navigation from "./Components/Navigation/Navigation";
import WritingList from "./Components/Navigation/WritingList";
import UploadImg from "./Components/Navigation/UploadImg";

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/UploadImg/:id" component={UploadImg} />
          <Route exact path="/WritingList" component={WritingList} />
          <Route exact path="/Navigation" component={Navigation} />
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
