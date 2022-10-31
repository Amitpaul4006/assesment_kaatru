import React from "react";
import Content from "./Content/Content";
import "./Dashboard.css";
import SideBar from "./SideBar/SideBar";
const Dashboard = () => {
  return (
    <div className="dashboard">
      <SideBar />
      <Content />
    </div>
  );
};

export default Dashboard;
