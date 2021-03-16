import React from "react";
import "./style/Category.scss";
import { Link } from "react-router-dom";
const Category = ({ image, name, url }) => {
  return (
    <Link to={url} className="category">
      <div className="category__image">
        <img src={image} alt={name} />
      </div>
      <div className="category__name">
        <h3>{name}</h3>
      </div>
    </Link>
  );
};

export default Category;
