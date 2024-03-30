import React, { useEffect, useState } from 'react';
// import Image from "next/image";
// import OrangePoster from '../../images/orangeposter.png';
// import BluePoster from '../../images/blueposter.png';
// import TanPoster from '../../images/tanposter.png';
// import Buttonv2 from "../Buttonv2";
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons'
import { EventBox } from "../events/EventBox";
import { EventType } from "@/types/event";
import { useSession } from "next-auth/react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Session } from 'next-auth';
import EventOverlay from "@/components/events/EventOverlay"
// import Carousel from 'react-multi-carousel';

interface EventsIProps {
  isAdminEdit: boolean;
  handleEditButtonClick: () => void;
  events: EventType[];
  session?: Session | null;
  setShowAddModal: (value: boolean) => void;
}; 

const background: React.CSSProperties = {
  height: "auto",
};

export default function EventsI({ events, isAdminEdit, handleEditButtonClick }: EventsIProps) {

  const { data: session } = useSession();

  const responsive = {
    desktop: {
        breakpoint: { max: 4000, min: 1100 },
        items: 3
    },
    tablet: {
        breakpoint: { max: 1100, min: 768 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 768, min: 0 },
        items: 1
    },
  };

  const [showAddModal, setShowAddModal] = useState(false);

  return (
    <>
      {events.length === 0 ? (
        <NoEventsComponent />
      ) : (
        <EventsListComponent events={events} isAdminEdit={isAdminEdit} session={session} handleEditButtonClick={handleEditButtonClick} setShowAddModal={setShowAddModal} />
      )}

      {showAddModal && (
          <EventOverlay 
              type="Add Event" 
              isVisible={showAddModal} 
              onClose={() => {setShowAddModal(false)}} 
          />
      )}
      {/* {showEditModal && currentCardData && (
          <EboardOverlay 
              type="Edit" 
              isVisible={showEditModal} 
              onClose={() => {setShowEditModal(false)}} 
              profile={currentCardData}
              />
      )} */}
    </>
  );
}

// Component for no events scenario
const NoEventsComponent = () => (
  <>
    <div className="-mt-20 flex flex-col h-contact bg-gradient-to-t from-contact-g2 to-g-yellow1" style={{ minHeight: "700px" }}>
      <h1 className="py-10 px-2 mt-20 font-coolvetica md:text-8xl text-7xl ml-12">
        Upcoming Events
      </h1>
      <div className="flex justify-between items-center px-10 py-10">
        <div className="relative">
          <div className="flex-col md:flex-row md:grid orange mellow-yellow-border font-nunito text-md rounded-3xl p-6 shadow-md max-w-md border border-solid border-#94BBE3">
            <div className="flex flex-col justify-center items-start items-center text-center">
              <p> We don't currently have any upcoming events. </p>
            </div>

            <div className="absolute right-0 w-[46px] h-[96px] sm:w-[92px] sm:h-[192px] flex items-center mr-[-100px] pb-10">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 108 216"
                fill="none"
              >
                <path
                  d="M2.4165 1.93115C29.0221 1.93115 49.5194 14.4388 62.9936 37.5376C73.3201 55.24 74.3398 76.3712 69.8375 95.8026C67.4766 105.992 56.2213 142.988 38.6703 133.305C33.0337 130.195 29.9604 123.096 32.9363 117.259C37.2471 108.803 46.1708 105.395 54.9013 103.109C63.865 100.761 77.6779 99.7789 85.6523 105.143C94.6506 111.197 97.7599 123.193 98.785 133.444C100.045 146.048 99.4784 159.731 96.8891 172.102C95.4991 178.743 92.7931 185.978 92.3111 192.726C91.9974 197.118 89.4752 201.339 89.0279 205.812C88.8528 207.563 88.283 214.16 87.2707 209.604C86.7472 207.248 84.112 204.769 83.9875 202.529C83.8729 200.466 82.885 198.048 81.9066 196.287C80.7687 194.238 77.687 184.373 79.0396 190.46C80.0134 194.842 82.7542 198.837 83.9413 202.992C84.4953 204.931 84.1818 206.934 85.4673 208.541C87.1784 210.68 84.5925 214.194 88.9817 211.87C92.2525 210.139 95.311 206.651 97.9526 204.009C99.3854 202.576 100.82 200.875 102.716 200.032C103.68 199.604 107.615 196.288 105.166 198.737C99.7613 204.143 93.0032 211.732 85.6523 214.182"
                  stroke="black"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeDasharray="10 10"
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
              {" "}
              Follow us on our Instagram, <b>@thelanterntufts</b>, to get
              our most up-to-date flyers and endeavors!{" "}
            </p>
            </div>
         </div>
        </div>
      </div>
    <div className="h-20 w-full flex mellow-yellow" id="triangle"></div>
  </>
);

// Component for events list
const EventsListComponent = ({ events, isAdminEdit, session, handleEditButtonClick, setShowAddModal }: EventsIProps) => (
    <>
        <div className="-mt-20 py-20 px-20 bg-gradient-to-t from-contact-g2 to-g-yellow1" style={background}>

          <h1 className={"mb-20 mt-20 font-coolvetica md:text-8xl text-7xl"} style={{ display: 'flex', alignItems: 'center' }}>
            {isAdminEdit ? "Edit Upcoming Events" : "Upcoming Events"}
            {session?.user.isAdmin && !isAdminEdit && (
              <a href="#" className="font-nunito underline text-2xl ml-7" onClick={handleEditButtonClick}>edit</a>
            )}
            {isAdminEdit && (
              <div style={{ display: 'flex', alignItems: 'center', marginLeft: 'auto' }}>
                <FontAwesomeIcon icon={faCirclePlus} onClick={() => setShowAddModal(true)} style={{ fontSize: '3.5rem', marginRight: '5px'}} />
                <span className="font-nunito" style={{ fontSize: '1rem' }}>Add New</span>
              </div>
            )}
          </h1>
      

          {/* Two boxes */}
          <div className="flex flex-col gap-10 md:flex-row">
            {events &&
              events.slice(0,3).map((oneEvent: EventType) => {
                return (
                  <div key={oneEvent.id} className="flex-1" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <EventBox event={oneEvent} isAdminEdit={isAdminEdit} />
                  </div>
                );
              })}
          </div>
        </div>
        <div className="h-20 w-full flex mellow-yellow" style={{ zIndex: -50, position: 'relative'}} id="triangle"></div>
    </>
);

  

