import React from "react";
import { useState } from "react";

function WeatherButton({ buttonText }) {
  const [temperature, setTemp] = useState(null);
  const [status, setStatus] = useState(null);

  const buttonStyle = {
    backgroundColor: "black",
    color: "white",
    fontSize: "20px",
    padding: "10px 60px",
    borderRadius: "10px",
    margin: "10px 0px",
    cursor: "pointer",
  };

  const handleClick = () => {
    // console.log("clicked!");
    fetch("https://api.weather.gov/gridpoints/BOX/69,92/forecast")
      .then((res) => res.json())
      .then((json) => {
        console.log(json.properties.periods[0].temperature);
        console.log(json.properties.periods[0].shortForecast);
        setTemp(json.properties.periods[0].temperature);
        setStatus(json.properties.periods[0].shortForecast);
      });

    // json.
  };

  return (
    <div>
      <button style={buttonStyle} onClick={handleClick}>
        {buttonText}
      </button>
      {temperature !== null && status !== null && (
        <div>
          <p> Temperature: {temperature}°F </p>
          <p> Status: {status} </p>
        </div>
      )}
    </div>
  );
}

export default WeatherButton;
