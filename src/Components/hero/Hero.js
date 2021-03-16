import React from "react";
import "./style/Hero.scss";
import SearchForm from "./SearchForm";
import Cards from "./Cards";
import img1 from "./img1.png";
import img2 from "./img2.png";
import img3 from "./img3.png";

const Hero = () => {
  return (
    <div className="home__heroWrapper">
      <div className="hero">
        <div className="hero__infos">
          <h2 className="hero__title">
            DENMARK'S LARGEST SELECTION AT THE BEST PRICES
          </h2>
          <SearchForm />
        </div>
        <div className="hero__cards">
          <Cards image={img1} url="/" />
          <Cards image={img2} url="/" />
          <Cards image={img3} url="/" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
