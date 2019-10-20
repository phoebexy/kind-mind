import React, { Fragment, Component } from "react";

import Heading from "../components/Heading";
import Body from "../components/Body";

import "./Message.scss";
import FbImage from "./Images/facebook.svg"
import IGImage from "./Images/instagram.svg"
import arrowRight from "./Images/arrow-right-circle.svg"


class Icon extends Component { 
  constructor(props) {
    super(props);
     this.messageSent = this.messageSent.bind(this);        
  }
  messageSent(){
    document.getElementById("messageConfirm").innerHTML = "Message Sent! ❤️";
  }; 
  render() {
    return (
      <div>
         <input id = "FbButton" class="column" type="image" src={FbImage} />
         <input id = "IGButton" class="column" type="image" src={IGImage} />
         <input type="image" className = "wrap" src={arrowRight} onClick = {this.messageSent} />
         <p></p>
         <Body  id="messageConfirm" bodyCopy = ""/> 
      </div>
    );
  }
}

export default Icon;