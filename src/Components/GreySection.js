import React from "react";
import "./GreySection.css";

function GreySection() {
  return (
    <>
      <div className="gray-section">
        <div className="grey-container">
          <div className="image-area">
            <span className="orange-text">Weather data</span>
            <h2>Forecasted weather data</h2>
            <img
              src="https://openweathermap.org/themes/openweathermap/assets/img/landing/forecasted_weather_data.png"
              alt=""
              srcset=""
            />
          </div>
          <div className="text-area">
            <p>
              Detailed forecasts available by city name, city ID, geographic
              coordinates or postal/ZIP code.{" "}
            </p>
            <div className="orange-side">
              <h3>How to obtain</h3>
              <p>
                <a href="">API</a>
                <br />
                <a href="">Bulks</a>
              </p>
              <p>
                A variety of subscriptions with various limits on calls/min,
                data availability, and service
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default GreySection;
