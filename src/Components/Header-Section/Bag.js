import React from "react";
import { ReactComponent as BagLogo } from "../../images/bag-icon.svg";
import "./Bag.css";

export default () => {
  return (
    <div className="bag">
      <BagLogo />
      <span className="bag-container">
        Bag: <span className="bag-count">1</span>
      </span>
    </div>
  );
};
