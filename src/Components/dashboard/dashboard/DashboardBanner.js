import React from "react";
import "./style/DashboarBanner.scss";
const DashboardBanner = ({ title }) => {
  const bannerUrl =
    "https://images.pexels.com/photos/866351/pexels-photo-866351.jpeg";
  return (
    <div className="dashboardBanner">
      <img src={bannerUrl} alt="dashboar banner" />
      <h2 className="dashboardBanner__title">{title}</h2>
    </div>
  );
};

export default DashboardBanner;
