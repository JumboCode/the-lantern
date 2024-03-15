import React, { useEffect, useState, Fragment } from 'react';
import Image from "next/image";
import OrangePoster from '../../images/orangeposter.png';
import BluePoster from '../../images/blueposter.png';
import TanPoster from '../../images/tanposter.png';
import Buttonv2 from "../Buttonv2";
import RSVPOverlay from "./RSVPOverlay";
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
  console.log('Button clicked!');
};

export default function EventsI({ title }: { title: string }) {
  const background: React.CSSProperties = {
    height: "auto",
  };

  const imageStyle: React.CSSProperties = {
    width: "100%",
    height: "100%",
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
    setIsAdmin(false);
  }, []);

  const [showModal, setShowModal] = useState(false);

  if (numEvents == 0) {
    return (
      <>
        <div className="-mt-20 flex flex-col h-contact bg-gradient-to-t from-contact-g2 to-g-yellow1" style={{ minHeight: "700px" }}>
        <div className="flex justify-center items-center px-10 py-20">
            <div className="flex-col md:flex-row md:grid blue font-nunito text-md text-white rounded-3xl p-5 shadow-md border border-solid blue-border">
                <div className="flex flex-col justify-center items-center text-center">
                <p> Follow us on our Instagram, <b>@thelanterntufts</b>, to get our most up-to-date flyers and endeavors! </p>
                </div>
            </div>
        </div>
        </div>
        <div className="h-20 w-full flex mellow-yellow z-0" id="triangle"></div>
      </>
    );
  } else {
    return (
      <div>
        <div className="-mt-20 py-20 px-20 bg-gradient-to-t from-contact-g2 to-g-yellow1" style={background}>
          <h1 className={`mb-20 font-coolvetica md:text-8xl text-7xl ${isAdmin ? 'text-red-500' : ''}`}>
            {isAdmin ? 'Edit Upcoming Events' : 'Upcoming Events'}
          </h1>

          {/* Two boxes */}
          <div className="flex flex-col gap-10 md:flex-row">
            {/* Event Box 1 */}
            <div className="flex-1" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <Image src={OrangePoster} style={imageStyle} alt="Orange Poster picture" />
              <div style={{ paddingTop: '20px' }}>
                {isAdmin ? (
                  <FontAwesomeIcon icon={faPen} size="2x" onClick={handleButtonClick}/>
                ) : (
                  <Buttonv2 text="RSVP" action={() => setShowModal(true)} color="blue" width="w-40" />
                  )}
              </div>
            </div>

            {/* Event Box 2 */}
            <div className="flex-1" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <Image src={BluePoster} style={imageStyle} alt="Blue Poster picture" />
              <div style={{ paddingTop: '20px' }}>
                {isAdmin ? (
                   <FontAwesomeIcon icon={faPen} size="2x" onClick={handleButtonClick}/>
                ) : (
                  <Buttonv2 text="RSVP" action={() => setShowModal(true)} color="blue" width="w-40" />
                )}
              </div>
              <div className="z-999">
                <RSVPOverlay isVisible={showModal} onClose={() => {setShowModal(false)}} eventName="Interest Meeting" date={new Date()} location="miller" description="something something" />
              </div>
            </div>

            {/* Event Box 3 */}
            <div className="flex-1" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <Image src={TanPoster} style={imageStyle} alt="Tan Poster picture" />
              <div style={{ paddingTop: '20px' }}>
                {isAdmin ? (
                  <FontAwesomeIcon icon={faPen} size="2x" onClick={handleButtonClick}/>
                ) : (
                  <Buttonv2 text="RSVP" action={() => setShowModal(true)} color="blue" width="w-40" />
                )}
              </div>
            </div>
          </div>

        </div>
        <div className="h-20 w-full flex mellow-yellow" style={{ zIndex: -50, position: 'relative'}} id="triangle"></div>
      </div>
    );
  }
}