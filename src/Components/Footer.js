import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <>
      <div className="footer-website">
        <div className="inner-footer-container">
          <div className="horizontal-section">
            <div className="footer-section">
              <p className="section-heading">Product Collections</p>
              <div className="section-content">
                <ul>
                  <li>
                    <a href="/api#current">Current and Forecast APIs</a>
                  </li>
                  <li>
                    <a href="/api#history">Historical Weather Data</a>
                  </li>
                  <li>
                    <a href="/api#maps">Weather Maps</a>
                  </li>
                  <li>
                    <a href="/weather-dashboard">Weather Dashboard</a>
                  </li>
                  <li>
                    <a href="/widgets-constructor">Widgets</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="footer-section">
              <p className="section-heading">Subscription</p>
              <div class="section-content">
                <ul>
                  <li>
                    <a href="/appid">How to start</a>
                  </li>
                  <li>
                    <a href="/price">Pricing</a>
                  </li>
                  <li>
                    <a href="https://home.openweathermap.org/users/sign_up">
                      Subscribe for free
                    </a>
                  </li>
                  <li>
                    <a href="/faq">FAQ</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="footer-section">
              <p className="section-heading">Company</p>
              <div class="section-content">
                <p>
                  OpenWeather is a team of IT experts and data scientists that
                  has been practising deep weather data science. For each point
                  on the globe, OpenWeather provides historical, current and
                  forecasted weather data via light-speed APIs. Headquarters in
                  London, UK.
                </p>
              </div>
            </div>
          </div>
          <div className="horizontal-section">
            <div className="footer-section">
              <p className="section-heading">Technologies</p>
              <div className="section-content">
                <ul>
                  <li>
                    <a href="/api#current">Our technology</a>
                  </li>
                  <li>
                    <a href="/api#history">
                      Accuracy and quality of weather data
                    </a>
                  </li>
                  <li>
                    <a href="/api#maps">Connect your weather station</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="footer-section">
              <p className="section-heading">Terms & Conditions</p>
              <div class="section-content">
                <ul>
                  <li>
                    <a href="/appid">Terms and conditions of sale</a>
                  </li>
                  <li>
                    <a href="/price">Privacy Policy</a>
                  </li>
                  <li>
                    <a href="https://home.openweathermap.org/users/sign_up">
                      Website terms and conditions
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="footer-section">
              <p className="section-heading"></p>
              <div class="section-content">
                <ul>
                  <li>
                    <a href="/appid">About us</a>
                  </li>
                  <li>
                    <a href="/price">Blog</a>
                  </li>
                  <li>
                    <a href="https://home.openweathermap.org/users/sign_up">
                      Open Weather For Business
                    </a>
                  </li>
                  <li>
                    <a href="/faq">Ask a question</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="horizontal-section-my">
            <div>
              <span>Supplier of Achilles UVDB community</span>
              <br />
              <span>© 2012 — 2022 OpenWeather ® All rights reserved</span>
              <br />
              <br />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
