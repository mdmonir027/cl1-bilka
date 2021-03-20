import React from "react";
import NavListItem from "./NavListItem";
import shortId from "shortid";
import Basket from "./basket/Basket";
import "./style/NavList.scss";

const NavList = () => {
  const navlist = [
    {
      id: shortId.generate(),
      value: "Offer Newspaper",
      path: "/offer-newspaper",
    },
    {
      id: shortId.generate(),
      value: "Products",
      path: "/products",
    },
    {
      id: shortId.generate(),
      value: "Login",
      path: "/login",
    },
  ];
  return (
    <ul className="navList">
      {navlist.map((item) => (
        <NavListItem path={item.path} key={item.id} value={item.value} />
      ))}
      <Basket />
    </ul>
  );
};

export default NavList;
