import React, { Component } from "react";
import "./Navbar.css";

class Navbar extends Component {
  render() {
    const { navElements } = this.props;
    return (
      <nav className="navbar">
        <div className="search wrapper">
          <button href="#" className="navbar-btn">
            <i class="fas fa-bars" />
          </button>

          <div class="search-input">
            <span class="fa fa-search" />
            <input type="text" placeholder="Search our stock" />
          </div>
        </div>

        <div className="navbar-nav">
          <ul className="navbar-items">
            {navElements.name.map(element => (
              <li className="navbar-item">
                <a className="navbar-link" href={navElements.href}>
                  {element}
                </a>
              </li>
            ))}
          </ul>
          <div className="navbar-btn-group">
            <button className="navbar-btn-sign">Sign In</button>
            <span>or</span>
            <button className="navbar-btn-sign">Sign Up</button>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
