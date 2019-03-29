import React, { Component } from "react";
import Search from "./Search";
import Nav from "./Nav";
import styles from "./Navbar.module.css";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = { menuHide: true, menuIcon: "fa-bars" };
  }

  toggleMenu() {
    const { menuHide, menuIcon } = this.state;
    this.setState({
      menuHide: !menuHide,
      menuIcon: menuIcon === "fa-times" ? "fa-bars" : "fa-times"
    });
  }

  render() {
    const { navElements } = this.props;
    let nClass;
    if(!this.state.menuHide){
      nClass = styles.navbarOpen;
    }
    return (
      <nav className={`${nClass !== undefined ? nClass : ''}`}>
        <div className={styles.searchContainer}>
          <button onClick={() => this.toggleMenu()} className={styles.navbarBtn}>
            <i className={`fas ${this.state.menuIcon}`} />
          </button>
          {this.state.menuHide ? null : <Search />}
        </div>
        {this.state.menuHide ? null : <Nav navElements={navElements} />}
      </nav>
    );
  }
}

export default Navbar;
