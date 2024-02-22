import React from 'react';
import NavBar from "../components/Navbar";
import Footer from "../components/Footer";
import Header from "../components/Header";
import EventsI from "../components/events/EventsI";
import EventsII from "../components/events/EventsII";
import { useEffect, useState } from 'react';

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

// const displayEvents = () => (
//   <ul>
//     {AllEvents.map((event, index) => (
//       <li key={index}>{event.id} - {event.name} - {event.date}</li>
//     ))}
//   </ul>
// );
    return (
      <div>
        <NavBar />
        <Header title="Events"/>
        <EventsI />
        <EventsII />
        <Footer showAdminLogin={false} />
      </div>
    );



}