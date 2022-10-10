import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import "./Navbar.css";
import MainSection from "./MainSection";
import WeatherContext from "../Contexts/WeatherContext";
import { Link } from "react-router-dom";

function Navbar(props) {
  const { dispatchUserEvent } = useContext(WeatherContext);
  const [click, setClick] = useState(false);
  const [countries, setCountries] = useState([]);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  useEffect(() => {
    //  getCountryData();
  }, []);
  const handleChange = (event) => {
    const currentWeatherApi = axios
      .get(
        `http://api.openweathermap.org/geo/1.0/direct?q=${event.target.value}&limit=5&appid=d4d04688a9d2f3d90f7b83e0b39ac6f4`
      )
      .then((res) => {
        setCountries(res.data);

        // setSuggestions(res.data);
      });
  };
  const handleSuggestion = (e) => {
    const currentWeatherApi = `https://api.openweathermap.org/data/2.5/weather?lat=${e.lat}&lon=${e.lon}&appid=d4d04688a9d2f3d90f7b83e0b39ac6f4`;
    const hourlyForecastApi = `https://api.openweathermap.org/data/2.5/forecast?lat=${e.lat}&lon=${e.lon}&appid=d4d04688a9d2f3d90f7b83e0b39ac6f4`;

    const getCurrentWeatherData = axios.get(currentWeatherApi);
    const gethourlyForecastData = axios.get(hourlyForecastApi);
    axios.all([getCurrentWeatherData, gethourlyForecastData]).then(
      axios.spread((...allData) => {
        const allCurrentWeather = allData[0];
        const allHourlyForecastWeather = allData[1];
        setCountries([]);
        const curentWeather = allCurrentWeather.data;
        const hourlyForecast = allHourlyForecastWeather.data;

        dispatchUserEvent({
          hourlyForecast: hourlyForecast,
          data: curentWeather,
        });

        console.log("gethourlyForecastData", allHourlyForecastWeather.data);
      })
    );
  };
  return (
    <>
      <nav className="navbar">
        <ul>
          <li className="navbar-logo">
            <Link to="/">
              <img
                src="https://openweathermap.org/themes/openweathermap/assets/img/logo_white_cropped.png"
                alt=""
                srcset=""
              />
            </Link>
          </li>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <form action="">
              <input
                type="text"
                name=""
                onChange={handleChange}
                id="input-text"
                placeholder="Weather In Your City"
              />
              {countries &&
                countries.map((items, index) => {
                  return (
                    <div key={index}>
                      <ul className="suggestions">
                        <li onClick={() => handleSuggestion(items)}>
                          {items.name}
                        </li>
                      </ul>
                    </div>
                  );
                })}
            </form>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Guide
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/services"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                API
              </Link>
            </li>

            <li className="nav-item">
              <Link
                to="/products"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Dashboard
              </Link>
            </li>

            <li className="nav-item">
              <Link
                to="/signUp"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Marketplace
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/signUp"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Pricing
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/signUp"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Maps
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/signUp"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Our Initiative
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/signUp"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Partners
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/signUp"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Blog
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/signUp"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                For Business
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/signUp"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Sign in
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/signUp"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Support
              </Link>
            </li>
          </ul>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
