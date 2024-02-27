import React from "react";
import NavBar from "../components/Navbar";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { useEffect, useState } from "react";
import { event } from "../types/event";

// new code w/ useState and useEffect

export default function Events() {
  const [AllEvents, setEvents] = useState([]);

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
  const sampleID = "65de0998c41d7cb07ff7ca8b";

  const handleDelete = async (idToDelete: string) => {
    const response = await fetch("/api/content/events", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: idToDelete }),
    });
  };

  const handleAdd = async () => {
    const response = await fetch("api/content/events", {
      method: "POST",
    });
  };

  const handleUpdate = async (idToUpdate: string) => {
    const response = await fetch("api/content/events", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: idToUpdate,
        name: "updated event",
        description: "updated description",
        date: new Date("2024-2-27"),
        time: new Date("2024-2-28"),
        location: "change of location!",
        host: "new host",
        imageURL: "new image",
      }),
    });
  };

  return (
    <>
      <NavBar />
      <Header title="Events" />
      {/* <div> */}
      <div className="-mt-20 flex flex-col h-contact bg-gradient-to-t from-contact-g2 to-g-yellow1">
        <h1 className="mt-20 font-coolvetica text-7xl ml-12">
          Upcomming Events
        </h1>
        <div className="flex flex-row">
          {/* <div className="px-eboardx py-eboardy bg-lanternblue">

                </div> */}
        </div>
      </div>
      <div className="flex flex-col bg-gradient-to-b from-blue-g1 to-blue-g2"></div>
      <div className="h-20 w-full flex-1 mellow-yellow" id="triangle"></div>
      <div>
        <button onClick={() => handleDelete(sampleID)}>Delete event</button>
      </div>
      <div>
        <button onClick={() => handleAdd()}>Add sample event</button>
      </div>
      <div>
        <button onClick={() => handleUpdate(sampleID)}>Update event</button>
      </div>

      {AllEvents &&
        AllEvents.map((oneEvent: event) => {
          return (
            <div key={oneEvent.id}>
              {oneEvent.id} {oneEvent.name} {oneEvent.description}
              {oneEvent.location} {oneEvent.host} {oneEvent.imageURL}
              {oneEvent.time.toString()} {oneEvent.date.toString()}
            </div>
          );
        })}
      {/* </div> */}
      <Footer showAdminLogin={false} />
    </>
  );
}
