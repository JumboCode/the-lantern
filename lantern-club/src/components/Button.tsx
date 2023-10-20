import {useState} from "react";

export default function Button({label}:{label:string},{lit}:{lit:string}){
    //first with js, ts
const [loading, setLoading] = useState(false);
const [result, setResult] = useState('');

    const weatherBtn = () => {
    setLoading(true);

fetch("https://api.weather.gov/gridpoints/BOX/69,92/forecast").then(res => res.json()).then(function(data){
console.log(data);
const temp = data.properties.periods[0].temperature;
const weather = data.properties.periods[0].detailedForecast;
console.log(temp)
console.log(weather)
setLoading(false);
setResult(`The temperature for today is ${temp}, and the weather is ${weather}`)
})
    }

    return(
        <div>
            <button onClick={weatherBtn}>{loading ? "It is loading..." : label}</button>
        {result && <div>{result}</div>}
        </div>
    )
}