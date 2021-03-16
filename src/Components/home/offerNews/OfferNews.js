import React from "react";
import { Link } from "react-router-dom";
import newsImage1 from "../../../pages/images/news.png";
const OfferNews = () => {
  return (
    <div className="home__offerNews">
      <div className="home__offerContent">
        <h3 className="offerContent__title">See this week's offer newspaper</h3>
        <p className="offerContent__subTitle">
          Read our offer newspaper and see the current offers from Bilka.
        </p>

        <Link className="offerContent__link" to="/offer">
          Have you not received the newspaper?
        </Link>
        <Link to="/news" className="offerContent__button">
          Read The offer newspaper here
        </Link>
      </div>
      <div className="home__offerImage">
        <div className="home__offerImageWrapper">
          <img src={newsImage1} alt="Offer" />
        </div>
      </div>
    </div>
  );
};

export default OfferNews;
