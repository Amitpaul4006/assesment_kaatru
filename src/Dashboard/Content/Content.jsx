import React from "react";
import "./Content.css";

const Content = () => {
  const OTHER_DETAILS = [1, 2, 3, 4, 5, 6];
  return (
    <div className="content">
      <section className="content-heading">
        <div>
          <p>Welcome back Isabella!</p>
          <span>Check out today's weatherinformation</span>
        </div>
        <div className="profile">
          <p class="material-icons more-icon md-36 ">more_horiz</p>
          <div className="avatar"></div>
        </div>
      </section>
      <section className="weather-graph"></section>
      <h5>More details of today's weather</h5>
      <div className="more-details">
        {OTHER_DETAILS.map((item) => (
          <div className="card">{item}</div>
        ))}
      </div>
    </div>
  );
};

export default Content;
