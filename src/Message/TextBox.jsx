import React, { Fragment, Component } from "react";

import Heading from "../components/Heading";
import Body from "../components/Body";

import "./Message.scss";
import Arrow from "./Images/arrow-right-circle.svg";



class TextBox extends Component {
    constructor(props) {
        super(props);
      this.messageSentOne = this.messageSentOne.bind(this);
      this.messageSentTwo = this.messageSentTwo.bind(this);
      this.messageSentThree = this.messageSentThree.bind(this);        
    }
    messageSentOne(){
        document.getElementById("textbox").value = "Hey, how's it going?";
    };
    messageSentTwo(){
        document.getElementById("textbox").value = "Is everything all right?";
    };
    messageSentThree(){
        document.getElementById("textbox").value = "Want to talk?";
    };
    render() { 
    return (
      <div>
         <Body bodyCopy="Select or write your message!"/>
         <input type = "submit" value = "Hey, how's it going?" onClick = {this.messageSentOne} />
         <p></p>
         <input type = "submit" value = "Is everything all right?" onClick = {this.messageSentTwo} />
         <p></p>
         <input type = "submit" value = "Want to talk?" onClick = {this.messageSentThree} />
         <p></p> 
         <input type="text" id="textbox" />

      </div>
    );
  }
}

export default TextBox;