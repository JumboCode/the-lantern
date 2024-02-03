import type { NextApiRequest, NextApiResponse } from 'next'
import NavBar from "../components/Navbar";
import Footer from "../components/Footer";
import handler from "/api/content/events";
import { useEffect, useState } from 'react';
import { handleFetchEvents } from '../../prisma/read-data';

type event = {
	id: string;
    name: string;
	description: string;
	date: Date;
    time: Date;
	location: string;
	host: string;
};
// new code w/ useState and useEffect

export default function Events() {
    const [AllEvents, setEvents] = useState([])

    
    const fetchEvents = async () => {
        const response = await fetch('/api/content/events', {method: 'GET'})
        // const response = await handleFetchEvents(
        const data = await response.json()
        setEvents(data.data)
    }

    useEffect(() => {
        fetchEvents();
    }, [])

// const displayEvents = () => (
//   <ul>
//     {AllEvents.map((event, index) => (
//       <li key={index}>{event.id} - {event.name} - {event.date}</li>
//     ))}
//   </ul>
// );
  

  return (
    <>
      <NavBar />
      <p>EVENT PAGE!</p>
        {/* <div> */}
       {AllEvents.map((oneEvent: event) => {
        return (
            <div key={oneEvent.id}>
             {oneEvent.id} {oneEvent.name} {oneEvent.description}
              {oneEvent.location} {oneEvent.host}
              {/* {oneEvent.time}  {oneEvent.date} */}
             </div>
        );
       })}
       {/* </div> */}
      <Footer showAdminLogin={false} />
    </>
  );
}