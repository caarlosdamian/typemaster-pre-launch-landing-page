import React from "react";
import { Buttom } from "../../components/Buttom/Buttom";
import keybaord from "../../assets/desktop/image-keyboard.jpg";
import square from "../../assets/shared/pattern-square.svg";
import "./Hero.scss";

export const Hero = () => {
  return (
    <div className="hero-container">
      <img src={square} alt="square" className="hero-square-pattern" />
      <div className="hero-left_wrapper">
        <h1 className="left-header">Typemaster keyboard</h1>
        <span className="hero-desription">
          Improve your productivity and gaming without breaking the bank.
          Upgrade to a high quality mechanical typing experience.
        </span>
        <div className="hero-left_bottom-container">
          <Buttom classd="primary" label="Pre-order now" />
          <span className="hero-left_bottom-subtitle">Release on 5/27</span>
        </div>
      </div>
      <div className="hero-right_wrapper">
        <img src={keybaord} alt="keybaord" className="hero-right_img" />
      </div>
    </div>
  );
};
