import React, { useState } from "react";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { useDataLayer } from "../../../store/dataLayer";
import Drawer from "@material-ui/core/Drawer";
import BasketProuducts from "./BasketProuducts";
import "./style/Basket.scss";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

const Basket = () => {
  const [{ cart }] = useDataLayer();
  const [drawer, setDrawer] = useState(false);

  const drawerClose = () => setDrawer(false);

  return (
    <>
      <li className="basket__icon navList__item">
        <div
          to="basket"
          className="navList__link basket__link"
          onClick={() => setDrawer(true)}
        >
          <ShoppingCartIcon className="basket__iconIcon" />
          Basket <span>{cart.length}</span>
        </div>
      </li>
      <li className="basket__mobileIcon" onClick={() => setDrawer(true)}>
        <ShoppingCartIcon className="basket__mobileIconIcon" />
      </li>

      <Drawer
        anchor="right"
        open={drawer}
        onClose={() => setDrawer(false)}
        className="basket__drawer"
      >
        <ArrowBackIcon
          onClick={() => setDrawer(false)}
          className="basket__backButton"
        />
        <BasketProuducts drawerClose={drawerClose} />
      </Drawer>
    </>
  );
};

export default Basket;
