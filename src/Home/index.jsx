import React, { Component } from "react";
import Heading from "../components/Heading";
import KindMindLogo from "../components/KindMindLogo"
import Button from "../components/Button"
import FacebookAvatar from "../components/FacebookAvatar"

import styles from "./Home.module.scss";

var users = [
  {
    name: "Ellen",
    id: "100002467969800",
  },
  {
    name: "Kuhan",
    id: "100001629118028",
  },
  {
    name: "Jasmine",
    id: "100000593124009",
  },
  {
    name: "Chanel",
    id: "100003917349365",
  },
  {
    name: "Manu",
    id: "100000254782789",
  },
  {
    name: "Chris",
    id: "100006937271027",
  },
  {
    name: "Yatharth",
    id: "100000697984485",
  },
  {
    name: "Will",
    id: "100011587720202",
  },
  {
    name: "Jacki",
    id: "628609396",
  },
]
class Home extends Component {
  
  constructor(props) {
    super(props)
    this.state = { rand: 0 }
  }

  newRandom() {
    const max = 8;
    var rand = Math.floor(Math.random() * max);
    console.log(rand)
    return rand
  }

  componentDidMount(){
    this.setState({ rand: this.newRandom()});
  }

  render() {

    var string = "Phoebe, time to be kind to " + users[this.state.rand].name + "!"

    return (
      <div className={styles.container}>
        <KindMindLogo />
        <FacebookAvatar className={styles.avatar} facebookId={users[this.state.rand].id}/>
        <Heading title={string} />
        <Button title="Send Hugs"/>
      </div>
    );
  }
}

export default Home;
