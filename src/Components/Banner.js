import React, { useContext, useState } from "react";
import axios from "axios";
import WeatherContext from "../Contexts/WeatherContext";
import "./Banner.css";

function Banner() {
  const { dispatchUserEvent, weather, hourlyWeather } = useContext(WeatherContext);
  const [city, setCity] = useState("");
  const [countries, setCountries] = useState([]);

  const handleChange = (e) => {
    setCity(e.target.value);
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
      })
    );
  };

  const onBtnClick = () => {
    const currentWeatherApi = axios
      .get(
        `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=d4d04688a9d2f3d90f7b83e0b39ac6f4`
      )
      .then((res) => {
        setCountries(res.data);
      });
  };
  return (
    <>
      <img
        className="banner-img"
        src="https://openweathermap.org/themes/openweathermap/assets/img/autumn_banner.jpg"
        alt=""
        srcset=""
      />
      <div className="grey-containe">
        <div className="content-section">

        <div className="controls"></div>
          <div className="search-block">
            <div className="search">
              <div className="search-container">
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Search City"
                  onChange={handleChange}
                />
                {countries &&
                  countries.map((items, index) => {
                    console.log("Items",items);
                    return (
                      <ul key={index} className="dropdown-list-menu">
                        <li onClick={() => handleSuggestion(items)}>
                          <span className="small">
                            {items.name}, {items.country}
                          </span>
                          <span className="small">{weather && Math.trunc(weather.main.temp - 273.15)}°C</span>
                          <span className="sub">
                            {items.lat}, {items.lon}
                          </span>
                        </li>
                      </ul>
                    );
                  })}
              </div>

              <button id="black-round-btn" type="submit" onClick={onBtnClick}>
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Banner;
