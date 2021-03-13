import React from "react";
import SideMenu from "./sideMenu/SideMenu";
import LogoImage from "./bilka-logo.svg";
import { Link } from "react-router-dom";
import "./style/LogoLink.scss";

const LogoLink = () => {
  return (
    <div className="logoLink">
      <div className="logoLink__menuIcon">
        <SideMenu />
      </div>
      <div className="logoLink__logo">
        <Link to="/" className="logoLink__link">
          <img src={LogoImage} alt="Logo" />
        </Link>
      </div>
    </div>
  );
};

export default LogoLink;
