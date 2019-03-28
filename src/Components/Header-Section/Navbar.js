import React, { Component } from "react";
import Search from "./Search";
import Nav from "./Nav";
import "./Navbar.css";

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
    return (
      <nav className="navbar">
        <div className="search">
          <button onClick={() => this.toggleMenu()} className="navbar-btn">
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
