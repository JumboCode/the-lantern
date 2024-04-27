import React, { useState } from "react";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import { EventBox } from "../events/EventBox";
import { EventType } from "@/types/event";
import { useSession } from "next-auth/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Session } from "next-auth";
import EventOverlay from "@/components/events/EventOverlay";
import NoEventsComponent from "./NoEventsIComponent";

interface EventsIProps {
  isAdminEdit: boolean;
  handleEditButtonClick: () => void;
  events?: EventType[];
  session?: Session | null;
  setShowAddModal: (value: boolean) => void;
}

export default function EventsI({
  events,
  isAdminEdit,
  handleEditButtonClick,
}: EventsIProps) {
  const { data: session } = useSession();

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

  const [showAddModal, setShowAddModal] = useState(false);

  return (
    <>
      {events && events.filter((oneEvent) => oneEvent.isPast === false).length === 0 ? (
        <NoEventsComponent 
          isAdminEdit={isAdminEdit}
          session={session}
          handleEditButtonClick={handleEditButtonClick}
          setShowAddModal={setShowAddModal}/>
      ) : (
        <EventsListComponent
          events={events}
          isAdminEdit={isAdminEdit}
          session={session}
          handleEditButtonClick={handleEditButtonClick}
          setShowAddModal={setShowAddModal}
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
  );
}


// Component for events list
const EventsListComponent = ({ events, isAdminEdit, session, handleEditButtonClick, setShowAddModal }: EventsIProps) => (
    <>
        <div className="-mt-20 py-40 px-8 md:px-20 bg-gradient-to-t from-contact-g2 to-g-yellow1">
          <div className="flex flex-col md:flex-row mb-10 md:mb-20">
            <h1 className={"font-coolvetica md:text-8xl text-6xl flex items-end"}>
              {isAdminEdit ? "Edit Upcoming Events" : "Upcoming Events"}
              {session?.user.isAdmin && (
                <button className="font-nunito underline text-2xl ml-7 mb-2 cursor-pointer relative transition-all duration-300 hover:text-orange-400" onClick={handleEditButtonClick}>Edit</button>
              )}
              
            </h1>
            {isAdminEdit && (
                <div className="flex items-center ml:0 md:ml-auto">
                  <FontAwesomeIcon onClick={() => setShowAddModal(true)} icon={faCirclePlus} className="text-7xl cursor-pointer transition-all duration-500 hover:text-orange-400" />
                </div>
            )}
          </div>

          {/* Two boxes */}
          <div className="flex flex-col gap-10 md:flex-row">
            {events &&
              events
                .filter((oneEvent) => oneEvent.isPast === false)
                .slice(0,3).map((oneEvent: EventType) => {
                  return (
                    <div key={oneEvent.id} className="w-full md:w-1/3">
                      <EventBox event={oneEvent} isAdminEdit={isAdminEdit} isPast={false}/>
                    </div>
                  );
              })}
          </div>
        </div>
        <div>
        <div className="z-4 relative"><div className="h-20 w-full flex mellow-yellow -z-50" id="triangle"></div></div>
        </div>
    </>
);
