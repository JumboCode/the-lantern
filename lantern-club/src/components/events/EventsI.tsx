import React, { useEffect, useState } from 'react';
import Image from "next/image";
import OrangePoster from '../../images/orangeposter.png';
import BluePoster from '../../images/blueposter.png';
import TanPoster from '../../images/tanposter.png';
import Buttonv2 from "../Buttonv2";
import ReactDOM from 'react-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen } from '@fortawesome/free-solid-svg-icons'

type Event = {
  id: string;
  name: string;
  description: string;
  date: Date;
  time: Date;
  location: string;
  host: string;
};

const handleButtonClick = () => {
  // TODO
  console.log('Button clicked!');
};

export default function EventsI({ title }: { title: string }) {
  const background: React.CSSProperties = {
    height: "auto",
  };

  const imageStyle: React.CSSProperties = {
    width: "100%", // Ensure the image takes up the entire width
    height: "100%", // Ensure the image takes up the entire height
  };

  const header_font: React.CSSProperties = {
    fontFamily: "coolvetica",
    fontSize: "90px",
    lineHeight: "1",
  };

  const numEvents = 1;
  const [allEvents, setEvents] = useState<Event[]>([]);
  const [isAdmin, setIsAdmin] = useState<boolean>(false);

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
    // Set isAdmin to true for demonstration purposes
    setIsAdmin(true);
  }, []);

  if (numEvents === 0) {
    return (
      <>
        <div className="-mt-20 flex flex-col h-contact bg-gradient-to-t from-contact-g2 to-g-yellow1" style={{ minHeight: "700px" }}>
          {/* ... (same as your existing code) */}
        </div>
        {/* ... (same as your existing code) */}
      </>
    );
  } else {
    return (
      <div>
        <div className="-mt-20 py-20 px-20 bg-gradient-to-t from-contact-g2 to-g-yellow1" style={background}>
          <h1 className="mb-20 font-coolvetica md:text-8xl text-7xl">Upcoming Events</h1>

          {/* Two boxes */}
          <div className="flex flex-col gap-10 md:flex-row">
            {/* Event Box 1 */}
            <div className="flex-1" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <Image src={OrangePoster} style={imageStyle} alt="Orange Poster picture" />
              <div style={{ paddingTop: '20px' }}>
                {isAdmin ? (
                  <FontAwesomeIcon icon={faPen} alt="Edit Button" size="2x" onClick={handleButtonClick}/>
                ) : (
                  <Buttonv2 text="RSVP" action={handleButtonClick} color="blue" width="w-40" />
                )}
              </div>
            </div>

            {/* Event Box 2 */}
            <div className="flex-1" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <Image src={BluePoster} style={imageStyle} alt="Blue Poster picture" />
              <div style={{ paddingTop: '20px' }}>
                {isAdmin ? (
                   <FontAwesomeIcon icon={faPen} alt="Edit Button" size="2x" onClick={handleButtonClick}/>
                ) : (
                  <Buttonv2 text="RSVP" action={handleButtonClick} color="blue" width="w-40" />
                )}
              </div>
            </div>

            {/* Event Box 3 */}
            <div className="flex-1" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <Image src={TanPoster} style={imageStyle} alt="Tan Poster picture" />
              <div style={{ paddingTop: '20px' }}>
                {isAdmin ? (
                   <FontAwesomeIcon icon={faPen} alt="Edit Button" size="2x" onClick={handleButtonClick}/>
                ) : (
                  <Buttonv2 text="RSVP" action={handleButtonClick} color="blue" width="w-40" />
                )}
              </div>
            </div>
          </div>

        </div>
        <div className="h-20 w-full flex mellow-yellow" id="triangle"></div>
      </div>
    );
  }
}