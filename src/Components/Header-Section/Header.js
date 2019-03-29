import React, { Component } from "react";
import styles from "./Header.module.css";
import Navbar from "./Navbar";
import Logo from "./Logo";
import Bag from "./Bag";
import Subtitle from "./Subtitle";
import Media from "react-media";
import Nav from "../Generic/Nav";
import Search from "./Search";

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
        <div className={`${styles.headerTop} ${styles.wrapper}`}>
          <Media query="(max-width: 992px)">
            {matches =>
              matches ? (
                <>
                  <Navbar navElements={elements} />
                  <Logo
                    title="Merlin's potions"
                    subtitle="fine potions since 1026"
                  />
                  <Bag />
                </>
              ) : (
                <>
                  <Logo
                    title="Merlin's potions"
                    subtitle="fine potions since 1026"
                  />
                  <Search />
                  <Subtitle />
                  <Bag />
                </>
              )
            }
          </Media>
        </div>
        <Media
          query="(min-width: 992px)"
          render={() => <Nav navElements={elements} />}
        />
        <Media query="(max-width: 992px)" render={() => <Subtitle />} />
      </header>
    );
  }
}

export default Header;
