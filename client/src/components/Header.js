import React from "react";

class Header extends React.Component {
  render() {
    return (
      <img
        className="myLogo"
        src={require("../assets/myLogo.png")}
        alt="Logo"
      />
    );
  }
}

export default Header;
