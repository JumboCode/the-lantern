import React from 'react';
import NavBar from "../components/Navbar";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { useEffect, useState, Fragment } from 'react';
import EventOverlay from "../components/EventOverlay";
import Buttonv2 from '@/components/Buttonv2';

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
        const data = await response.json()
        setEvents(data)
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
    const [showModal, setShowModal] = useState(false);

  return (
    <>
      <NavBar />
      <Header title="Events"/>
        {/* <div> */}
        <div className="-mt-20 flex flex-col h-contact bg-gradient-to-t from-contact-g2 to-g-yellow1">
            <h1 className="mt-20 font-coolvetica text-7xl ml-12">Upcomming Events</h1>
            <div className="flex flex-row">
                {/* <div className="px-eboardx py-eboardy bg-lanternblue">

                </div> */}

            </div>

        </div>
        <div className="flex flex-col bg-gradient-to-b from-blue-g1 to-blue-g2"></div>
        <div className="h-20 w-full flex-1 mellow-yellow" id="triangle"></div>

       {AllEvents && AllEvents.map((oneEvent: event) => {
        return (
            <div key={oneEvent.id}>
             {oneEvent.id} {oneEvent.name} {oneEvent.description}
              {oneEvent.location} {oneEvent.host}
              {/* {oneEvent.time}  {oneEvent.date} */}
             </div>
        );
       })}
       {/* </div> */}
       <Fragment>
        <Buttonv2 text="Edit Event" action={() => setShowModal(true)} color="orange" width="w-48" />
        <EventOverlay isVisible={showModal} onClose={() => {setShowModal(false)}} type="Edit Event" name="ava's half bday bash" date="2/29/2024" time="8:29pm" location="milla 4th floor" description="fun times with ava" />
      </Fragment>
      <Footer showAdminLogin={false} />
    </>
  );
}