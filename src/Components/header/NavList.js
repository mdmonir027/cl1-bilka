import React from "react";
import NavListItem from "./NavListItem";
import shortId from "shortid";
import Basket from "./basket/Basket";
import "./style/NavList.scss";
import { useDataLayer } from "./../../store/dataLayer";
import Avatar from "@material-ui/core/Avatar";

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
  const avatarUrl =
    "https://images.pexels.com/photos/545042/pexels-photo-545042.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500";
  return (
    <ul className="navList">
      {navlist.map((item) => (
        <NavListItem path={item.path} key={item.id} value={item.value} />
      ))}
      {state.auth.isLoggedIn ? (
        <NavListItem
          path="/admin/dashboard"
          value={<Avatar className="avatar" src={avatarUrl} alt="user" />}
        />
      ) : (
        <NavListItem path="/login" value="Login" />
      )}

      <Basket />
    </ul>
  );
};

export default NavList;
