import React, { Fragment, Component } from "react";

import Heading from "../components/Heading";

import "./Message.scss";
import FbImage from "./Images/facebook.svg"
import IGImage from "./Images/instagram.svg"

class Icon extends Component {  
  render() {
    return (
      <div class="row">
         <input id = "FbButton" class="column" type="image" src={FbImage} />
         <input id = "IGButton" class="column" type="image" src={IGImage} />
      </div>
    );
  }
}

export default Icon;