import React from "react";
import { featuresData } from "../../utils/data";
import "./Features.scss";

export const Feautes = () => {
  return (
    <div className="features-container">
      {featuresData.map((item) => (
        <div className="features-item" key={item.id}>
          <div className="item-imgcontainer">
            <img src={item.image} alt={item.title} className="item-icon" />
          </div>
          <h3 className="item-title">{item.title}</h3>
          <p className="item-text">{item.description}</p>
        </div>
      ))}
    </div>
  );
};
