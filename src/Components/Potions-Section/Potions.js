import React, { Component } from "react";
import Column from "./Column";
import "./Potions.css";

class Potions extends Component {
  render() {
    return (
      <div className="wrapper">
        <h1 className="potions-title">{this.props.title}</h1>
        <div className="potions">
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
