import React, { Component } from "react";
import "./Lightbox.css";

class Lightbox extends Component {
  render() {
    const { name, image, price, effect, ingredients } = this.props.potion;
    return (
      <div className="background-grey">
        <div className="lightbox">
          <button
            onClick={() => this.props.toggleLightBox(false)}
            className="lightbox-btn-x"
          >
            X
          </button>
          <div className="lightbox-content">
            <img
              className="lightbox-img"
              src={require(`../../images/products/${image}`)}
              alt={`${name}`}
            />
            <div className="lightbox-text">
              <h1 className="potion-name">{name}</h1>
              <h2 className="potion-name">Use/Effect:</h2>
              <span className="lightbox-effect">{effect}</span>
              <h3 className="potion-name">Ingredients:</h3>
              <div className="lightbox-ingredients">
                {ingredients.map(ingredient => (
                  <span className="lightbox-ingredient">{ingredient}</span>
                ))}
              </div>
              <div className="lightbox-price">
                <h4 className="potion-name">Price:</h4>
                <span className="potion-price">{`$${price}`}</span>
              </div>
              <button className="lightbox-btn">Add to cart</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Lightbox;
