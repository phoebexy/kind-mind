import React, { Component } from "react";
import Heading from "../components/Heading";
import Button from "../components/Button"
import FacebookAvatar from "../components/FacebookAvatar"

import styles from "./Home.module.scss";
import logo from "./image/heart.png"
import kindmind from './image/kindmind.png'

var users = [
  {
    name: "Phoebe",
    id: "100002965549739",
  },
  {
    name: "Will",
    id: "100011587720202",
  },
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
  }
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

    var string = "Sonia, time to be kind to " + users[this.state.rand].name + "!"

    return (
      <div className={styles.container}>
        <img src={logo} className={styles.logo} alt="Logo" />
        <img src={kindmind} className={styles.kindmind} alt="Kind Mind" />
        <FacebookAvatar className={styles.avatar} facebookId={users[this.state.rand].id}/>
        <Heading title={string} />
        <Button title="Send Hugs"/>
      </div>
    );
  }
}

export default Home;
