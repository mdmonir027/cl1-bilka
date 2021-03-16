import React, { useState, useEffect } from "react";
import allCategories from "./../../../fakeData/categories";
import "./style/MenuList.scss";
import MenuListItem from "./MenuListItem";

const MenuList = () => {
  const [categories, setCategories] = useState([]);

  // useEffect
  useEffect(() => setCategories(allCategories), []);

  return (
    <>
      <ul className="menuList">
        {categories.map((category) => (
          <MenuListItem name={category.name} path="/" />
        ))}
      </ul>
    </>
  );
};

export default MenuList;
