import React from "react";
import { NavLink } from "react-router-dom";

function NavItem(props) {
  return (
    <li className="main-navigation_item">
      <NavLink to={props.path}>{props.title}</NavLink>
    </li>
  );
}

export default NavItem;
