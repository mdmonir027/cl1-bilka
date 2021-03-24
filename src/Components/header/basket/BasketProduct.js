import React from "react";
import "./style/BasketProduct.scss";
import { subString } from "../../../utils/stringUtils";
import { moneySeparator } from "./../../../utils/mathUtils";
import RemoveIcon from "@material-ui/icons/Remove";
import AddIcon from "@material-ui/icons/Add";
import DeleteIcon from "@material-ui/icons/Delete";
import { useDataLayer } from "./../../../store/dataLayer";
import {
  REMOVE_FROM_CART,
  UPDATE_CART_PRODUCT_QUANTITY,
} from "../../../store/actions";

const BasketProduct = ({
  image,
  title,
  price,
  descriptions,
  id,
  quantity,
  totalPrice,
}) => {
  const dispatch = useDataLayer()[1];

  const removeFromCart = () => {
    dispatch({
      type: REMOVE_FROM_CART,
      payload: { id },
    });
  };

  const increase = (e) => {
    const value = quantity + 1;
    if (isValid(value)) {
      dispatch({
        type: UPDATE_CART_PRODUCT_QUANTITY,
        payload: { id, quantity: value },
      });
    }
  };
  const decrease = (e) => {
    const value = quantity - 1;
    if (isValid(value)) {
      dispatch({
        type: UPDATE_CART_PRODUCT_QUANTITY,
        payload: { id, quantity: value },
      });
    }
  };

  const isValid = (num) => num >= 1 && num <= 99;

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
          <p className="basketProduct__price">{`$${moneySeparator(
            totalPrice
          )}`}</p>
          <div className="basketProduct__form">
            <RemoveIcon
              className="basketProduct__formIcon"
              onClick={decrease}
            />
            <input
              type="number"
              className="basketProduct__input"
              value={quantity}
              min={1}
              max={99}
              onChange={() => console.log("d")}
            />
            <AddIcon className="basketProduct__formIcon" onClick={increase} />
          </div>
          <DeleteIcon
            className="basketProduct__remove"
            onClick={removeFromCart}
          />
        </div>
      </div>
    </div>
  );
};

export default BasketProduct;
