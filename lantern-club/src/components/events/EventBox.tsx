import Buttonv2 from "../Buttonv2";
import Image from "next/image";

import { useState } from "react";
import EventOverlay from "../events/EventOverlay";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { EventBoxProps } from "@/types/event";
import RSVPOverlay from "./RSVPOverlay";
import { useSession } from "next-auth/react";
import ConfirmModal from "../ConfirmModal";

const EventBox = ({ event, isAdminEdit, isPast }: EventBoxProps) => {
 
  const { data: session } = useSession();
  const [showModal, setShowModal] = useState(false);

  const [showConfirmModal, setShowConfirmModal] = useState(false);

  const handleDelete = async (id: string) => {
    const url = `/api/content/events/${id}`;
    try {
      const response = await fetch(url, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }

      const deletedEvent = await response.json();
      console.log("Deleted profile:", deletedEvent);
      window.location.reload();
      setShowConfirmModal(false);
    } catch (error) {
      console.error("Failed to delete event:", error);
    }
  };

  return (
    <>
      <div className="flex relative flex-shrink w-full"  style={{ minHeight: '500px'}}>
        <Image
            src={event.imageURL}
            layout="fill"
            objectFit="cover"
            alt="Event image"
            className="rounded-xl overflow-hidden"
        />

      </div>   
      <div className="flex justify-center pt-10">
        {isAdminEdit ? (
          isPast ? (
          <>
            <FontAwesomeIcon
              icon={faTrashCan}
              width={100}
              height={100}
              size="2x"
              onClick={() => setShowConfirmModal(true)}
              className="cursor-pointer transition-all duration-300 hover:text-orange-400"
            />
            <ConfirmModal isVisible={showConfirmModal} onClose={() => {setShowConfirmModal(false)}} onDelete={() => event.id && handleDelete(event.id)} />
          </>) : (
          <>
            <FontAwesomeIcon
              icon={faPen}
              size="2x"
              onClick={() => setShowModal(true)}
              className="cursor-pointer transition-all duration-300 hover:text-orange-400"
            />
            <EventOverlay
              isVisible={showModal}
              onClose={() => {
                setShowModal(false);
              }}
              type="Edit Event"
              event={event}
            />
            
          </>)
        ) : (
          !session?.user.isAdmin && (
            <>
              <Buttonv2
                text="RSVP"
                action={() => setShowModal(true)}
                color="blue"
                width="w-40"
              />
              <RSVPOverlay
                isVisible={showModal}
                onClose={() => {
                  setShowModal(false);
                }}
                event={event}
              />
            </>
          )
        )}
      </div>
    </>
  );
};

export { EventBox };
