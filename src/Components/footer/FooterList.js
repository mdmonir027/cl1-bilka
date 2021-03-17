import React from "react";
import FooterListItem from "./FooterListItem";
import "./style/FooterList.scss";

const FooterList = ({ list }) => {
  return (
    <div className="footerList">
      <h3 className="footerList__title">{list.title}</h3>
      <ul className="footerList__list">
        {list.items.map((item) => (
          <FooterListItem
            flexBox={list.flexBox}
            path={item.path}
            value={item.value}
            key={item.id}
          />
        ))}
      </ul>
    </div>
  );
};

export default FooterList;

// 01407107329
