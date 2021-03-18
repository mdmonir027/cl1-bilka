import React from "react";
import "./style/HomeCard.scss";

const FooterCard = ({ icon, title, body }) => {
  return (
    <div className="homeCard">
      <div className="homeCard__icon">
        <img src={icon} alt={title} className="homeCard__image" />
      </div>
      <div className="homeCard__title">{title}</div>
      <div className="homeCard__body">{body}</div>
    </div>
  );
};

export default FooterCard;
