import React, { Component } from "react";
import "./App.css";
import Header from "./Header-Section/Header";
import Potions from "./Potions-Section/Potions";
import Footer from "./Footer-Section/Footer";

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
