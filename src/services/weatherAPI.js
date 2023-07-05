const API_KEY = '435985386062b8b2cab93af3be226888';

export const getWeatherData = async (location) => {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${API_KEY}`
    );

    if (!response.ok) {
      throw new Error('Failed to fetch weather data. Please try again later.');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching weather data:', error);
    throw error;
  }
};

export const getForecastData = async (location) => {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${location}&units=metric&appid=${API_KEY}`
    );

    if (!response.ok) {
      throw new Error('Failed to fetch forecast data. Please try again later.');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching forecast data:', error);
    throw error;
  }
};
