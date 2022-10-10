import React, { useContext } from "react";
import GoogleMapReact from "google-map-react";
import WeatherContext from "../Contexts/WeatherContext";


function Map() {
  let latitude;
  let longitude;
  const { dispatchUserEvent , weather } = useContext(WeatherContext);

  console.log(weather);
  if (weather) {
    weather: {}
  }
  // if (weather) {
  //   latitude = weather.coord.lat
  //   longitude = weather.coord.lon
  //   console.log(weather.coord.lat);
  // }else{
  //     console.log('Object is empty');
  // }
  // const defaultProps = {
  //   center: {
  //     lat: 67.01502627,
  //     lng: 77.01502627,
  //   },
  //   zoom: 11,
  // };
  return (
    <div style={{ height: "80%", width: "100%"}}>
      {weather && 
      <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={{ lat: weather.coord.lat, lng: weather.coord.lon }}
        defaultZoom={12}
        
      >
        {/* <AnyReactComponent lat={59.955413} lng={30.337844} text="My Marker" /> */}
      </GoogleMapReact>
}
    </div>
  );
}

export default Map;
