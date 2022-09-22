import React from "react";
import "./HistoricalData.css";

function HistoricalData() {
  return (
    <>
      <div className="historical-data">
        <div className="historical-container">
          <div className="historical-text">
            <p>
              Our new technology, <b>Time Machine</b>, has allowed us to enhance
              data in the{" "}
              <a href="/api#history">Historical Weather Collection</a>:
              historical weather data is now available for any coordinates and
              the depth of historical data has been extended to 40 years.
            </p>
            <h3>How to obtain</h3>
            <p>
              <b>
                <a href="">Marketplace</a> of prepared data sets
              </b>
              <br />
              (cities, zip codes, grids)
            </p>
            <p>
              <b>
                <a href="">On-the-fly bulks</a>
              </b>
              <br />
              for customized lists of coordinates
            </p>
            <p>
              <b>
                <a href="/api#history">APIs</a>
              </b>{" "}
              (city-based, up to 1 year back; subscriptions with various limits
              on calls/min, data availability, and service){" "}
            </p>
          </div>
          <div className="historical-image">
            <span className="orange-text">Weather data</span>
            <h2>Historical weather data</h2>
            <img src="https://openweathermap.org/themes/openweathermap/assets/img/landing/historical_data.png" alt="" srcset="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default HistoricalData;
