import React, { Component, Fragment } from "react";

//Styles
import "./scss/heading.scss";

class Heading extends Component {
  render() {
    let { title, fontSize, titleClass } = this.props;
    return (
      <>
        <h1 className={`title ${titleClass ? titleClass : ""}`}>{title}</h1>
      </>
    );
  }
}

export default Heading;
