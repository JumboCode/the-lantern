import React from 'react';
import NavBar from "../components/Navbar";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { useEffect, useState, Fragment } from 'react';
import EventOverlay from "../components/EventOverlay";
import Buttonv2 from '@/components/Buttonv2';
import EventsI from "../components/events/EventsI";
import EventsII from "../components/events/EventsII";

type event = {
	id: string;
    name: string;
	description: string;
	date: Date;
    time: Date;
	location: string;
	host: string;
    imageURL: string;
};
// new code w/ useState and useEffect

export default function Events() {

// const displayEvents = () => (
//   <ul>
//     {AllEvents.map((event, index) => (
//       <li key={index}>{event.id} - {event.name} - {event.date}</li>
//     ))}
//   </ul>
// );
    const [showModal, setShowModal] = useState(false);
    return (
      <div>
        <NavBar />
        <Header title="Events"/>
        <EventsI />
        <EventsII />
        <Fragment>
            <Buttonv2 text="Edit Event" action={() => setShowModal(true)} color="orange" width="w-48" />
            <EventOverlay isVisible={showModal} onClose={() => {setShowModal(false)}} type="Edit Event" name="ava's half bday bash" date="2/29/2024" time="8:29pm" location="milla 4th floor" description="fun times with ava" />
        </Fragment>
        {/* {AllEvents && AllEvents.map((oneEvent: event) => {
        return (
            <div key={oneEvent.id}>
             {oneEvent.id} {oneEvent.name} {oneEvent.description}
              {oneEvent.location} {oneEvent.host}
              {/* {oneEvent.time}  {oneEvent.date} */}
             {/* </div> */}
        {/* ); */}
       
        <Footer showAdminLogin={false} />
      </div>
    );



}