import React from "react";
import NavBar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { useState } from "react";
import { EventType } from "@/types/event";
import EventsI from "@/components/events/EventsI";
import EventsII from "@/components/events/EventsII";

// new code w/ useState and useEffect

export default function Events() {
  const [isAdminEdit, setIsAdminEdit] = useState<boolean>(false);

  const handleEditButtonClick = () => {
    setIsAdminEdit(!isAdminEdit);
  };

   const [events, setEvents] = useState<EventType[]>([]);
   const [showAddModal, setShowAddModal] = useState<boolean>(false);


  return (
    <div>
      <NavBar />
      <Header title="Events"/>
      <EventsI 
        isAdminEdit={isAdminEdit} 
        handleEditButtonClick={handleEditButtonClick} 
        events={events} 
        setShowAddModal={setShowAddModal}
      />
      <EventsII isAdminEdit={isAdminEdit} handleEditButtonClick={handleEditButtonClick}/>
      <Footer showAdminLogin={false} />
    </div>
  );
}
