import React from "react";
import "./Orangebg.css";
function Orangebg() {
  return (
    <>
      <div className="orange-section">
        <div className="middle-text">
          <div className="text">
            <big>
              Use our{" "}
              <span>
                <a href="/api#pro">Professional collections</a>
              </span>{" "}
              to get extended weather data for any coordinates on the globe <br />
            </big>
            <span style={{color:'white',fontSize:'14px'}}>
              For professionals and specialists with middle and large sized
              project, we recommend our Professional collections. They include
              either an extended data sets, or various tools for receiving and
              displaying data, etc.
            </span>
          </div>
          <div className="grid-container">
          <div className="api-icons">
            <a href="">
              <div>
                <img
                  src="https://openweathermap.org/themes/openweathermap/assets/img/landing/icon-1.png"
                  alt=""
                />
              </div>
              <h3>
                Current <br /> Weather
              </h3>
              <span>(Current)</span>
            </a>
            <a href="">
              <div>
                <img
                  src="https://openweathermap.org/themes/openweathermap/assets/img/landing/icon-2.png"
                  alt=""
                />
              </div>
              <h3>
                Current <br /> Weather
              </h3>
              <span style={{fontSize:'14px'}}>(Current)</span>
            </a>
            <a href="">
              <div>
                <img
                  src="https://openweathermap.org/themes/openweathermap/assets/img/landing/icon-3.png"
                  alt=""
                />
              </div>
              <h3>
                Current <br /> Weather
              </h3>
              <span>(Current)</span>
            </a>
            <a href="">
              <div>
                <img
                  src="https://openweathermap.org/themes/openweathermap/assets/img/landing/icon-4.png"
                  alt=""
                />
              </div>
              <h3>
                Current <br /> Weather
              </h3>
              <span>(Current)</span>
            </a>
            <a href="">
              <div>
                <img
                  src="https://openweathermap.org/themes/openweathermap/assets/img/landing/icon-5.png"
                  alt=""
                />
              </div>
              <h3>
                Current <br /> Weather
              </h3>
              <span>(Current)</span>
            </a>
          </div>
          </div>
          <div className="small-text">
          <p><b>Called by:</b><br />
            geographic coordinates, zip/post code, city name, city ID, number of cities (only in current weather and forecast APIs)
         </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Orangebg;
