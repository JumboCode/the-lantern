import React, { useState, useEffect } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { EventType } from "@/types/event";
import ConfirmModal from "../ConfirmModal";
import { EventBox } from "./EventBox";
import { Session } from "next-auth";
import { useSession } from "next-auth/react";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import EventCard from "./EventCard"

type EventsIIProps = {
  events: EventType[];
  session?: Session | null;
  // setShowAddModal: (value: boolean) => void;
  isLoading: boolean;
  isAdminEdit: boolean;
};


export default function EventsII({
  events,
  session,
  isLoading,
  isAdminEdit
}: EventsIIProps) {

  const responsive = {
    desktop: {
      breakpoint: { max: 4000, min: 1100 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1100, min: 768 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 768, min: 0 },
      items: 1,
    },
  };


  const [currentCardData, setCurrentCardData] = useState<EventType>();

  const handleCardClick = (cardData: EventType) => {
      setCurrentCardData(cardData);
  
      if (session?.user.isAdmin) {
          
              } else {
      
              }
      
  };

  // ********* IS ADMIN EDIT BOOLEAN ********
  return (
    <div>
      <div className=" -mt-20 py-40 px-8 md:px-20 blue2-gradient">
        <h1 className={"mb-20 font-coolvetica md:text-8xl text-6xl flex"}>
        {session?.user.isAdmin ? "Delete Past Events" : "Past Events"}
        </h1>

        <Carousel
          swipeable={true}
          draggable={true}
          showDots={false}
          responsive={responsive}
          ssr={true}
          infinite={true}
          keyBoardControl={true}
          containerClass="carousel-container pt-12 pb-20 mx-auto md:px-16"
          itemClass="flex justify-center md:justify-start"
          arrows={true}
      >
          {events.map((eventData, index) => (
    eventData.isPast && (
        <div key={index} className="">
            <EventCard
                event={eventData} // Use the imageMap to get the correct image
                action={() => handleCardClick(eventData)}
                isEditingView={session?.user.isAdmin}
                isPast={true}
                isAdminEdit={isAdminEdit}
            />
        </div>
    )
        ))}

      </Carousel>
        </div>
      </div>
  );
}
