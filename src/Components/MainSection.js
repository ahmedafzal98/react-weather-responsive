import React, { useContext, useState } from "react";
import "./MainSection.css";
import Map from "./Map";
import Graph from "./Graph";
import WeatherContext from "../Contexts/WeatherContext";

function MainSection() {
  const { dispatchUserEvent, weather, hourlyWeather } =
    useContext(WeatherContext);

  const today = Date.now();

  console.log();
  return (
    <>
      <div className="section-content">
        <div className="main-container">
          <div className="grid-section">
            <div className="city-date">
              <span className="orange-text">
                {new Date().toLocaleString() + ""}
              </span>
              <h2>
                {weather && weather.name},{weather && weather.sys.country}
              </h2>
            </div>
            <div className="current-temp">
              <i className="fas fa-cloud"></i>
              <span className="heading">
                {weather && Math.trunc(weather.main.temp - 273.15)}°C
              </span>
            </div>
            <div className="bold">
              <b>
                Feels like
                {weather && Math.trunc(weather.main.feels_like - 273.15)}°C.
                {weather &&
                  weather.weather.map((desc) => <b>{desc.description}</b>)}
              </b>
            </div>

            <div className="items-line">
              <div className="v1"></div>
              <ul className="weather-item">
                <li>Humidity: {weather && weather.main.humidity}%</li>
                <li>Visibility: {weather && weather.visibility / 1000}km</li>
              </ul>
            </div>
          </div>
          <div className="map-section">
            <Map />
          </div>
        </div>
        <div className="grid-section2">
          <div className="graph-section">
            <Graph />
          </div>
          <div className="day-forecast">
            <h3>8-day forecast</h3>
            {hourlyWeather &&
              hourlyWeather.list.map((test, index) => {
                return (
                  <ul className="day-list">
                    <li key={index}>
                      <span>{test.dt_txt}</span>
                      <div className="day-list-values">
                        <i className="fas fa-cloud"></i>
                        <span>
                          {" "}
                          {Math.trunc(test.main.temp_max - 273.15)}°C /{" "}
                          {Math.trunc(test.main.temp_min - 273.15)}°C
                        </span>
                        {weather &&
                          test.weather.map((desc) => (
                            <span className="sub">{desc.description}</span>
                          ))}
                        <i className="fas fa-caret-down"></i>
                      </div>
                    </li>
                  </ul>
                );
              })}
          </div>
        </div>
      </div>
    </>
  );
}

export default MainSection;
