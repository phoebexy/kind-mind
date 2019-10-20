import React, { Fragment, Component } from "react";

import Heading from "../components/Heading";
import MessageBox from "./MessageBox.jsx";

import "./Message.scss";

import Button from "../components/Button"
import FacebookAvatar from "../components/FacebookAvatar"

import styles from "../Home/Home.module.scss";
import logo from "../Home/image/heart.png"
import kindmind from '../Home/image/kindmind.png'
class Message extends Component {
  render() {
    return (
      <div className={styles.container}>
        <img src={logo} className={styles.logo} alt="Logo" />
        <img src={kindmind} className={styles.kindmind} alt="Kind Mind" />
        <Heading title="Send some love!" titleClass="will-title" fontSize={28} />
        <MessageBox />
      </div>
    );
  }
}

export default Message;