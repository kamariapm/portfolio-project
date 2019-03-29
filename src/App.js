import React, { Component } from "react";
import { Layout, Header, Footer, Navigation, Drawer, Content } from "react-mdl";
import { Link } from "react-router-dom";

import "./App.css";
import Main from "./components/Main";
//import Footer from "./components/Footer";
//import Resume from "./components/Resume";

class App extends Component {
  render() {
    return (
      <div className="demo-big-content">
        <Layout>
          <Header
            className="header-color"
            title={
              <Link style={{ textDecoration: "none", color: "white" }} to="/">
                Kamaria Inman
              </Link>
            }
            scroll
          >
            <Navigation>
              <Link to="/resume">Resume</Link>
              <Link to="/aboutme">About Me</Link>
              <Link to="/projects">Projects</Link>
              <Link to="/contact">Contact</Link>
            </Navigation>
          </Header>
          <Drawer
            title={
              <Link style={{ textDecoration: "none", color: "black" }} to="/">
                Kamaria Inman
              </Link>
            }
          >
            <Navigation>
              <Link to="/resume">Resume</Link>
              <Link to="/aboutme">About Me</Link>
              <Link to="/projects">Projects</Link>
              <Link to="/contact">Contact</Link>
            </Navigation>
          </Drawer>
          <Content>
            <div className="page-content" />
            <Main />
          </Content>
          <Footer
            size="mini"
            className="footer-color"
            style={{ textAlign: "center", color: "white" }}
          />
        </Layout>
      </div>
    );
  }
}

export default App;
