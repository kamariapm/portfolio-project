import React, { Component } from "react";
import {
  Tabs,
  Tab,
  Grid,
  Cell,
  Card,
  CardTitle,
  CardText,
  CardActions,
  Button,
  CardMenu,
  IconButton
} from "react-mdl";

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {
    if (this.state.activeTab === 0) {
      return (
        <div>
          {/* Project 1 */}
          <Card shadow={5} style={{ width: "350px", margin: "auto" }}>
            <CardTitle
              style={{
                textAlign: "center",
                color: "#fff",
                height: "176px",
                background:
                  "url(https://reactjs.org/logo-og.png) center / cover"
              }}
            >
              realDevsMeet
            </CardTitle>
            <CardText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              sagittis pellentesque lacus eleifend lacinia...
            </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
              <Button colored>LiveDemo</Button>
              <Button colored>LiveDemo</Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
          {/* Project 2 */}
          <Card shadow={5} style={{ width: "350px", margin: "auto" }}>
            <CardTitle
              style={{
                textAlign: "center",
                color: "#fff",
                height: "176px",
                background:
                  "url(https://reactjs.org/logo-og.png) center / cover"
              }}
            >
              realDevsMeet
            </CardTitle>
            <CardText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              sagittis pellentesque lacus eleifend lacinia...
            </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
              <Button colored>LiveDemo</Button>
              <Button colored>LiveDemo</Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project 3 */}
          <Card shadow={5} style={{ width: "350px", margin: "auto" }}>
            <CardTitle
              style={{
                textAlign: "center",
                color: "#fff",
                height: "176px",
                background:
                  "url(https://reactjs.org/logo-og.png) center / cover"
              }}
            >
              realDevsMeet
            </CardTitle>
            <CardText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              sagittis pellentesque lacus eleifend lacinia...
            </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
              <Button colored>LiveDemo</Button>
              <Button colored>LiveDemo</Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
      );
    } else if (this.state.activeTab === 1) {
      return (
        <div>
          {/* Project 1 */}
          <Card shadow={5} style={{ width: "350px", margin: "auto" }}>
            <CardTitle
              style={{
                textAlign: "center",
                color: "#fff",
                height: "176px",
                background:
                  "url(https://reactjs.org/logo-og.png) center / cover"
              }}
            >
              Dev Flashcards
            </CardTitle>
            <CardText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              sagittis pellentesque lacus eleifend lacinia...
            </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
              <Button colored>LiveDemo</Button>
              <Button colored>LiveDemo</Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project 2 */}
          <Card shadow={5} style={{ width: "350px", margin: "auto" }}>
            <CardTitle
              style={{
                textAlign: "center",
                color: "#fff",
                height: "176px",
                background:
                  "url(https://reactjs.org/logo-og.png) center / cover"
              }}
            >
              Dev Flashcards
            </CardTitle>
            <CardText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              sagittis pellentesque lacus eleifend lacinia...
            </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
              <Button colored>LiveDemo</Button>
              <Button colored>LiveDemo</Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project 3 */}
          <Card shadow={5} style={{ width: "350px", margin: "auto" }}>
            <CardTitle
              style={{
                textAlign: "center",
                color: "#fff",
                height: "176px",
                background:
                  "url(https://reactjs.org/logo-og.png) center / cover"
              }}
            >
              Dev Flashcards
            </CardTitle>
            <CardText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              sagittis pellentesque lacus eleifend lacinia...
            </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
              <Button colored>LiveDemo</Button>
              <Button colored>LiveDemo</Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
      );
    }
  }

  render() {
    return (
      <div className="catergory-tabs">
        <Tabs
          activeTab={this.state.activeTab}
          onChange={tabId => this.setState({ activeTab: tabId })}
          ripple
        >
          <Tab>React</Tab>
          <Tab>MongoDB</Tab>
        </Tabs>
        <Grid className="projects-grid">
          <Cell col={12} />
          <div className="content">{this.toggleCategories()}</div>
        </Grid>
      </div>
    );
  }
}

export default Projects;
