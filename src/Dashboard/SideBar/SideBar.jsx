import React from "react";
import "./SideBar.css";

const SideBar = () => {
  return (
    <div className="sidebar">
      <section className="sidebar-cta">
        <span class="material-icons">add_box</span>
        <p class="material-icons ">more_horiz</p>
        <div className="sidebar-cta-switch">
          &#8451;
          <label class="switch">
            <input type="checkbox" />
            <span class="slider round"></span>
          </label>
          &#8457;
        </div>
      </section>
      <section className="location">
        <div className="location-head">
          <span class="material-icons">near_me</span>
          <p>New York, USA</p>
        </div>

        <div>
          <p>today, 28 sept</p>
        </div>
      </section>
      <section className="weather">27 &#xb0;</section>
      <div className="time">
        <span class="material-icons">wb_sunny</span> Sunny
      </div>
    </div>
  );
};

export default SideBar;
