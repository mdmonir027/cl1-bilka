import React from "react";
import { Link } from "react-router-dom";

const FooterListItem = ({ path, value, flexBox }) => {
  return (
    <li
      className={`footerList__item ${flexBox ? "footerList__itemFlexBox" : ""}`}
    >
      {flexBox ? (
        <>
          <span className="footerList__itemDay">{value}</span>
          <span className="footerList__itemTime">
            {value.toLowerCase() === "friday" ? "Closed" : "7am to 11pm"}
          </span>
        </>
      ) : (
        <Link to={path} className="footerList__link">
          {value}
        </Link>
      )}
    </li>
  );
};

export default FooterListItem;
