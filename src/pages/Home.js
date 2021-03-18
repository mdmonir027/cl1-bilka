import React from "react";
import Hero from "./../Components/hero/Hero";
import "./style/Home.scss";

import Products from "../Components/home/product/Products";
import OfferNews from "../Components/home/offerNews/OfferNews";
import Categories from "../Components/home/categories/Categories";

const Home = () => {
  return (
    <div className="home">
      <Hero />
      <Categories />
      <OfferNews />
      <Products />
    </div>
  );
};

export default Home;
