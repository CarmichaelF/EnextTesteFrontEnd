import React, { Component } from "react";
import "./Footer.css";
import Newsletter from './Newsletter';
import Social from './Social';
import Copyright from './Copyright';

class Footer extends Component {
  render() {
    return <div className="footer">
    <Newsletter />
    <Social />
    <Copyright />
    </div>;
  }
}

export default Footer;
