import React, { useState } from 'react';

const Button = ({ label }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [temperature, setTemperature] = useState(null);
  const [weather, setWeather] = useState(null);

  const buttonStyles = { // color for button when hovering
    border: '1px solid #ccc',
    padding: '10px 20px',
    backgroundColor: isHovered ? '#FF0000' : '#0000FF',
    color: '#fff',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const fetchDataFromAPI = () => { // fetch weather data
    fetch('https://api.weather.gov/gridpoints/BOX/69,92/forecast')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Error: Network response');
        }
        return response.json();
      })
      .then((data) => { // print out the data
        const temperature = data.properties.periods[0].temperature;
        const weather = data.properties.periods[0].shortForecast;
        setTemperature(temperature);
        setWeather(weather);
      })
      .catch((error) => {
        console.error('Error: Unable to fetch:', error);
      });
  };

  return (
    <div>
      <button
        style={buttonStyles}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={fetchDataFromAPI}
      >
        {label}
      </button>
      {temperature !== null && weather !== null && (
        <div>
          <p>Temperature: {temperature}°F</p>
          <p>Weather: {weather}</p>
        </div>
      )}
    </div>
  );
};

export default Button;