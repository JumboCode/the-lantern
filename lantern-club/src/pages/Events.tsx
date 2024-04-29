import React, { useEffect } from "react";
import NavBar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { useState } from "react";
import { EventType } from "@/types/event";
import EventsI from "@/components/events/EventsI";
import EventsII from "@/components/events/EventsII";
import Head from 'next/head';



// new code w/ useState and useEffect

export default function Events() {
  const [isAdminEdit, setIsAdminEdit] = useState<boolean>(false);


  const [events, setEvents] = useState<EventType[]>([]);
  const [showAddModal, setShowAddModal] = useState<boolean>(false);

  const fetchEvents = async () => {
    try {
      const response = await fetch("/api/content/events", { method: "GET" });
      const data = await response.json();
      setEvents(data);
    } catch (error) {
      console.error("Error fetching events:", error);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  return (
    <div>
      <NavBar />
      <Head>
        <title>Events | The Lantern</title> 
      </Head>
      <Header title="Events"/>
      <EventsI 
        events={events} 
        setShowAddModal={setShowAddModal}
      />
      <EventsII 
        events={events}
      />
      <Footer showAdminLogin={true} />
    </div>
  );
}
