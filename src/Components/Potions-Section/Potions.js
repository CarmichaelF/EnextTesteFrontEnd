import React, { Component } from "react";
import Column from "./Column";
import styles from "./Potions.module.css";

class Potions extends Component {
  render() {
    return (
      <div className="wrapper">
        <h1 className={styles.potionsTitle}>{this.props.title}</h1>
        <div className={styles.potions}>
          {this.props.potions !== null ? (
            this.props.potions.map(potion => {
              return <Column key={potion.id} potion={potion} />;
            })
          ) : (
            <h1>Loading...</h1>
          )}
        </div>
      </div>
    );
  }
}

export default Potions;
