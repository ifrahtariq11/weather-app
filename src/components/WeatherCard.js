import React from 'react';
import { WiHumidity, WiStrongWind } from 'react-icons/wi';

const WeatherCard = ({ data }) => {
  const { name, main, wind, weather } = data;

  return (
    <div className="weather-card">
      <h2>{name}</h2>
      <div className="weather-info">
        <div>
          <p>
            Temperature: <span>{Math.round(main.temp)}°C</span>
          </p>
          <p>
            Humidity: <span>{main.humidity}%</span>
            <WiHumidity className="weather-icon" />
          </p>
          <p>
            Wind Speed: <span>{wind.speed} m/s</span>
            <WiStrongWind className="weather-icon" />
          </p>
        </div>
        <div className="weather-icon">
          <img
            src={`http://openweathermap.org/img/w/${weather[0].icon}.png`}
            alt={weather[0].description}
          />
          <p>{weather[0].description}</p>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
