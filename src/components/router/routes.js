import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../../pages/home/home";
import Login from "../../pages/login/login";

export class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/login" exact component={Login} />
      </Switch>
    );
  }
}

export default Routes;
