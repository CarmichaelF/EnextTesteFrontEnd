import React, { Component } from "react";
import "./App.css";
import Header from "./Header";
import Potions from "./Potions";
import Footer from "./Footer";

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <Potions />
        <Footer />
      </>
    );
  }
}

export default App;
