import React, { useState } from "react";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { useDataLayer } from "../../../store/dataLayer";
import Drawer from "@material-ui/core/Drawer";
import BasketProuducts from "./BasketProuducts";
import "./style/Basket.scss";

const Basket = () => {
  const [{ cart }] = useDataLayer();
  const [drawer, setDrawer] = useState(false);

  return (
    <li className="basket__icon navList__item">
      <div
        to="basket"
        className="navList__link basket__link"
        onClick={() => setDrawer(true)}
      >
        <ShoppingCartIcon className="basket__iconIcon" />
        Basket <span>{cart.length}</span>
      </div>
      <Drawer anchor="right" open={drawer} onClose={() => setDrawer(false)}>
        <BasketProuducts />
      </Drawer>
    </li>
  );
};

export default Basket;
