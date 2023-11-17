import React, { useEffect, useState } from 'react';
// import FetchButton from './FetchButton';

export default function EventsButton ( { label } ) {
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
//     <div>
//       <h1>Data Fetching Component</h1>
//       <FetchButton fetchData={fetchData} />
//     </div>
        <div style={divStyle}>
                <button fetchData={fetchData} style={buttonStyle}>{label}</button>
                result && <div>{result}</div>
        </div>
        // <div className="flex flex-col h-screen items-center">
        //         <button onClick={fetchData}>EventsButton</button>
        // </div>
  );
};