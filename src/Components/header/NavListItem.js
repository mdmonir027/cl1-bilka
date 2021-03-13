import React from "react";
import { Link } from "react-router-dom";

const NavListItem = ({ path, value }) => {
  return (
    <li className="navList__item">
      <Link className="navList__link" to={path}>
        {value}
      </Link>
    </li>
  );
};

export default NavListItem;
