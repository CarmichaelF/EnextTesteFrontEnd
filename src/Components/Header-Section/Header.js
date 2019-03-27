import React, { Component } from "react";
import "./Header.css";
import Navbar from "./Navbar";
import Logo from "./Logo";
import Bag from "./Bag";
import Subtitle from "./Subtitle";

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <Navbar />
        <Logo />
        <Bag />
        <Subtitle />
      </div>
    );
  }
}

export default Header;
