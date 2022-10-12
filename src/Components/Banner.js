import React from "react";
import "./Banner.css";

function Banner() {
  return (
    <>
      <img
      className="banner-img"
        src="https://openweathermap.org/themes/openweathermap/assets/img/autumn_banner.jpg"
        alt=""
        srcset=""
      />
      <div className="gray-container">
        <div className="container">
          <div className="serach-block">
            <div className="serach-container">
              <input type="text" name="" id="" placeholder="Search City" />
            </div>
            <button type="submit" className="button-round">
              Submit
            </button>
          </div>
          <div className="controls">
            <i className="fas fa-location-arrow"></i>
            <span className="differnt-weather">Different Weather?</span>
            <div className="switch-container">
              <span className="metric"> Metric: °C, m/s</span>
              <span className="imperial">Imperial: °F, mph</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Banner;
