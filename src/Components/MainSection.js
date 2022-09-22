import React from "react";
import "./MainSection.css";
import Map from "./Map";
function MainSection() {
  return (
    <>
      <div className="section-content">
        <div className="main-container">
          <div className="grid-section">
            <div className="city-date">
              <span className="orange-text">Sep 19, 10:27am</span>
              <h2>London, GB</h2>
            </div>
            <div className="current-temp">
              <i className="fas fa-cloud"></i>
              <span className="heading">57°F</span>
            </div>
            <div className="bold">
              <b> Feels like 56°F. Broken clouds. Light breeze</b>
            </div>

            <div className="items-line">
              <div className="v1"></div>
              <ul className="weather-item">
                <li>4.6mph NNW</li>
                <li>4.6mph NNW</li>
                <li>4.6mph NNW</li>
                <li>4.6mph NNW</li>
                <li>4.6mph NNW</li>
                <li>4.6mph NNW</li>
              </ul>
            </div>
          </div>
          <div className="map-section">
            <Map />
          </div>
        </div>
        <div className="grid-section2">
          <div className="graph-section"></div>
          <div className="day-forecast">
            <h3>8-day forecast</h3>
            <ul className="day-list">
              <li>
                <span>Mon, Sep 19</span>
                <div className="day-list-values">
                  <i className="fas fa-cloud"></i>
                  <span>64 / 53°F</span>
                  <span className="sub">Broken Clouds</span>
                  <i className="fas fa-caret-down"></i>
                </div>
   
              </li>
              <li>
                <span>Mon, Sep 19</span>
                <div className="day-list-values">
                  <i className="fas fa-cloud"></i>
                  <span>64 / 53°F</span>
                  <span className="sub">Broken Clouds</span>
                  <i className="fas fa-caret-down"></i>
                </div>
   
              </li>
              <li>
                <span>Mon, Sep 19</span>
                <div className="day-list-values">
                  <i className="fas fa-cloud"></i>
                  <span>64 / 53°F</span>
                  <span className="sub">Broken Clouds</span>
                  <i className="fas fa-caret-down"></i>
                </div>
   
              </li>
              <li>
                <span>Mon, Sep 19</span>
                <div className="day-list-values">
                  <i className="fas fa-cloud"></i>
                  <span>64 / 53°F</span>
                  <span className="sub">Broken Clouds</span>
                  <i className="fas fa-caret-down"></i>
                </div>
   
              </li>
              <li>
                <span>Mon, Sep 19</span>
                <div className="day-list-values">
                  <i className="fas fa-cloud"></i>
                  <span>64 / 53°F</span>
                  <span className="sub">Broken Clouds</span>
                  <i className="fas fa-caret-down"></i>
                </div>
   
              </li>
              <li>
                <span>Mon, Sep 19</span>
                <div className="day-list-values">
                  <i className="fas fa-cloud"></i>
                  <span>64 / 53°F</span>
                  <span className="sub">Broken Clouds</span>
                  <i className="fas fa-caret-down"></i>
                </div>
   
              </li>
              <li>
                <span>Mon, Sep 19</span>
                <div className="day-list-values">
                  <i className="fas fa-cloud"></i>
                  <span>64 / 53°F</span>
                  <span className="sub">Broken Clouds</span>
                  <i className="fas fa-caret-down"></i>
                </div>
   
              </li>
              <li>
                <span>Mon, Sep 19</span>
                <div className="day-list-values">
                  <i className="fas fa-cloud"></i>
                  <span>64 / 53°F</span>
                  <span className="sub">Broken Clouds</span>
                  <i className="fas fa-caret-down"></i>
                </div>
   
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default MainSection;
