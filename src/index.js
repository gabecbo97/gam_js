import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App.jsx";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import $ from "jquery";
import Popper from "popper.js";
import Cozinha from "./pages/Cozinha";
import Sala from "./pages/Sala";
import Banheiro from "./pages/Banheiro.jsx";
import Decoracao from "./pages/Decoracao";
import Dormitorio from "./pages/Dormitorio";
import Escritorio from "./pages/Escritorio";
import Contato from "./pages/Contato";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

ReactDOM.render(
  <Router>
    <Switch>
      <Route path="/" exact={true} component={App} />
      <Route path="/cozinha" component={Cozinha} />
      <Route path="/sala" component={Sala} />
      <Route path="/banheiro" component={Banheiro} />
      <Route path="/decoracao" component={Decoracao} />
      <Route path="/dormitorio" component={Dormitorio} />
      <Route path="/escritorio" component={Escritorio} />
      <Route path="/contato" component={Contato} />
    </Switch>
  </Router>,

  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
