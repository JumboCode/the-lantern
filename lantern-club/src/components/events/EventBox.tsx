import Buttonv2 from "../Buttonv2";
import Image from "next/image";

import { useState } from "react";
import EventOverlay from "../events/EventOverlay";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import { EventBoxProps } from "../../types/event"
// import BluePoster from "../../images/blueposter.png";
import RSVPOverlay from "./RSVPOverlay";
import { useSession } from "next-auth/react";

const EventBox = ({event, isAdminEdit}: EventBoxProps) => {
 
  const imageStyle: React.CSSProperties = {
    width: "100%", 
    height: "100%", 
  };
  const { data: session } = useSession();
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Image
        src={event.imageURL}
        style={imageStyle}
        width={100}
        height={100}
        alt="Orange Poster picture"
      />
      <div style={{ paddingTop: '20px' }}>
        {isAdminEdit ? (
          <>
            <FontAwesomeIcon icon={faPen} size="2x" onClick={() => setShowModal(true)} />
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
              />
            </div>
          </>
        ) : !session?.user.isAdmin && (
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
              />
            </div>
          </>
        )}
      </div>
    </>
  );
  
};

export { EventBox };
