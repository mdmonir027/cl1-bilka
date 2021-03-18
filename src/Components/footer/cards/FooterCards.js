import React from "react";
import HomeCard from "./FooterCard";
import "./style/HomeCards.scss";

const FooterCards = () => {
  const cardData = [
    {
      title: "100% DANISH-OWNED PART OF SALLING GROUP",
      icon:
        "https://sg-cms.imgix.net/jcr:34cd3c56-441b-49e2-b37b-f8c2e5274ba3?h=62&fit=max&auto=format&q=60",
      body:
        "Our purpose is to make everyday life better - for our customers and in the community of which we are a part. We do this through more sustainable solutions, easier and better shopping experiences, job opportunities for everyone and not least donations to good projects via our owners Salling Fondene.",
    },
    {
      title: "WE ARE READY TO HELP YOU",
      icon:
        "https://sg-cms.imgix.net/jcr:bbadf968-1f3e-40d4-a9b0-ab49d0a9f36a?h=62&fit=max&auto=format&q=60",
      body:
        "Our friendly customer service would love to hear from you if there is the least we can help with. Find contact information here .",
    },
    {
      title: "UNLIMITED RIGHT OF RETURN",
      icon:
        "https://sg-cms.imgix.net/jcr:02dafbd3-2773-4f26-974c-c97480a9bbd8?h=62&fit=max&auto=format&q=60",
      body:
        "You can exchange your goods in intact and original packaging both online and in your Hypermarket indefinitely. Just remember your receipt.",
    },
  ];
  return (
    <div className="homeCards">
      {cardData.map((card) => (
        <HomeCard
          key={card.title}
          title={card.title}
          icon={card.icon}
          body={card.body}
        />
      ))}
    </div>
  );
};

export default FooterCards;
