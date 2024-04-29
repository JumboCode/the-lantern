import React from 'react';
import Image from 'next/image';
import { EventType } from '@/types/event';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import { CSSProperties } from 'react'; // Import CSSProperties
import Buttonv2 from "../Buttonv2";

interface EventCardProps {
    action: (value: boolean | undefined) => void;
    event: EventType,
    isEditingView: boolean | undefined
}

const EventCard = ({ action, event, isEditingView }: EventCardProps) => {
    const cardStyle: CSSProperties = {
        display: 'flex', 
        flexDirection: 'column',
        alignItems: 'center', 
        justifyContent: 'center',
        height: '500px',
        width: '350px',
        borderWidth: '3px',
        borderRadius: "30px",
        padding: '3rem', 
        gap: '1rem', 
        position: 'relative', 
    };

    return (
        <div>
        <div className={`shadow-xl text-center`} style={cardStyle}>
            {isEditingView &&
            <div style={{ position: 'absolute', top: '1rem', right: '1rem' }}>
                <FontAwesomeIcon
                icon={faPen}
                onClick={action} 
                className="cursor-pointer text-[#000000] relative transition-all duration-500 hover:text-[#FFFFFF]"
                />
            </div>
            }

            <div className="relative flex-grow w-full" style={{ minHeight: '200px' }}>
                <Image
                    src={event.imageURL}
                    alt="Event image"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-3xl"
                   
                />
            </div>      
        </div>

        <div>
        { !isEditingView && (
                <>
                <Buttonv2
                text="RSVP"
                action={action}
                color="blue"
                width="w-40"
                />
                </>
        )     }
        </div>
        </div>
    );
};

export default EventCard;
