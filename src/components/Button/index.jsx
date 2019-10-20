import React, { Component, Fragment } from "react";
import {  Link } from "react-router-dom";

//Styles
import "./scss/button.scss";

class Button extends Component {
  render() {
    let { title } = this.props;
    return (
      <Link to="/3" style={{ textDecoration: 'none' }}>
        <h1 className={`button-title`}>{title}</h1>
      </Link>
        

    );
  }
}

export default Button;
