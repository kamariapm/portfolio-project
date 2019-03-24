import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <div className="header-type">
        <div style={containerStyle}>
          <h1 className="header-words" style={fontStyling}>
            Hello World!
          </h1>
        </div>
      </div>
    );
  }
}

const containerStyle = {
  width: "60%",
  marginTop: "20%",
  margin: "auto"
};

const fontStyling = {
  fontWeight: "900",
  fontSize: "60px"
};

export default Header;
