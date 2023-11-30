import React, { useEffect, useState } from 'react';

export default function MagButton ( { label } ) {
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

    const fetchData = async () => {
        setLoading(true);
        try {
            const response = await fetch('/api/content/events'); 
            const data = await response.json();
            console.log('Fetched data:', data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

  return (
        <div style={divStyle}>
                <button onClick={fetchData} style={buttonStyle}>{label}</button>
        </div>
  );
};