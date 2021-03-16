import React from "react";
import { Link } from "react-router-dom";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { useDataLayer } from "./../../store/dataLayer";
const BasketIcon = () => {
  const [{ cart }] = useDataLayer();

  return (
    <li className="basket__icon navList__item">
      <Link to="basket" className="navList__link basket__link">
        <ShoppingCartIcon className="basket__iconIcon" />
        Basket <span>{cart.length}</span>
      </Link>
    </li>
  );
};

export default BasketIcon;
