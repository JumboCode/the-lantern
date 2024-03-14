import React, { Fragment } from "react";
import NavBar from "../components/Navbar";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { useEffect, useState } from "react";
import { EventType } from "../types/event";
import { handleUpdate } from "../pages/api/events/updateEvent";
import { handleDelete } from "../pages/api/events/deleteEvent";
import { handleAdd } from "../pages/api/events/addEvent";
import EventsI from "@/components/events/EventsI";
import EventsII from "@/components/events/EventsII";
import Buttonv2 from "@/components/Buttonv2";
import EventOverlay from "../components/events/EventOverlay";

// new code w/ useState and useEffect

export default function Events() {
  const [AllEvents, setEvents] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const fetchEvents = async () => {
    const response = await fetch("/api/content/events", { method: "GET" });
    const data = await response.json();
    setEvents(data);
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  // const displayEvents = () => (
  //   <ul>
  //     {AllEvents.map((event, index) => (
  //       <li key={index}>{event.id} - {event.name} - {event.date}</li>
  //     ))}
  //   </ul>
  // );
  const sampleID = "65de09db7d4bfed85a2567fc";

  return (
    <>
      <NavBar />
      <Header title="Events" />
      <EventsI />
      <EventsII />

      <div>
        <button onClick={() => handleAdd()}>Add sample event</button>
      </div>

      {AllEvents &&
        AllEvents.map((oneEvent: EventType) => {
          return (
            <div key={oneEvent.id}>
              {oneEvent.id} {oneEvent.name} {oneEvent.description}
              {oneEvent.location} {oneEvent.host} {oneEvent.imageURL}
              {oneEvent.time.toString()} {oneEvent.date.toString()}
              <button onClick={() => handleUpdate(oneEvent.id, oneEvent)}>
                Update event
              </button>
              <button onClick={() => handleDelete(oneEvent.id)}>
                Delete event
              </button>
            </div>
          );
        })}
      <Fragment>
        <Buttonv2
          text="Edit Event"
          action={() => setShowModal(true)}
          color="orange"
          width="w-48"
        />
        <EventOverlay
          isVisible={showModal}
          onClose={() => {
            setShowModal(false);
          }}
          type="Edit Event"
          name="ava's half bday bash"
          date="2/29/2024"
          time="8:29pm"
          location="milla 4th floor"
          description="fun times with ava"
        />
      </Fragment>
      <Footer showAdminLogin={false} />
    </>
  );
}
