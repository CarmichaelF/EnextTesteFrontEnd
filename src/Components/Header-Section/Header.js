import React, { Component } from "react";
import styles from "./Header.module.css";
import Navbar from "./Navbar";
import Logo from "./Logo";
import Bag from "./Bag";
import Subtitle from "./Subtitle";

class Header extends Component {
  render() {
    const elements = {
      name: [
        "Potions",
        "Ingredients",
        "Books",
        "Supplies",
        "Charms",
        "Clearance!"
      ],
      href: "#"
    };
    return (
      <header>
        <div className={styles.headerTop}>
          <Navbar navElements={elements} />
          <Logo title="Merlin's potions" subtitle="fine potions since 1026" />
          <Bag />
        </div>
        <Subtitle />
      </header>
    );
  }
}

export default Header;
