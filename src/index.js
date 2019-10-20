import React from "react";
import ReactDOM from "react-dom";
import { Route, Link, BrowserRouter as Router, Switch } from "react-router-dom";
import "./index.css";

import Navigation from "./Navigation";
import NavItem from "./Navigation/navItem";
import Home from "./Home";
import NotFound from "./NotFound";
import View2 from "./View2";

import * as serviceWorker from "./serviceWorker";

const routing = (
  <Router>
    <div>
      <Navigation>
        <NavItem title="Home" path="/" />
        <NavItem title="Page 3" path="/3" />
        <NavItem title="Page 2" path="/2" />
      </Navigation>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/2" component={View2} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </Router>
);

ReactDOM.render(routing, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
