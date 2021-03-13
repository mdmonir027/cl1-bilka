import React from "react";
import LogoLink from "./LogoLink";
import NavList from "./NavList";
import "./style/Header.scss";

const Header = () => {
  return (
    <div className="header">
      <div className="header__container">
        <div className="header__left">
          <LogoLink />
        </div>
        <div className="header__right">
          <NavList />
        </div>
      </div>
    </div>
  );
};

export default Header;
