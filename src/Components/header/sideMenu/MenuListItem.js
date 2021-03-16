import { Link } from "@material-ui/core";
import React from "react";

const MenuListItem = ({ name, path }) => {
  return (
    <li className="menuList__item">
      <Link className="menuList__link" to={path}>
        {name}
      </Link>
    </li>
  );
};

export default MenuListItem;
