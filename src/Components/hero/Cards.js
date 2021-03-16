import React from "react";
import { Link } from "react-router-dom";
import "./style/Card.scss";

const Cards = ({ image, url }) => {
  return (
    <div className="card">
      <Link to={url} className="card__link">
        <img src={image} alt="card" className="card__image" />
      </Link>
    </div>
  );
};

export default Cards;
