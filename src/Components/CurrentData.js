import React from "react";

function CurrentData() {
  return (
    <div className="gray-section">
      <div className="grey-container">
        <div className="image-area">
          <span className="orange-text">Weather data</span>
          <h2>Current weather data</h2>
          <img
            src="https://openweathermap.org/themes/openweathermap/assets/img/landing/current.png"
            alt=""
            srcset=""
          />
        </div>
        <div className="text-area">
          <p>
            Access current weather data for any location on Earth including over
            200,000 cities! The data is frequently updated based on the global
            and local weather models, satellites, radars and a vast network of
            weather stations..{" "}
          </p>
          <div className="orange-side">
            <h3>how to obtain</h3>
            <p>
              <b>
                <a href="">APIs</a>
              </b>
              <br />
              (subscriptions with various limits on calls/min, data
              availability, and service)
            </p>
            <p>
              <b>
                <a href="">Prepared bulks</a>
              </b>
              <br />
              (cities, zip codes)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CurrentData;
