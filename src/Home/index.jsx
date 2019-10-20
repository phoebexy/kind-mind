import React, { Fragment, Component } from "react";

import Button from "../Button";

//Styles
import "./Home.scss";

class Home extends Component {
  render() {
    return (
      <Fragment>
        <h1 className="diff">Hi Rubens</h1>
        <h1>Hi Will</h1>
        <h1>Hi Phoebe</h1>
        <Button text="Hello" />
      </Fragment>
    );
  }
}

export default Home;
