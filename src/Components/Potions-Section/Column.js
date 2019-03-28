import React from "react";
import Potion from "./Potion";
import "./Column.css";

export default props => {
  return (
    <div className="column">
      <Potion potion={props.potion} />
    </div>
  );
};
