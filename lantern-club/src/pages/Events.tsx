import React, { useEffect } from "react";
import NavBar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { useState } from "react";
import { EventType } from "@/types/event";
import EventsI from "@/components/events/EventsI";
import EventsII from "@/components/events/EventsII";
import Head from 'next/head';
import { useSession } from "next-auth/react";
import FadeInOutComponent from "@/components/about/FadeInOutComponent";



// new code w/ useState and useEffect

export default function Events({ events } : { events: EventType[]}) {
  
  const [isAdminEdit, setIsAdminEdit] = useState<boolean>(false);
  const { data: session } = useSession();

  const handleEditButtonClick = () => {
    setIsAdminEdit(!isAdminEdit);
  };

  const [showAddModal, setShowAddModal] = useState<boolean>(false);

  return (
    <div>
      <NavBar />
      <Head>
        <title>Events | The Lantern</title> 
      </Head>
      <FadeInOutComponent><Header title="Events"/></FadeInOutComponent>
      <FadeInOutComponent><EventsI 
        isAdminEdit={isAdminEdit} 
        handleEditButtonClick={handleEditButtonClick} 
        events={events} 
        setShowAddModal={setShowAddModal}
        isLoading={false}
        session={session}
      /></FadeInOutComponent>
      <FadeInOutComponent><EventsII 
        isAdminEdit={isAdminEdit} 
        events={events}
        isLoading={false}
        session={session}
      /></FadeInOutComponent>
      <Footer showAdminLogin={true} />
    </div>
  );
}

export async function getStaticProps() {
  try {
    const response = await fetch("https://the-lantern.vercel.app/api/content/events", { method: "GET" });
    const events = await response.json();

    return {
      props: {
        events,
      },
    };
  } catch (error) {
    console.error("Error fetching events:", error);
    return {
      props: {
        events: [], 
      },
    };
  }
}

