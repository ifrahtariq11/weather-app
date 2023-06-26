import React from 'react';
import moment from 'moment';

const Forecast = ({ data }) => {
  const { list } = data;

  return (
    <div className="forecast">
      <h2>Forecast</h2>
      <div className="forecast-list">
        {list.map((item, index) => (
          <div className="forecast-item" key={index}>
            <p>{moment(item.dt_txt).format('ddd, MMM D')}</p>
            <img
              src={`http://openweathermap.org/img/w/${item.weather[0].icon}.png`}
              alt={item.weather[0].description}
            />
            <p>{Math.round(item.main.temp)}°C</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Forecast;
