import React from "react";
import { Link } from "react-router-dom";
import "./style/DashboardTopBar.scss";

const DashboardTopBar = () => {
  return (
    <div className="dashboardTopBar">
      <ul className="dashboardTopBar__list">
        <li className="dashboardTopBar__item active">
          <Link to="/admin/dashboard" className="dashboardTopBar__link">
            Dashboard
          </Link>
        </li>
        <li className="dashboardTopBar__item">
          <Link to="/admin/dashboard" className="dashboardTopBar__link">
            Ordered Item
          </Link>
        </li>
        <li className="dashboardTopBar__item">
          <Link to="/admin/dashboard" className="dashboardTopBar__link">
            Log Out
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default DashboardTopBar;
