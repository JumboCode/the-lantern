import React, { useState } from "react";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import { EventBox } from "../events/EventBox";
import { EventType } from "@/types/event";
import { useSession } from "next-auth/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Session } from "next-auth";
import EventOverlay from "@/components/events/EventOverlay";
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
        <div className="-mt-20 pb-0 pt-40 md:py-40 px-20 h-auto flex flex-col bg-gradient-to-t from-contact-g2 to-g-yellow1" style={{ minHeight: "700px" }}>
          <div className="flex flex-col md:flex-row mb-10 md:mb-20">
            <h1 className={"font-coolvetica md:text-8xl text-6xl flex items-end"}>
              {session?.user.isAdmin && isAdminEdit ? "Edit Upcoming Events" : "Upcoming Events"}
              {session?.user.isAdmin && (
                <button className="font-nunito underline text-2xl ml-7 mb-2 cursor-pointer relative transition-all duration-300 hover:text-orange-400" onClick={handleEditButtonClick}>{isAdminEdit ? "Done Editing" : "Edit"}</button>
              )}
            </h1>
          
            {session?.user.isAdmin && isAdminEdit && (
              <div className="flex items-center ml:0 md:ml-auto">
                <FontAwesomeIcon onClick={() => setShowAddModal(true)} icon={faCirclePlus} className="text-7xl cursor-pointer transition-all duration-500 hover:text-orange-400" />
              </div>
            )}
          </div>
          <div className="flex justify-between items-center px-10 py-10">
            <div className="relative">
              <div className="flex-col md:flex-row md:grid orange mellow-yellow-border font-nunito text-md rounded-3xl p-6 shadow-md max-w-md border border-solid border-#94BBE3">
                <div className="flex flex-col justify-center items-center text-center">
                  <p> We don't currently have any upcoming events. </p>
                </div>

                <div className="absolute right-0 w-[46px] h-[96px] sm:w-[92px] sm:h-[192px] hidden md:flex items-center mr-[-100px] pb-10">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 108 216"
                    fill="none"
                  >
                    <path
                      d="M2 2C28.6056 2 49.1029 14.5077 62.5771 37.6064C72.9036 55.3089 73.9233 76.4401 69.421 95.8714C67.0601 106.061 55.8048 143.057 38.2538 133.374C32.6172 130.264 29.5439 123.165 32.5198 117.328C36.8306 108.872 45.7543 105.464 54.4848 103.178C63.4485 100.83 77.2614 99.8478 85.2357 105.212C94.2341 111.266 97.3434 123.261 98.3685 133.512C99.6289 146.117 99.0619 159.8 96.4726 172.171C95.0826 178.812 94.8018 182.252 94.3198 189C94.0061 193.392 92.5 196.902 91 202C90.824 202.598 88.5 216.5 86.8542 209.673C86.3307 207.317 83.6955 204.838 83.571 202.598M76.0983 184.968C77.0721 189.35 79.8129 193.345 81 197.5M88.1489 211.351C92.9321 207.851 93.8945 207.141 96.5361 204.5C97.9689 203.067 101.5 199 103 197.5C104.201 194.899 110 187 108 190.529"
                      stroke="black"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeDasharray="10 10"
                      transform="translate(-2,0)"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center px-10 py-20">
            <div className="flex-col md:flex-row md:grid blue font-nunito text-md text-white rounded-3xl p-5 shadow-md border border-solid blue-border">
              <div className="flex flex-col justify-center items-center text-center">
                <p>
                  Follow us on our Instagram, <b>@thelanterntufts</b>, to get our
                  most up-to-date flyers and endeavors!
                </p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="-mt-20 py-40 px-8 md:px-20 bg-gradient-to-t from-contact-g2 to-g-yellow1">
          <div className="flex flex-col md:flex-row mb-10 md:mb-20">
            <h1 className={"font-coolvetica md:text-8xl text-6xl flex items-end"}>
              {session?.user.isAdmin && isAdminEdit ? "Edit Upcoming Events" : "Upcoming Events"}
              {session?.user.isAdmin && (
                <button className="font-nunito underline text-2xl ml-7 mb-2 cursor-pointer relative transition-all duration-300 hover:text-orange-400" onClick={handleEditButtonClick}>  {isAdminEdit ? "Done Editing" : "Edit"}</button>
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
        </div>
      )}
      {showEditModal && currentCardData && (
            <EventOverlay
              type="Edit Event"
              isVisible={showEditModal}
              onClose={() => { setShowEditModal(false) }}
              event={currentCardData}
            />
          )}
          {showRSVPModal && currentCardData && (
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
                  setShowAddModal(false);
                }}
              />
            </div>
          )}
    </>
  )
};
