import React, { Component } from "react";
import Avatar from 'react-avatar';

//Styles
import "./scss/facebook-avatar.scss";

class FacebookAvatar extends Component {
  render() {
    let { facebookId, facebookAvatarClass } = this.props;
    return (
      <Avatar unstyled={true} className={`facebook-avatar ${facebookAvatarClass ? facebookAvatarClass : ""}`} facebookId={facebookId} size="250" round={true}/>
    );
  }
}

export default FacebookAvatar;
