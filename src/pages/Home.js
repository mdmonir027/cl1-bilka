import React from "react";
import Hero from "./../Components/hero/Hero";
import "./style/Home.scss";

import Products from "../Components/home/product/Products";
import OfferNews from "../Components/home/offerNews/OfferNews";
import Categories from "../Components/home/categories/Categories";
import HomeCards from "./../Components/home/cards/HomeCards";

const Home = () => {
  return (
    <div className="home">
      <Hero />
      <Categories />
      <OfferNews />
      <Products />
      <HomeCards />
    </div>
  );
};

export default Home;
