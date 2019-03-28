import React, { Component } from "react";
import Lightbox from "./Lightbox";
import "./Potion.css";

class Potion extends Component {
  constructor(props) {
    super(props);
    this.state = { lightbox: false };
  }

  toggleLightBox(bool) {
    this.setState({ lightbox: bool });
  }

  render() {
    if (this.props.potion !== undefined) {
      const { name, image, price } = this.props.potion;
      return (
        <div className="potion">
          <figure>
            <button
              onClick={() => this.toggleLightBox(true)}
              className="potion-btn"
            >
              <img
                className="potion-img"
                src={require(`../../images/products/${image}`)}
                alt={`${name}`}
              />
            </button>
            <figcaption>
              <span className="potion-name">{name}</span> -{" "}
              <span className="potion-price">{`$${price}`}</span>
            </figcaption>
          </figure>
          {this.state.lightbox ? (
            <Lightbox
              toggleLightBox={() => this.toggleLightBox()}
              potion={this.props.potion}
            />
          ) : null}
        </div>
      );
    } else {
      return (
        <div>
          <h1>Loading...</h1>
        </div>
      );
    }
  }
}

export default Potion;
