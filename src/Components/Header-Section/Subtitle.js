import React, { Component } from "react";
import styles from "./Subtitle.module.css";

class Subtitle extends Component {
  render() {
    return (
      <div className={styles.headerSubtitle}>
        <span>Free shipping on orders over $50</span>
      </div>
    );
  }
}

export default Subtitle;
