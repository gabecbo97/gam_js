import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../src/App"
import Cozinha from "./pages/Cozinha";

export class Routes extends Component {
  render() {
    return (
      
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/cozinha" component={Cozinha} />
         
        </Switch>
     
    );
  }
}

export default Routes;