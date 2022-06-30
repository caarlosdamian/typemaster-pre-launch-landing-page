import React from "react";
import { Buttom } from "../../components/Buttom/Buttom";
import logo from "../../assets/shared/logo.svg";
import "./Header.scss";

export const Header = () => {
  return (
    <div className="header-container">
      <img src={logo} alt="logo" className="header-img" />
      <Buttom classd="secondary" label="Pre-order now" />
    </div>
  );
};
