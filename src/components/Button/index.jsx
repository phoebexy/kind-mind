import React, { Component, Fragment } from "react";

//Styles
import "./scss/button.scss";

class Button extends Component {
  render() {
    let { title } = this.props;
    return (
      <>
        <h1 className={`button-title`}>{title}</h1>
      </>
    );
  }
}

export default Button;
