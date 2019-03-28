import React, { Component } from "react";
import "./Logo.css";

class Logo extends Component {
  formatTitle(title) {
    const splited = title.split(" ");
    return (
      <>
        <span className="logo-title logo-title-bold">{splited[0]}</span>
        <span className="logo-title">{splited[1]}</span>
      </>
    );
  }

  render() {
    const { title, subtitle } = this.props;
    return (
      <div className="logo">
        <div className="title">{this.formatTitle(title)}</div>
        <div className="subtitle"><span>{subtitle}</span></div>
      </div>
    );
  }
}

export default Logo;
