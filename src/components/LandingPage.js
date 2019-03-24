import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import headshot from "../img/KInman.jpg";
import Header from "./Header";
import Experience from "./Experience";

class LandingPage extends Component {
  render() {
    return (
      <div>
        <div>
          <Header />
        </div>
        <div style={{ width: "100%", margin: "auto" }}>
          <Grid className="landing-grid">
            <Cell col={12} />
            <img
              src={headshot}
              style={imageStyle}
              className="avatar-img"
              alt="/"
            />
            <div className="banner-text">
              <h1>Full Stack Web Developer</h1>
              <h3>Atlanta, GA</h3>
              <hr />
              <div className="social-links">
                {/* LinkedIn */}
                <a
                  href="http://linkedin.com/in/kamariapm"
                  rel="noopener no referrer"
                  target="_blank"
                >
                  <i className="fa fa-linkedin-square" aria-hidden="true" />
                </a>
                {/* Github */}
                <a
                  href="http://github.com/kamariapm"
                  rel="noopener no referrer"
                  target="_blank"
                >
                  <i className="fa fa-github-square" aria-hidden="true" />
                </a>
                {/* Twitter */}
                <a
                  href="http://twitter.com/maripeneh"
                  rel="noopener no referrer"
                  target="_blank"
                >
                  <i className="fa fa-twitter-square" aria-hidden="true" />
                </a>
                {/* realDevsMeet */}
                <a
                  href="https://real-devs-meet.herokuapp.com/"
                  rel="noopener no referrer"
                  target="_blank"
                >
                  <i class="fa fa-globe" aria-hidden="true" />
                </a>
              </div>
            </div>
          </Grid>
          <div style={experienceDiv}>
            <Experience />
          </div>
        </div>
      </div>
    );
  }
}

const experienceDiv = {
  width: "80%",
  height: "50%",
  margin: "auto"
};

const imageStyle = {
  borderRadius: "50%",
  margin: "auto"
};
export default LandingPage;
