import "./App.css";
import React, { useState } from 'react';
import Home from "./Components/Pages/Home";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Navbar from "./Components/Navbar";
import WeatherContext from "./Contexts/WeatherContext";

function App() {
  const [weather , setWeather] = useState();
  const [hourlyWeather , setHourlyWeather] = useState();
  const dispatchUserEvent = (payLoad) => {
    
    setWeather(payLoad.data)
    setHourlyWeather(payLoad.hourlyForecast)
    console.log("Ahmed" , weather);
  };
  return (
    <>
      <Router>
        <WeatherContext.Provider value={{hourlyWeather,weather,dispatchUserEvent}}>
          <Navbar />
          <Routes>
            <Route path="/" exact element={<Home />} />
          </Routes>
        </WeatherContext.Provider>
      </Router>
    </>
  );
}

export default App;
