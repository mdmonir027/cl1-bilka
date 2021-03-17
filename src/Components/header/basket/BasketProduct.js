import React from "react";
import "./style/BasketProduct.scss";
import { subString } from "../../../utils/stringUtils";
import { moneySeparator } from "./../../../utils/mathUtils";
import RemoveIcon from "@material-ui/icons/Remove";
import { useDataLayer } from "./../../../store/dataLayer";
import { REMOVE_FROM_CART } from "../../../store/actions";

const BasketProduct = ({ image, title, price, descriptions, id }) => {
  const [_, dispatch] = useDataLayer();

  const removeFromCart = () => {
    dispatch({
      type: REMOVE_FROM_CART,
      payload: { id },
    });
  };

  return (
    <div className="basketProduct">
      <div className="basketProduct__image">
        <img src={image} alt={title} />
      </div>
      <div className="basketProduct__infos">
        <h2 className="basketProduct__title">{subString(title, 30)}</h2>
        <p className="basketProduct__shortDesc">
          {subString(descriptions, 70)}
        </p>
        <div className="basketProduct__footer">
          <p className="basketProduct__price">{`$${moneySeparator(price)}`}</p>
          <RemoveIcon
            className="basketProduct__remove"
            onClick={removeFromCart}
          />
        </div>
      </div>
    </div>
  );
};

export default BasketProduct;
