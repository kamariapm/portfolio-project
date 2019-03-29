import React, { Component } from "react";
import { Grid, Cell, List, ListItem, ListItemContent } from "react-mdl";

class Contact extends Component {
  render() {
    return (
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={12}>
            {/* <h2>Kamaria Inman</h2> */}
            <img
              // style={{ width: "800px", height: "200px" }}
              src="http://swift.tahoma.wednet.edu/sles/mcallen/images/Contact-Me.png"
              alt="avatar"
            />
            {/* <p style={{ width: "75%", margin: "auto", paddingTop: "1em" }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, nemo
              quidem! Asperiores, nesciunt neque. Fugiat perferendis et aut
              minima nulla laboriosam maxime, eos sit aperiam in beatae
              voluptatem alias quisquam.
            </p> */}
            {/* </Cell>
          <Cell col={6}>
            <h2>Contact Me</h2> */}
            {/* <hr /> */}
            <div style={{ marginLeft: "30%" }} className="contact-list">
              <List>
                <ListItem>
                  <ListItemContent
                    style={{
                      fontSize: "30px"
                      // fontFamily: "Indie Flower"
                    }}
                  >
                    <a style={{ color: "black" }} href="tel:+1-404-729-7574">
                      <i
                        style={{ color: "#ef9a9a" }}
                        className="fa fa-phone-square"
                        aria-hidden="true"
                      />
                      404-729-7574
                    </a>
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent
                    style={{ fontSize: "30px", fontFamily: "Anton" }}
                  >
                    <a
                      style={{ color: "black" }}
                      href="mailto:kamaria.inman@gmail.com"
                    >
                      <i
                        style={{ color: "#b2dfdb" }}
                        className="fa fa-envelope"
                        aria-hidden="true"
                      />
                      kamaria.inman@gmail.com
                    </a>
                  </ListItemContent>
                </ListItem>
                <ListItem>
                  <ListItemContent
                    style={{ fontSize: "30px", fontFamily: "Anton" }}
                  >
                    <a
                      style={{ color: "black" }}
                      href="https://www.linkedin.com/in/kamariapm"
                      rel="noopener no referrer"
                      target="_blank"
                    >
                      <i
                        style={{ color: "#3949ab" }}
                        className="fa fa-linkedin"
                        aria-hidden="true"
                      />{" "}
                      linkedin.com/in/kamariapm
                    </a>
                  </ListItemContent>
                </ListItem>
                <ListItem>
                  <ListItemContent
                    style={{ fontSize: "30px", fontFamily: "Anton" }}
                  >
                    {" "}
                    <a
                      style={{ color: "black" }}
                      href="https://www.twitter.com/maripeneh"
                      rel="noopener no referrer"
                      target="_blank"
                    >
                      <i
                        style={{ color: "#29b6f6" }}
                        className="fa fa-twitter"
                        aria-hidden="true"
                      />
                      twitter.com/maripeneh
                    </a>
                  </ListItemContent>
                </ListItem>
              </List>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Contact;
