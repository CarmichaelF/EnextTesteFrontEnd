import React from "react";
import "./Search.css";

export default () => {
  return (
    <div className="search-input">
      <span className="fa fa-search" />
      <input type="text" placeholder="Search our stock" />
    </div>
  );
};
