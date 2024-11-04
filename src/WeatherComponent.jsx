import React, { useEffect, useState } from 'react';
import './WeatherComponent.css';

function WeatherComponent() {
  const [weatherData, setWeatherData] = useState([]);
  const apiKey = 'YOUR_API_KEY';
  const apiUrl = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/New%2520York%2520City%252CUnited%2520States/last15days?elements=datetime%2Ctemp%2Ctempmax%2Ctempmin%2Cprecip%2Cwindspeed%2Cfeelslike%2Cpressure&include=fcst%2Cobs%2Chistfcst%2Cstats&key=${apiKey}&contentType=json`;

  useEffect(() => {
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => setWeatherData(data.days))
      .catch(error => console.error("Error fetching data: ", error));
  }, [apiUrl]);

  return (
    <div className="weather-container">
      <h2>Weather Data (Last 15 Days)</h2>
      {weatherData.length > 0 ? (
        weatherData.map((day, index) => (
          <div key={index} className="weather-day">
            <h3>{day.datetime}</h3>
            <p>Temp: {day.temp} °C</p>
            <p>High: {day.tempmax} °C, Low: {day.tempmin} °C</p>
            <p>Feels Like: {day.feelslike} °C</p>
            <p>Precipitation: {day.precip} mm</p>
            <p>Wind Speed: {day.windspeed} km/h</p>
            <p>Pressure: {day.pressure} hPa</p>
          </div>
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default WeatherComponent;

