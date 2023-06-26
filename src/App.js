import React, { useState } from 'react';
import SearchForm from './components/SearchForm';
import WeatherCard from './components/WeatherCard';
import Forecast from './components/Forecast';
import { getWeatherData, getForecastData } from './services/weatherAPI';
import './App.css';

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState(null);
  const [error, setError] = useState('');

  const handleSearch = async (location) => {
    try {
      // Fetch weather data
      const weather = await getWeatherData(location);
      setWeatherData(weather);

      // Fetch forecast data
      const forecast = await getForecastData(location);
      setForecastData(forecast);

      // Clear any previous error
      setError('');
    } catch (error) {
      // Display error message if API request fails
      setError(error.message);
      setWeatherData(null);
      setForecastData(null);
    }
  };

  return (
    <div className="App">
      <h1>Weather Application</h1>
      <SearchForm onSearch={handleSearch} />
      {error && <p className="error-message">{error}</p>}
      {weatherData && <WeatherCard data={weatherData} />}
      {forecastData && <Forecast data={forecastData} />}
    </div>
  );
}

export default App;
