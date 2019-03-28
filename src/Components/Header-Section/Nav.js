import React, { Component } from "react";
import "./Nav.css";

class Nav extends Component {

  render() {
    const { navElements } = this.props;
    return (
      <div className="navbar-nav">
        <ul className="navbar-items">
          {navElements.name.map(element => (
            <li key={element} className="navbar-item">
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
    );
  }
}

export default Nav;
