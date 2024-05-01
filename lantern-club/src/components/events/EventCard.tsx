import React from 'react';
import Image from 'next/image';
import { EventType } from '@/types/event';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import { CSSProperties } from 'react'; // Import CSSProperties
import Buttonv2 from "../Buttonv2";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";

interface EventCardProps {
    action: () => void;
    event: EventType,
    isEditingView: boolean | undefined
    isPast: boolean | undefined
    isAdminEdit: boolean
}

const EventCard = ({ action, event, isEditingView, isPast, isAdminEdit }: EventCardProps) => {
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
        { isEditingView && isPast && isAdminEdit && (
                <>
                <FontAwesomeIcon
                icon={faTrashCan}
                width={100}
                height={100}
                size="2x"
                onClick={() => action()}
                className="cursor-pointer transition-all duration-300 hover:text-orange-400"
              />
              </>
        )     }

        { isEditingView && !isPast && isAdminEdit && (
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
