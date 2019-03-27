import React, { Component } from "react";
import "./Header.css";
import Navbar from "./Navbar";
import Logo from "./Logo";
import Bag from "./Bag";
import Subtitle from "./Subtitle";

class Header extends Component {
  render() {
    //Mocked data used to ilustrate an API call/SQL database for example.
    const elements = {
      name: ["Potions", "Ingredients", "Books", "Supplies", "Charms", "Clearance!"],
      href: "#"
    }
    return (
      <header>
        <Navbar navElements = {elements}/>
        <Logo />
        <Bag />
        <Subtitle />
      </header>
    );
  }
}

export default Header;
