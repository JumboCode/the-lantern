import React from 'react';
import Image from 'next/image';
import { EventType } from '@/types/event';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import { CSSProperties } from 'react'; // Import CSSProperties
import Buttonv2 from "../Buttonv2";
import ConfirmModal from "../ConfirmModal";
import { useState } from "react";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";

interface EventCardProps {
    action: () => void;
    event: EventType,
    isEditingView: boolean | undefined
    isPast: boolean | undefined
}

const EventCard = ({ action, event, isEditingView, isPast }: EventCardProps) => {
    const cardStyle: CSSProperties = {
        display: 'flex', 
        flexDirection: 'column',
        alignItems: 'center', 
        justifyContent: 'center',
        height: '500px',
        width: '350px',
        borderRadius: "30px",
        gap: '1rem', 
        position: 'relative', 
    };

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
        <div>
        <div className={`shadow-xl text-center`} style={cardStyle}>

            <div className="relative flex-grow z-1 w-full" style={{ minHeight: '200px' }}>
                <Image
                    src={event.imageURL}
                    alt="Event image"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-3xl"
                   
                />
            </div>      
        </div>

        <div className='text-center my-10'>
        { !isEditingView && !isPast && (
                <>
                <Buttonv2
                text="RSVP"
                action={action}
                color="blue"
                width="w-40"
                />
                </>
        )     }
        { isEditingView && isPast && (
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
              </>
        )     }

        { isEditingView && !isPast && (
                <>
                <FontAwesomeIcon
                icon={faPen}
                size="2x"
                width={100}
                height={100}
                onClick={() => action()}
                className="cursor-pointer text-[#000000] relative transition-all duration-500 hover:text-sky-600"
                />
              </>
        )     }
        </div>
        </div>
    );
};

export default EventCard;
