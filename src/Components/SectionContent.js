import React from "react";
import "./SectionContent.css";

function SectionContent() {
  return (
    <>
      <div className="below-orange-section">
        <div className="sect-container">
          <div className="text-container">
            <p className="first-text">
              For each point on the globe, we provide historical, current and
              forecasted weather data via light-speed APIs.
            </p>

            <p className="second-text">
              <b>
                <a href="">Minute-by-minute forecast</a>
              </b>
            </p>
            <p className="third-text">
              <b>Other forecasts:</b>
              <br />
              <a href="">hourly (4-day)</a>, <a href="">daily (16-day)</a>,{" "}
              <a href="">30-day climate forecast</a>
            </p>
            <p className="fourth-text">
              <b>
                <a href="">Historical data</a>
              </b>
              <br />
              with 40-year archive for any coordinates
            </p>
          </div>
          <div className="image-container">
            <span className="orange-text">Weather data</span>
            <h2>
              Weather for <span id="orange-text">any</span> geographic
              coordinates on the globe
            </h2>
            <img src="https://openweathermap.org/themes/openweathermap/assets/img/landing/historical_data_any_location.png" alt="" srcset="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default SectionContent;
