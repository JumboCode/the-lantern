import React, { Fragment } from 'react';
import NavBar from "../components/Navbar";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { useEffect, useState } from 'react';
import EventsI from '@/components/events/EventsI';
import EventsII from '@/components/events/EventsII';
import Buttonv2 from '@/components/Buttonv2';
import EventOverlay from "../components/events/EventOverlay";
import EboardOverlay from "../components/contact/EboardOverlay";

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
      <EventsI />
      <EventsII/>
        
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
       
      {/* <Fragment>
        <Buttonv2 text="Add Profile Card" action={() => setShowModal(true)} color="orange" width="w-48" />
        {/* <EboardOverlay isVisible={showModal} onClose={() => {setShowModal(false)}} /> I never finished
      </Fragment> */}
      <Footer showAdminLogin={false} />
    </>
  );
}