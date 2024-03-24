import { useState } from "react";

// eslint-disable-next-line
export default function MyButton ( { label } ) {
        const buttonStyle = 
                        { color: 'red',
                          border: '2px solid red',
                          border_radius: '20px',
                          padding: '10px 20px',
                          align: 'center'
                        }
        const divStyle = 
                        { display: 'flex',
                          flexDirection: 'column',
                          justifyContent: 'center',
                          alignItems: 'center'
                        }       

        const [loading, setLoading] = useState(false);
        const [result, setResult] = useState("");
        const onClick = () => {
                setLoading(true);
                fetch('https://api.weather.gov/gridpoints/BOX/69,92/forecast')
                        .then(response => response.json())
                        .then(data => {
                                setLoading(false);
                                const weather = data.properties.periods[0];
                                setResult(`It is currently ${weather.temperature} degrees and ${weather.shortForecast}`);
                        }
                        
                );
        };
        return (
                <div style={divStyle}>
                        <button onClick={onClick} style={buttonStyle}>{label}??</button>
                        {result && <div>{result}</div>}
                </div>
                
        )
}