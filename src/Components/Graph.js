import React, { useContext, useState } from "react";
import { Line } from "react-chartjs-2";
import WeatherContext from "../Contexts/WeatherContext";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  LineElement,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
} from "chart.js";
ChartJS.register(
  Title,
  Tooltip,
  LineElement,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement
);
function Graph() {
  const { dispatchUserEvent, weather, hourlyWeather } =
    useContext(WeatherContext);

  console.log("Graph", hourlyWeather);

  const weatherData = {
    labels:
      hourlyWeather &&
      hourlyWeather.list.map((test, index) => {
        test.weather.map((desc) => desc.description);
      }),
    datasets: [
      {
        label: "My First Dataset",
        data:
          hourlyWeather &&
          hourlyWeather.list.map((test, index) => {
    
          }),
        fill: false,
        borderColor: "rgb(75, 192, 192)",
        tension: 0.1,
      },
    ],
  };

  return <>{<Line data={weatherData}>Hello</Line>}</>;
}

export default Graph;
