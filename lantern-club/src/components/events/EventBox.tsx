import Buttonv2 from "../Buttonv2";
import Image from "next/image";

import { Fragment, useState } from "react";
import EventOverlay from "../events/EventOverlay";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import { EventBoxProps } from "../../types/event"
import BluePoster from "../../images/blueposter.png";
import RSVPOverlay from "./RSVPOverlay";


const EventBox = ({event, isAdmin}: EventBoxProps) => {
  console.log(isAdmin);
  const handleButtonClick = () => {
    // TODO
    console.log("Button clicked!");
  };

  const imageStyle: React.CSSProperties = {
    width: "100%", 
    height: "100%", 
  };

  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Image
          src={event.imageURL}
          style={imageStyle}
          width={100}
          height={100}
          alt="Orange Poster picture"/>
      <div style={{ paddingTop: '20px' }}>
                {isAdmin ? (
                  <>
                  <FontAwesomeIcon icon={faPen} alt="Edit Button" size="2x" onClick={() => setShowModal(true)}/>
                  <div className="z-999">
                    <EventOverlay
                        isVisible={showModal}
                        onClose={() => {
                          setShowModal(false);
                        }}
                        type="Edit Event"
                        name={event.name}
                        date={event.date.toString()}
                        time={event.date.toString()}
                        location={event.location}
                        description={event.description}
                        // type="Edit Event"
                        // name="ava's half bday bash"
                        // date="2/29/2024"
                        // time="8:29pm"
                        // location="milla 4th floor"
                        // description="fun times with ava"
                      />      
                  </div>
                  </>
                ) : (
                  <>
                  <Buttonv2 text="RSVP" action={() => setShowModal(true)} color="blue" width="w-40" />
                  <div className="z-999">
                    <RSVPOverlay
                        isVisible={showModal}
                        onClose={() => {
                          setShowModal(false);
                        }}
                        name={event.name}
                        date={event.date.toString()}
                        time={event.time.toString()}
                        location={event.location}
                        description={event.description}
                        // type="Edit Event"
                        // name="ava's half bday bash"
                        // date="2/29/2024"
                        // time="8:29pm"
                        // location="milla 4th floor"
                        // description="fun times with ava"
                      />      
                  </div>
                  </>
                )}
      </div>      
    </>
  );
};

export { EventBox };
