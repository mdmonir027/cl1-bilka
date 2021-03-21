import React from "react";
import DashboardTopBar from "../../Components/dashboard/dashboard/DashboardTopBar";
import DashboardBanner from "./../../Components/dashboard/dashboard/DashboardBanner";
import "./style/Dashboard.scss";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <DashboardBanner title="Dashboard" />
      <DashboardTopBar />
    </div>
  );
};

export default Dashboard;
