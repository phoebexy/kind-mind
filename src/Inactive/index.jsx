import React, { Component } from "react";
import Heading from "../components/Heading";
import KindMindLogo from "../components/KindMindLogo"
import {  Link } from "react-router-dom";

import styles from "./Inactive.module.scss";

var quotes = [
  {
    id: "What mental health needs is more sunlight, more candor, and more unashamed conversation",
  },
  {
    id: "The only journey is the journey within.",
  },
  {
    id: "Just because you don’t understand it doesn’t mean it isn’t so.",
  },
  {
    id: "Mental health is not a destination, but a process. It’s about how you drive, not where you’re going.",
  },
  {
    id: "We need, ultimately, to be able to view mental health with the same clear-headedness we show when talking about physical health.",
  },
  {
    id: "The strongest people are those who win battles we know nothing about.",
  },
  {
    id: "Mental health is too important to be left to the professionals alone, mental health is everyone's business.",
  },
  {
    id: "It would be lovely to live in a culture where calmness was the aim.",
  },
]
class Home extends Component {
  
  constructor(props) {
    super(props)
    this.state = { rand: 0 }
  }

  newRandom() {
    const max = 6;
    var rand = Math.floor(Math.random() * max);
    return rand
  }

  componentDidMount(){
    this.setState({ rand: this.newRandom()});
  }

  render() {

    var string = quotes[this.state.rand].id

    return (
      <Link to="/Home" style={{ textDecoration: 'none' }}>
      <div className={styles.container}>
        <KindMindLogo />
        <Heading titleClass="quote" title={string} />
      </div>
      </Link>
    );
  }
}

export default Home;
