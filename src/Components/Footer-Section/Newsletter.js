import React from "react";
import "./Newsletter.css";

export default () => {
  return (
    <div className="newsletter ">
      <div className="newsletter-content">
        <h1 className="newsletter-text newsletter-text-italic">
          Sign up for our Newsletter
        </h1>
        <h2 className="newsletter-text">
          Sign up for our Newsletter &amp; get exclusive discounts!
        </h2>
        <div className="newsletter-form">
          <input className="newsletter-input" placeholder="Enter your email" type="text" />
          <button className="newsletter-btn">Submit</button>
        </div>
      </div>
    </div>
  );
};
