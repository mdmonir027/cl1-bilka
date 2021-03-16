import React from "react";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import { subString } from "../../../utils/stringUtils";
import { moneySeparator } from "../../../utils/mathUtils";

import "./style/Product.scss";
import { useDataLayer } from "./../../../store/dataLayer";
import { ADD_TO_CART } from "../../../store/actions";

const Product = ({ title, image, id, subTitle, price }) => {
  const [_, dispatch] = useDataLayer();
  const addCart = () => {
    dispatch({
      type: ADD_TO_CART,
      payload: { id },
    });
  };
  return (
    <div className="home__product">
      <div className="product__image">
        <img src={image} alt={title} />
      </div>
      <div className="product__info">
        <h2 className="product__title">{subString(title, 30)}</h2>
        <h4 className="product__subTitle">{subString(subTitle, 25)}</h4>
      </div>
      <div className="product__footer">
        <AddShoppingCartIcon
          className="product__addTotCart"
          onClick={addCart}
        />
        <p className="product__price">{`$${moneySeparator(price)}`}</p>
      </div>
    </div>
  );
};

export default Product;
