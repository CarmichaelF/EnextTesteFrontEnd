import React from "react";
import Potion from "./Potion";
import styles from "./Column.module.css";

export default props => {
  return (
    <div className={styles.column}>
      <Potion potion={props.potion} />
    </div>
  );
};
