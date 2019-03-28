import React, { Component } from "react";
import Potion from "./Potion";
import getAll from "../../Utils/PotionsAPI";
import "./Potions.css";

class Potions extends Component {
  constructor(props) {
    super(props);
    this.state = { potions: null };
  }

  componentDidMount() {
    getAll().then(potions => this.setState({ potions }))
    .catch(error => console.error(error));
  }

  render() {
    return (
      <div className="potions">
        <h1 className= "potions-title">Potions:</h1>
        
      </div>
    );
  }
}

export default Potions;
