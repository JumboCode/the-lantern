"use client";

import NavBar from '../components/Navbar';
import Button from '@/components/Button';

import { useState } from "react";

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [weatherText, setResult] = useState(""); 
  const handleClick = () => {
    setLoading(true);

    fetch("https://api.weather.gov/gridpoints/BOX/69,92/forecast")
      .then((res) => res.json())
      .then((json) => {
        setLoading(false);
        const weather = json.properties.periods[0];
        const weatherText = `It's currently ${weather.temperature}º${weather.temperatureUnit} and ${weather.shortForecast}`;
        console.log(weatherText);
        setResult(weatherText); 
      });
  };

  return (
    <div>
      <header className="flex flex-col h-screen justify-center items-center">
        <p>Hi Lantern Club!! This is the default page aka homepage of the website</p>
        <NavBar />
        <Button label="This is my button" onClick={handleClick} />
        <p> {weatherText}</p>
      </header>    
    </div>
  );
}
