import React, { Fragment, Component } from "react";

import Heading from "../components/Heading";
import TextBox from "./TextBox.jsx";
import Icon from "./Icon.jsx";
import Arrow from "./Arrow.jsx"

import "./Message.scss";

class MessageBox extends Component {
  render() {
    return (
      <Fragment>
        <div class = "thing">
          <TextBox></TextBox>
          <Icon/> 
          <Arrow/>
        </div>
      </Fragment>
    );
  }
}

export default MessageBox;