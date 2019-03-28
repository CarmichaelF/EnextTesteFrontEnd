import React from "react";
import { ReactComponent as Logo } from "../../images/bag-icon.svg";
import "./Bag.css";

export default () => {
  return (
    <div className="bag">
      <Logo />
      <span className="bag-container">
        Bag: <span className="bag-count">1</span>
      </span>
    </div>
  );
};
