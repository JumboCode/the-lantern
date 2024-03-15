import React, { useEffect, useState } from 'react';
import Image from "next/image";
import OrangePoster from '../../images/orangeposter.png';
import BluePoster from '../../images/blueposter.png';
import TanPoster from '../../images/tanposter.png';

const background: React.CSSProperties = {
    height: "auto",
  };

type Event = {
  id: string;
  name: string;
  description: string;
  date: Date;
  time: Date;
  location: string;
  host: string;
};

export default function EventsI({ title }: { title: string }) {
    const background: React.CSSProperties = {
        height: "auto",
    };
    
    const imageStyle: React.CSSProperties = {
    width: "100%", // Ensure image takes up the entire width
    height: "100%", // Ensure image takes up the entire height
    };
    
    const header_font: React.CSSProperties = {
        fontFamily: "coolvetica",
        fontSize: "90px",
        lineHeight: "1",
    };
  
    const numEvents = 1;
  const [allEvents, setEvents] = useState<Event[]>([]);

  const fetchEvents = async () => {
    try {
      const response = await fetch('/api/content/events', { method: 'GET' });
      const data = await response.json();
      setEvents(data);
    } catch (error) {
      console.error('Error fetching events:', error);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  if (numEvents == 0) {
    return (
        <>
        <div className="-mt-20 flex flex-col h-contact bg-gradient-to-t from-contact-g2 to-g-yellow1">
            <h1 className="py-8 px-2 mt-20 font-coolvetica text-7xl ml-12">Upcoming Events</h1>
            <div className= "px-10">
            <div className="flex-col md:flex-row md:grid orange mellow-yellow-border font-nunito text-md rounded-3xl p-6 shadow-md max-w-md">
            <div className="flex flex-col justify-center items-start items-center text-center">
            <p> We don't currently have any upcoming events. </p>
            </div>
            </div>
        </div>
        <div className="flex flex-col justify-around items-center max-w-screen-md mx-auto">
            <div className="flex flex-row items-center justify-center"></div>
            <div className="w-[46px] h-[96px] sm:w-[92px] sm:h-[192px] flex items-center justify-center mt-[-30px] ml-[-5px]">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 108 216" fill="none">
            <path d="M2.4165 1.93115C29.0221 1.93115 49.5194 14.4388 62.9936 37.5376C73.3201 55.24 74.3398 76.3712 69.8375 95.8026C67.4766 105.992 56.2213 142.988 38.6703 133.305C33.0337 130.195 29.9604 123.096 32.9363 117.259C37.2471 108.803 46.1708 105.395 54.9013 103.109C63.865 100.761 77.6779 99.7789 85.6523 105.143C94.6506 111.197 97.7599 123.193 98.785 133.444C100.045 146.048 99.4784 159.731 96.8891 172.102C95.4991 178.743 92.7931 185.978 92.3111 192.726C91.9974 197.118 89.4752 201.339 89.0279 205.812C88.8528 207.563 88.283 214.16 87.2707 209.604C86.7472 207.248 84.112 204.769 83.9875 202.529C83.8729 200.466 82.885 198.048 81.9066 196.287C80.7687 194.238 77.687 184.373 79.0396 190.46C80.0134 194.842 82.7542 198.837 83.9413 202.992C84.4953 204.931 84.1818 206.934 85.4673 208.541C87.1784 210.68 84.5925 214.194 88.9817 211.87C92.2525 210.139 95.311 206.651 97.9526 204.009C99.3854 202.576 100.82 200.875 102.716 200.032C103.68 199.604 107.615 196.288 105.166 198.737C99.7613 204.143 93.0032 211.732 85.6523 214.182" stroke="black" stroke-width="3" stroke-linecap="round" stroke-dasharray="10 10"/>
            </svg>
        </div>
        </div>
        </div>
        <div className="flex flex-col bg-gradient-to-b from-blue-g1 to-blue-g2"></div>
        <div className="h-20 w-full flex-1 mellow-yellow" id="triangle"></div>

        {allEvents &&
            allEvents.map((oneEvent: Event) => (
            <div key={oneEvent.id}>
                {oneEvent.id} {oneEvent.name} {oneEvent.description}
                {oneEvent.location} {oneEvent.host}
                {/* {oneEvent.time}  {oneEvent.date} */}
            </div>
            ))}

        </>
    ); 
    }
    
    else {
        return (
        <div>
        <div
            className="-mt-20 py-20 px-20 yellow-gradient"
            style={background}
        > 
        {/* // div className="-mt-20 flex flex-col h-contact bg-gradient-to-t from-contact-g2 to-g-yellow1" */}
        <p style={header_font} className="mb-20">Upcoming Events</p>

            {/* Two boxes */}
            <div className="flex gap-10 pb-10"
            >
            {/* Event Box 1 */}
            <div
            className="w-1/3 flex-col object-fill ml-3" /*style={round_box}*/>
                <Image
                src={OrangePoster}
                style={imageStyle}
                alt="Orange Poster picture"
                />
            </div>
            
            {/* Event Box 2 */}
            <div
            className="w-1/3 flex-col object-cover" /*style={round_box}*/>
                <Image
                src={BluePoster}
                style={imageStyle}
                alt="Blue Poster picture"
                />
            </div>

            {/* Event Box 3 */}
            <div
            className="w-1/3 flex-col object fill" /*style={round_box}*/>
                <Image
                src={TanPoster}
                style={imageStyle}
                alt="Tan Poster picture"
                />
            </div>
            </div>

        <div className="flex flex-col bg-gradient-to-b from-blue-g1 to-blue-g2"></div>
        <div className="h-20 w-full flex-1 mellow-yellow" id="triangle"></div>

        </div>
        </div>
        
    );
    }
}