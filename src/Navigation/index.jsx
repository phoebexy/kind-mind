import React, { Component } from "react";
import NavItem from "./navItem.jsx";

import "./scss/nav.scss";
class Navigation extends Component {
  render() {
    return (
      <nav className="main-navigation">
        <ul>{this.props.children}</ul>
      </nav>
    );
  }
}

export default Navigation;
