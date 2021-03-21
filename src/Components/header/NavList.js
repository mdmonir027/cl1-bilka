import React from "react";
import NavListItem from "./NavListItem";
import shortId from "shortid";
import Basket from "./basket/Basket";
import "./style/NavList.scss";
import { useDataLayer } from "./../../store/dataLayer";

const NavList = () => {
  const [state] = useDataLayer();
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
  ];
  return (
    <ul className="navList">
      {navlist.map((item) => (
        <NavListItem path={item.path} key={item.id} value={item.value} />
      ))}
      {!state.auth.isLoggedIn && <NavListItem path="/login" value="Login" />}

      <Basket />
    </ul>
  );
};

export default NavList;
