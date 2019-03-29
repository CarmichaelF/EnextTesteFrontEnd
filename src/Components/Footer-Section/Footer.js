import React, { Component } from "react";
import Newsletter from "./Newsletter";
import Social from "./Social";
import Copyright from "./Copyright";
import styles from "./Footer.module.css";
import Media from "react-media";

class Footer extends Component {
  render() {
    return (
      <div className={styles.footer}>
        <Newsletter />
        <Social />
        <Copyright />
      </div>
    );
  }
}

export default Footer;
