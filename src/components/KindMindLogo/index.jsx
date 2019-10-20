import React, { Component } from "react";
import {  Link } from "react-router-dom";

import Avatar from 'react-avatar';
import logo from "./image/heart.png"
import kindmind from "./image/kindmind.png"
import "./image/kindmind.png"

//Styles
import styles from "./scss/kindmindlogo.scss";

class KindMindLogo extends Component {
  render() {
    let { facebookId, facebookAvatarClass } = this.props;
    return (
     <Link to="/" style={{ textDecoration: 'none' }}>
        <img src={logo} className="logo" alt="Logo" />
        <img src={kindmind} className="kindmind" alt="Kind Mind" />
     </Link>
    );
  }
}

export default KindMindLogo;
