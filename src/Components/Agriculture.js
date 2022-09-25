import React from "react";
import "./Agriculture.css";

function Agriculture() {
  return (
    <>
      <div className="agriculture">
        <div className="agricu-section">
          <div className="agric-items">
            <span className="orange-text">AI and satellite imagery</span>
            <h2 className="heading">
              <a href="" target="_blank">
                Agriculture analytics
              </a>
            </h2>
            <p>
              Based on large amount of processing satellite and climate data, we
              provide <b>analytical reports</b> and <b>detailed datasets</b> for
              crop monitoring:
            </p>
            <ul className="list">
              <li>Crop map (soy, corn, wheat, etc.)</li>
              <li>Recognised field boundaries</li>
              <li>Vegetation indicies statistics by each recognised field</li>
              <li>Climate data for regions and particular field</li>
              <li>Soil and weather data</li>
            </ul>

            <a href="" target="_blank" className="round-btn">
              Learn more
            </a>
          </div>
        </div>
        <div className="agro-section">
          <div className="agro-items">
          <span className="orange-text">AI and satellite imagery</span>
          <h2 className="headings"  style={{ color: "red" }}>
            <a  href="" target="_blank">
            Agro Dashboard
            </a>
          </h2>
          <p>
            Dashboard is a visual service where you can easily work with
            satellite imagery and weather data for your fields. It is the visual
            demonstration of the data we provide through our{" "}
            <a href="" target="_blank">
              <b>Agro API</b>
            </a>
            :
          </p>
          <ul className="list">
            <li>New satellite imagery every 2-4 days</li>
            <li>Historical satellite data archive</li>
            <li>Vegetation indices and Historical NDVI chart</li>
            <li>Current, Forecast and Historical weather data</li>
          </ul>

          <a href="" target="_blank" className="round-btn-white">
            Learn more
          </a>
          </div>
        
        </div>
      </div>
    </>
  );
}

export default Agriculture;
