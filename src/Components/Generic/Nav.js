import React, { Component } from "react";
import styles from "./Nav.module.css";

class Nav extends Component {
  render() {
    const { navElements } = this.props;
    return (
      <div className={styles.navbarNav}>
        <ul className={styles.navbarItems}>
          {navElements.name.map(element => (
            <li key={element} className={styles.navbarItem}>
              <a className={styles.navbarLink} href={navElements.href}>
                {element}
              </a>
            </li>
          ))}
        </ul>
        <div className={styles.navbarBtnGroup}>
          <button className={styles.navbarBtnSign}>Sign In</button>
          <span>or</span>
          <button className={styles.navbarBtnSign}>Sign Up</button>
        </div>
      </div>
    );
  }
}

export default Nav;
