import React from "react";
import "./Apicall.css";
function ApiCall() {
  return (
    <>
      <div className="section">
        <div className="section-container">
          <div className="api-table">
            <span className="orange-text">APIs</span>
            <h2>
              <a href="">One Call API 3.0</a>
            </h2>
            <p>
              Subscribe to the new subscription plan{" "}
              <a href="/price">
                <b>"One Call by Call"</b>
              </a>{" "}
              and get all weather data for any coordinates{" "}
              <b>
                <a href="/api/one-call-3">with a single API call</a>.
              </b>
              <br />
              1,000 API calls per day for free!{" "}
              <a href="/price">
                <span class="orange-text">Pay as you call</span>
              </a>
              .{" "}
            </p>
            <table className="table-one-call">
              <tbody>
                <tr>
                  <th>Included Data</th>
                  <th>Time</th>
                </tr>
                <tr>
                  <td>
                    <b> Current</b> Weather
                  </td>
                  <td>Now</td>
                </tr>
                <tr>
                  <td>
                    {" "}
                    <b> Minute</b> forecast
                  </td>
                  <td>Next hour</td>
                </tr>
                <tr>
                  <td>
                    <b> Hourly</b> forecast
                  </td>
                  <td>Next 48 hours</td>
                </tr>
                <tr>
                  <td>
                    <b> Daily</b> forecast
                  </td>
                  <td>Next 8 days</td>
                </tr>
                <tr>
                  <td>
                    Hourly <b> historical</b> data
                  </td>
                  <td>40+ years back</td>
                </tr>
                <tr>
                  <td>National weather alerts</td>
                  <td>All available data</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="desktop-only">
            <img src="https://openweathermap.org/themes/openweathermap/assets/img/landing/one_call_api.png" alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default ApiCall;
