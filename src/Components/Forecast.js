import React from "react";
import "./Forecast.css";

function Forecast() {
  return (
    <div className="forecast">
      <div className="forecast-img"></div>
      <div className="forecast-section">
        <div className="forecast-items">
          <span className="orange-text">Weather maps</span>
          <h2>
            <a href="" target="_blank">
              Forecast, Current and Historical
            </a>
          </h2>
          <p>
            Using only one <a href="/api/weather-map-2">API call</a>, you can
            get Forecast (for 10 days with 3-hour step), Historical, and Current
            weather maps.
          </p>
          <p>
            <a href="/api/weather-map-2">
              <b>15 map layers</b>
            </a>{" "}
            include the most useful data, such as precipitation, clouds,
            pressure, temperature, wind, and many more.
          </p>
          <p>
            <a href="/weathermap">
              <b>Interactive weather map</b>
            </a>{" "}
            allows you to watch for current temperature and weather conditions
            in your city or any other location on the interactive global map.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Forecast;
