import React, { Fragment, Component } from "react";

import Heading from "../components/Heading";

import "./Home.module.scss";

class Home extends Component {
  render() {
    return (
      <Fragment>
        <Heading title="Kind Mind" fontSize={28} />
        <Heading title="Hi Will" titleClass="will-title" fontSize={28} />
        <Heading title="Hi Phoebe" titleClass="phoebe-title" fontSize={28} />
      </Fragment>
    );
  }
}

export default Home;
