import React, { useState } from "react";
import { moneySeparator } from "./../../utils/mathUtils";
import RemoveIcon from "@material-ui/icons/Remove";
import AddIcon from "@material-ui/icons/Add";
import { subString } from "./../../utils/stringUtils";
import "./style/ProductInfos.scss";
import { useDataLayer } from "./../../store/dataLayer";
import { ADD_TO_CART } from "./../../store/actions";

const ProductInfos = ({ title, subTitle, descriptions, price, id }) => {
  const [quantity, setQuantity] = useState(1);
  const [_, dispatch] = useDataLayer();

  const increase = (e) => {
    const value = quantity + 1;
    if (isValid(value)) {
      setQuantity(value);
    }
  };
  const decrease = (e) => {
    const value = quantity - 1;
    if (isValid(value)) {
      setQuantity(value);
    }
  };

  const isValid = (num) => num >= 1 && num <= 99;

  const addToCart = () => {
    dispatch({
      type: ADD_TO_CART,
      payload: { id, quantity },
    });
  };

  return (
    <div className="productInfos">
      <h2 className="productInfos__title">{subString(title)}</h2>
      <h4 className="productInfos__subTitle">{subString(subTitle, 35)}</h4>
      <p className="productInfos__descriptions">
        {subString(descriptions, 110)}
      </p>
      <div className="productInfos__priceQuantity">
        <div className="productInfos__quantityBox">
          <p className="productInfos__quantity">Quantity</p>
          <div className="productInfos__inputBox">
            <RemoveIcon className="productInfos__icon" onClick={decrease} />
            <input
              type="number"
              min={1}
              max={99}
              className="productInfos__input"
              value={quantity}
              onChange={(e) => setQuantity(parseInt(e.target.value))}
            />
            <AddIcon className="productInfos__icon" onClick={increase} />-
          </div>
        </div>
        <p className="productInfos__price">{`$${moneySeparator(price)}`}</p>
      </div>

      <button onClick={addToCart} className="productInfos__button">
        Add To Cart
      </button>
    </div>
  );
};

export default ProductInfos;
