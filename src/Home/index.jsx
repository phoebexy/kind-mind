import React, { Component } from "react";
import Heading from "../components/Heading";
import Button from "../components/Button"
import FacebookAvatar from "../components/FacebookAvatar"

import styles from "./Home.module.scss";
import logo from "./image/heart.png"
import kindmind from './image/kindmind.png'

class Home extends Component {
  render() {
    return (
      <div className={styles.container}>
        <img src={logo} className={styles.logo} alt="Logo" />
        <img src={kindmind} className={styles.kindmind} alt="Kind Mind" />
        <FacebookAvatar className={styles.avatar} facebookId="100002965549739"/>
        <Heading title="Sonia, time to be kind to Phoebe!" titleClass="title-1" />
        <Button title="Send Hugs" />
      </div>
    );
  }
}

export default Home;
