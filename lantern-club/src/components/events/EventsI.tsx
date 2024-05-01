import React, { useState } from "react";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import { EventBox } from "../events/EventBox";
import { EventType } from "@/types/event";
import { useSession } from "next-auth/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Session } from "next-auth";
import EventOverlay from "@/components/events/EventOverlay";
import NoEventsComponent from "./NoEventsIComponent";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import RSVPOverlay from "./RSVPOverlay";
import EventCard from "./EventCard"
import ConfirmModal from "../ConfirmModal";

interface EventsIProps {
  events: EventType[];
  session?: Session | null;
  setShowAddModal: (value: boolean) => void;
  isLoading: boolean;
  isAdminEdit: boolean;
  handleEditButtonClick: () => void;
}

export default function EventsI({
  events,
  isAdminEdit,
  handleEditButtonClick,
  isLoading,
  session
}: EventsIProps) {
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showRSVPModal, setShowRSVPModal] = useState(false);
  const [currentCardData, setCurrentCardData] = useState<EventType>();

  const handleCardClick = (cardData: EventType) => {
    setCurrentCardData(cardData);

    if (session?.user.isAdmin) {
              setShowEditModal(true);
            } else {
              setShowRSVPModal(true);
            }
  };

  


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

  

  return (
    <>
      {!isLoading && events && events.filter((oneEvent) => oneEvent.isPast === false).length === 0 ? (
        <NoEventsComponent 
          session={session}
          setShowAddModal={setShowAddModal}/>
      ) : (
        <div className="-mt-20 py-40 px-8 md:px-20 bg-gradient-to-t from-contact-g2 to-g-yellow1">
          <div className="flex flex-col md:flex-row mb-10 md:mb-20">
             <h1 className={"font-coolvetica md:text-8xl text-6xl flex items-end"}>
               {session?.user.isAdmin && isAdminEdit ? "Edit Upcoming Events" : "Upcoming Events"}
               {session?.user.isAdmin && (
                <button className="font-nunito underline text-2xl ml-7 mb-2 cursor-pointer relative transition-all duration-300 hover:text-orange-400" onClick={handleEditButtonClick}>Edit</button>
              )}
              
             </h1>
             {session?.user.isAdmin && isAdminEdit && (
                <div className="flex items-center z-10 ml:0 md:ml-auto">
                  <FontAwesomeIcon onClick={() => setShowAddModal(true)} icon={faCirclePlus} className="text-7xl cursor-pointer transition-all duration-500 hover:text-orange-400" />
                </div>
            )}
          </div>
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
                  !eventData.isPast && (
                <div key={index} className="">
                    <EventCard
                        event={eventData} 
                        action={() => handleCardClick(eventData)}
                        isEditingView={session?.user.isAdmin} 
                        isPast={false}
                        isAdminEdit={isAdminEdit}
                    />
                </div>
                  )
            ))}
          </Carousel>
          {showEditModal && currentCardData && (
                        <EventOverlay 
                            type="Edit Event" 
                            isVisible={showEditModal} 
                            onClose={() => {setShowEditModal(false)}} 
                            event={currentCardData}
                            />
                    )}
          {showRSVPModal && currentCardData &&(
                      <RSVPOverlay
                      isVisible={showRSVPModal}
                      onClose={() => {
                        setShowRSVPModal(false);
                      }}
                      event={currentCardData}
                  />
                  )}
          {showAddModal && (
            <div style={{ zIndex: 999, position: "relative" }}>
              <EventOverlay
                type="Add Event"
                isVisible={showAddModal}
                onClose={() => {
                  setShowAddModal(false);}}
              />
            </div>
          )}
        </div>
      )}
  </>  
  )
};

