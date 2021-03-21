import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./style/DashboardTopBar.scss";

const DashboardTopBar = () => {
  const location = useLocation();

  return (
    <div className="dashboardTopBar">
      <ul className="dashboardTopBar__list">
        <li
          className={`dashboardTopBar__item 
          ${location.pathname === "/admin/dashboard" ? "active" : "a"}
          `}
        >
          <Link to="/admin/dashboard" className="dashboardTopBar__link">
            Dashboard
          </Link>
        </li>
        <li
          className={`dashboardTopBar__item ${
            location.pathname === "/admin/ordered-items" ? "active" : "c"
          }`}
        >
          <Link to="/admin/ordered-items" className="dashboardTopBar__link">
            Ordered Item
          </Link>
        </li>
        <li className="dashboardTopBar__item">
          <span className="dashboardTopBar__link">Log Out</span>
        </li>
      </ul>
    </div>
  );
};

export default DashboardTopBar;
