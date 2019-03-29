import React, { Component } from "react";
import { Grid, Cell, List, ListItem, ListItemContent, Icon } from "react-mdl";

import atlanta from "../img/atlanta-made1.jpg";
import bitmoji from "../img/bitmoji1.png";

class AboutMe extends Component {
  render() {
    return (
      <div>
        <div className="about-grid">
          <Grid>
            <Cell col={12}>
              <img src={atlanta} alt="/" />
            </Cell>
          </Grid>
        </div>

        <Grid>
          <Cell col={6}>
            <img src={bitmoji} alt="/" />
          </Cell>

          <Cell>
            <p style={{ fontSize: "20px" }}>
              Hi, I'm Kamaria (pronounced "Kuh-mah-ree-yah"). I'm an Atlanta
              native and I love this city!
            </p>
            <br />
            <hr />
            <b>Key Points:</b>
            <List>
              <ListItem>
                <ListItemContent>
                  <Icon name="star" />I have a B.A. in Psychology
                </ListItemContent>
              </ListItem>
              <ListItem>
                <ListItemContent>
                  <Icon name="star" />
                  Professional background primarily in higher education where I
                  worked as an administrative assistant and an academic advisor.
                </ListItemContent>
              </ListItem>
              <ListItem>
                <ListItemContent>
                  <Icon name="star" />I started my career transition into Tech
                  in 2017
                </ListItemContent>
              </ListItem>
              <ListItem>
                <ListItemContent>
                  <Icon name="star" />
                  Lived in South America from 2013-2015: Uruguya, Ecuador &
                  Argentina
                </ListItemContent>
              </ListItem>
            </List>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default AboutMe;
