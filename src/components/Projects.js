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
        //         <div className="projects-grid">
        //           {/* Project 1 */}
        //           <Card shadow={5} style={{ width: "350px", margin: "auto" }}>
        //             <CardTitle
        //               style={{
        //                 textAlign: "center",
        //                 color: "#fff",
        //                 height: "176px",
        //                 background:
        //                   "url(https://reactjs.org/logo-og.png) center / cover"
        //               }}
        //             >
        //               realDevsMeet
        //             </CardTitle>
        //             <CardText>
        //               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
        //               sagittis pellentesque lacus eleifend lacinia...
        //             </CardText>
        //             <CardActions border>
        //               <Button colored>GitHub</Button>
        //               <Button colored>LiveDemo</Button>
        //               <Button colored>LiveDemo</Button>
        //             </CardActions>
        //             <CardMenu style={{ color: "#fff" }}>
        //               <IconButton name="share" />
        //             </CardMenu>
        //           </Card>
        //           {/* Project 2 */}
        //           <Card shadow={5} style={{ width: "350px", margin: "auto" }}>
        //             <CardTitle
        //               style={{
        //                 textAlign: "center",
        //                 color: "#fff",
        //                 height: "176px",
        //                 background:
        //                   "url(https://reactjs.org/logo-og.png) center / cover"
        //               }}
        //             >
        //               realDevsMeet
        //             </CardTitle>
        //             <CardText>
        //               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
        //               sagittis pellentesque lacus eleifend lacinia...
        //             </CardText>
        //             <CardActions border>
        //               <Button colored>GitHub</Button>
        //               <Button colored>LiveDemo</Button>
        //               <Button colored>LiveDemo</Button>
        //             </CardActions>
        //             <CardMenu style={{ color: "#fff" }}>
        //               <IconButton name="share" />
        //             </CardMenu>
        //           </Card>

        //           {/* Project 3 */}
        //           <Card shadow={5} style={{ width: "350px", margin: "auto" }}>
        //             <CardTitle
        //               style={{
        //                 textAlign: "center",
        //                 color: "#fff",
        //                 height: "176px",
        //                 background:
        //                   "url(https://reactjs.org/logo-og.png) center / cover"
        //               }}
        //             >
        //               realDevsMeet
        //             </CardTitle>
        //             <CardText>
        //               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
        //               sagittis pellentesque lacus eleifend lacinia...
        //             </CardText>
        //             <CardActions border>
        //               <Button colored>GitHub</Button>
        //               <Button colored>LiveDemo</Button>
        //               <Button colored>LiveDemo</Button>
        //             </CardActions>
        //             <CardMenu style={{ color: "#fff" }}>
        //               <IconButton name="share" />
        //             </CardMenu>
        //           </Card>
        //         </div>
        //       );
        //     } else if (this.state.activeTab === 1) {
        //       return (
        //         <div className="projects-grid">
        //           {/* Project 1 */}
        //           <Card shadow={5} style={{ width: "350px", margin: "auto" }}>
        //             <CardTitle
        //               style={{
        //                 textAlign: "center",
        //                 color: "#fff",
        //                 height: "176px",
        //                 background:
        //                   "url(https://reactjs.org/logo-og.png) center / cover"
        //               }}
        //             >
        //               Dev Flashcards
        //             </CardTitle>
        //             <CardText>
        //               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
        //               sagittis pellentesque lacus eleifend lacinia...
        //             </CardText>
        //             <CardActions border>
        //               <Button colored>GitHub</Button>
        //               <Button colored>LiveDemo</Button>
        //               <Button colored>LiveDemo</Button>
        //             </CardActions>
        //             <CardMenu style={{ color: "#fff" }}>
        //               <IconButton name="share" />
        //             </CardMenu>
        //           </Card>

        //           {/* Project 2 */}
        //           <Card shadow={5} style={{ width: "350px", margin: "auto" }}>
        //             <CardTitle
        //               style={{
        //                 textAlign: "center",
        //                 color: "#fff",
        //                 height: "176px",
        //                 background:
        //                   "url(https://reactjs.org/logo-og.png) center / cover"
        //               }}
        //             >
        //               Dev Flashcards
        //             </CardTitle>
        //             <CardText>
        //               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
        //               sagittis pellentesque lacus eleifend lacinia...
        //             </CardText>
        //             <CardActions border>
        //               <Button colored>GitHub</Button>
        //               <Button colored>LiveDemo</Button>
        //               <Button colored>LiveDemo</Button>
        //             </CardActions>
        //             <CardMenu style={{ color: "#fff" }}>
        //               <IconButton name="share" />
        //             </CardMenu>
        //           </Card>

        //           {/* Project 3 */}
        //           <Card shadow={5} style={{ width: "350px", margin: "auto" }}>
        //             <CardTitle
        //               style={{
        //                 textAlign: "center",
        //                 color: "#fff",
        //                 height: "176px",
        //                 background:
        //                   "url(https://reactjs.org/logo-og.png) center / cover"
        //               }}
        //             >
        //               Dev Flashcards
        //             </CardTitle>
        //             <CardText>
        //               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
        //               sagittis pellentesque lacus eleifend lacinia...
        //             </CardText>
        //             <CardActions border>
        //               <Button colored>GitHub</Button>
        //               <Button colored>LiveDemo</Button>
        //               <Button colored>LiveDemo</Button>
        //             </CardActions>
        //             <CardMenu style={{ color: "#fff" }}>
        //               <IconButton name="share" />
        //             </CardMenu>
        //           </Card>
        //         </div>
        //       );
        //     }
        //   }

        //   render() {
        //     return (
        //       <div className="catergory-tabs">
        //         <Tabs
        //           activeTab={this.state.activeTab}
        //           onChange={tabId => this.setState({ activeTab: tabId })}
        //           ripple
        //         >
        //           <Tab>React</Tab>
        //           <Tab>MongoDB</Tab>
        //         </Tabs>
        //         <Grid>
        //           <Cell col={12} />
        //           <div className="content">{this.toggleCategories()}</div>
        //         </Grid>
        //       </div>
        //     );
        //   }
        // }

        <div className="projects-grid">
          {/* Project 1 */}
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background:
                  "url(https://reactjs.org/logo-og.png) center / cover"
              }}
            >
              realDevsMeet
            </CardTitle>
            <CardText>
              MERN Stack social networking app designed to connect developers.
            </CardText>
            <CardActions border>
              <Button
                href="https://github.com/kamariapm/MERN-Stack-Social-Network"
                rel="noopener no referrer"
                target="_blank"
                colored
              >
                GitHub
              </Button>
              <Button colored />
              <Button
                href="https://real-devs-meet.herokuapp.com"
                rel="noopener no referrer"
                target="_blank"
                colored
              >
                Live Demo
              </Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
          {/* Project 2 */}
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background:
                  "url(https://reactjs.org/logo-og.png) center / cover"
              }}
            >
              Video Search
            </CardTitle>
            <CardText>
              Simple React app created with YouTube API, Axios and Semantic-UI.
            </CardText>
            <CardActions border>
              <Button
                href="https://github.com/kamariapm/video-search"
                rel="noopener no referrer"
                target="_blank"
                colored
              >
                GitHub
              </Button>
              <Button colored>CodePen</Button>
              <Button
                href="https://www.linkedin.com/feed/update/urn:li:activity:6516318250882650112/"
                rel="noopener no referrer"
                target="_blank"
                colored
              >
                Live Demo
              </Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
          {/* Project 3 */}
          {/* <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background:
                  "url(https://reactjs.org/logo-og.png) center / cover"
              }}
            >
              React Project #3
            </CardTitle>
            <CardText>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's
            </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
              <Button colored>CodePen</Button>
              <Button colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card> */}
        </div>
      );
    } else if (this.state.activeTab === 1) {
      return (
        <div className="projects-grid">
          {/* Project 1 */}
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background:
                  "url(https://cdn.iconscout.com/icon/free/png-256/mongodb-226029.png) center / cover"
              }}
            >
              Dev Flashcards
            </CardTitle>
            <CardText>
              CRUD app created for developers to improve technical vocabulary
              and skills
            </CardText>
            <CardActions border>
              <Button
                href="https://github.com/kamariapm/flashcard-project"
                rel="noopener no referrer"
                target="_blank"
                colored
              >
                GitHub
              </Button>
              <Button colored>CodePen</Button>
              <Button colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
      );
    } else if (this.state.activeTab === 2) {
      return (
        <div className="projects-grid">
          {/* Project 1 */}
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background:
                  "url(https://cdn.iconscout.com/icon/free/png-256/mongodb-226029.png) center / cover"
              }}
            >
              Pokemon App
            </CardTitle>
            <CardText>
              CRUD app created for developers to improve technical vocabulary
              and skills
            </CardText>
            <CardActions border>
              <Button
                href="https://github.com/kamariapm/pokemon-app"
                rel="noopener no referrer"
                target="_blank"
                colored
              >
                GitHub
              </Button>
              <Button colored>CodePen</Button>
              <Button colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project 2 */}

          {/* <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background:
                  "url(https://cdn.iconscout.com/icon/free/png-256/mongodb-226029.png) center / cover"
              }}
            >
              News Website
            </CardTitle>
            <CardText>Search top news</CardText>
            <CardActions border>
              <Button
                href="https://github.com/kamariapm/news-website-project"
                rel="noopener no referrer"
                target="_blank"
                colored
              >
                GitHub
              </Button>
              <Button colored>CodePen</Button>
              <Button colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu> */}
          {/* </Card> */}

          {/* Project 3 */}
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background:
                  "url(https://cdn.iconscout.com/icon/free/png-256/mongodb-226029.png) center / cover"
              }}
            >
              Weather
            </CardTitle>
            <CardText>
              CRUD app created for developers to improve technical vocabulary
              and skills
            </CardText>
            <CardActions border>
              <Button
                href="https://github.com/kamariapm/weather-app"
                rel="noopener no referrer"
                target="_blank"
                colored
              >
                GitHub
              </Button>
              <Button colored>CodePen</Button>
              <Button colored>Live Demo</Button>
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
      <div>
        <Tabs
          activeTab={this.state.activeTab}
          onChange={tabId => this.setState({ activeTab: tabId })}
          ripple
        >
          <Tab>React</Tab>
          <Tab>MongoDB</Tab>
          <Tab>API</Tab>
        </Tabs>
        <Grid>
          <Cell col={12}>
            <div className="content">{this.toggleCategories()}</div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Projects;
