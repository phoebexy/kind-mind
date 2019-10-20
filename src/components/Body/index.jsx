import React, { Component, Fragment } from "react";

//Styles
import "./scss/body.scss";

class Body extends Component {
  render() {
    let {bodyCopy, fontSize, bodyClass, id} = this.props;
    return (
      <>
        <p id={id} className={`bodyCopy ${bodyClass ? bodyClass : ""}`}>{bodyCopy}</p>
      </>
    );
  }
}

export default Body;
