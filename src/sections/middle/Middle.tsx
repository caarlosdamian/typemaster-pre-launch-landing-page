import React from "react";
import phone01 from "../../assets/desktop/image-phone-and-keyboard.jpg";
import phone02 from "../../assets/desktop/image-glass-and-keyboard.jpg";
import square from "../../assets/shared/pattern-square.svg";
import "./Middle.scss";

export const Middle = () => {
  return (
    <div className="middle-container">
      <img src={square} alt="square" className="middle-sqare" />
      <div className="orange-img-container">
        <img src={phone01} alt="phone01" className="orange-img" />
      </div>
      <img src={phone02} alt="phone02" className="img-middle" />
      <div className="right-middle-container">
        <h1 className="right-middle_header"> Mechanical wireless keyboard</h1>
        <span className="right-middle_text">
          The Typemaster keyboard boasts top-notch build and practical design.
          It offers a wide variety of switches and keycaps, along with reliable
          wireless connectivity.
        </span>
      </div>
    </div>
  );
};
