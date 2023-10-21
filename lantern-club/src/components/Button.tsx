import { useState } from "react";

export default function Button({ label }) {
	const [loading, setLoading] = useState(false);
	const [result, setResult] = useState("");
	
	const onClick = () => {
		setLoading(true);

		fetch("https://api.weather.gov/gridpoints/BOX/69,92/forecast")
			.then((res) => res.json())
			.then((json) => {
				setLoading(false);
				const weather = json.properties.periods[0];
				setResult(
					`It's currently ${weather.temperature}º${weather.temperatureUnit} and ${weather.shortForecast}`
				);
			});
	};

	return (
		<div>
			<button 
				style={{
        			fontWeight: 'bold',
					width: '180px',
        			height: '35px',
					backgroundColor: '#AACBD8',
        			color: '#233C67', 
        			borderRadius: '17px', 
      			}}
				className="hover:underline" 
				onClick={onClick}>{loading ? "Loading..." : label}</button>

			{result && <div>{result}</div>}
		</div>
	);
}