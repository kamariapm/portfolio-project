import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";

import javascriptLogo from "../img/javascript.png";
import htmlLogo from "../img/html.png";
import bootstrapLogo from "../img/bootstrap.png";
import cssLogo from "../img/css.png";
import expressLogo from "../img/express.png";
import mlabLogo from "../img/mlab.png";
import mongodbLogo from "../img/mongodb.png";
import mongooseLogo from "../img/mongoose.png";
import nodeLogo from "../img/node.png";
import reduxLogo from "../img/redux.png";
import reactLogo from "../img/react.png";
import githubLogo from "../img/githubtest.png";

class Technologies extends Component {
  render() {
    return (
      <div id="experience" className="Experience">
        <h1 style={{ textAlign: "center", fontWeight: "bold" }}>
          Check out my Toolkit!
        </h1>
        <div className="container">
          <Grid>
            <Cell col={3}>
              <img src={htmlLogo} style={{ marginLeft: "20%" }} alt=" " />
            </Cell>
            <Cell col={3}>
              <img src={cssLogo} style={{ marginLeft: "20%" }} alt=" " />
            </Cell>

            <Cell col={3}>
              <img src={javascriptLogo} style={{ marginLeft: "15%" }} alt=" " />
            </Cell>
            <Cell col={3}>
              <img src={bootstrapLogo} alt=" " />
            </Cell>
          </Grid>

          <Grid>
            <Cell col={3}>
              <img src={reactLogo} alt=" " />
            </Cell>
            <Cell col={3}>
              <img src={reduxLogo} alt=" " />
            </Cell>

            <Cell col={3}>
              <img src={githubLogo} alt=" " />
            </Cell>
            <Cell col={3}>
              <img src={nodeLogo} style={{ marginTop: "25%" }} alt=" " />
            </Cell>
          </Grid>

          <Grid>
            <Cell col={3}>
              <img src={mongooseLogo} alt=" " />
            </Cell>
            <Cell col={3}>
              <img src={expressLogo} alt=" " />
            </Cell>
            <Cell col={3}>
              <img src={mongodbLogo} alt=" " />
            </Cell>
            <Cell col={3}>
              <img src={mlabLogo} alt=" " />
            </Cell>
          </Grid>
        </div>
      </div>
    );
  }
}

export default Technologies;
