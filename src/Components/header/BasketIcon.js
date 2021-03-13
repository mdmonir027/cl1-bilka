import React from "react";
import { Link } from "react-router-dom";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
const BasketIcon = () => {
  return (
    <li className="basket__icon navList__item">
      <Link to="basket" className="navList__link basket__link">
        <ShoppingCartIcon className="basket__iconIcon" />
        Basket <span>0</span>
      </Link>
    </li>
  );
};

export default BasketIcon;
