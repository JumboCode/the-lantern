import { useState } from "react";

export default function Button() {
  const [weather, setWeather] = useState("");

  const handleClick = () => {
    fetch("https://api.weather.gov/gridpoints/BOX/69,92/forecast")
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        const weather = json.properties.periods[0];
        setWeather(
          "Today it is " +
            weather.shortForecast +
            " and " +
            weather.temperature +
            " degrees " +
            weather.temperatureUnit
        );
      });
  };

  return (
    <div>
      <button
        type="button"
        className="hover:underline"
        onClick={handleClick}
        style={{ backgroundColor: "#DEDAF4", width: "207px", height: "38px" }}
      >
        click click
      </button>
      {weather && <div>{weather}</div>}
    </div>
  );
}
