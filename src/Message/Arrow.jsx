import React, { Fragment, Component } from "react";

import Heading from "../components/Heading";
import Body from "../components/Body";
import arrowRight from "./Images/arrow-right-circle.svg"
import "./Message.scss";


class Arrow extends Component {
    constructor(props) {
        super(props);
      this.messageSent = this.messageSent.bind(this);        
      }
    messageSent(){
         document.getElementById("messageConfirm").innerHTML = "Message Sent! ❤️";
    };

   render() {
    return (
      <Fragment>
          <input type="image" src={arrowRight} onClick = {this.messageSent} />
          <Body  id="messageConfirm" bodyCopy = ""/>       
      </Fragment>
    );
  }
}

export default Arrow;