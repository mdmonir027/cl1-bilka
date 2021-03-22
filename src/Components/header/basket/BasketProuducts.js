import React from "react";
import BasketProduct from "./BasketProduct";
import "./style/BasketProducts.scss";
import { useDataLayer } from "./../../../store/dataLayer";
import { totalPrice } from "./../../../utils/mathUtils";
import { useHistory } from "react-router-dom";

const BasketProuducts = ({ drawerClose }) => {
  const [{ cart }] = useDataLayer();
  const history = useHistory();

  const checkoutHandle = () => {
    history.push("/checkout");
    drawerClose();
  };

  return (
    <>
      <div className="basket">
        <h2 className="basket__title">{`${cart.length} Products`}</h2>
        <h2 className="basket__totalPrice">{`$${totalPrice(cart)}`}</h2>
      </div>
      <div className="basketProducts">
        {cart.map((product) => (
          <BasketProduct
            key={product.id}
            image={product.image}
            price={product.price}
            totalPrice={product.totalPrice}
            title={product.title}
            descriptions={product.descriptions}
            id={product.id}
            quantity={product.quantity}
          />
        ))}
      </div>
      {cart.length > 0 && (
        <button onClick={checkoutHandle} className="basket__checkoutBtn">
          Checkout Now
        </button>
      )}
    </>
  );
};

export default BasketProuducts;
