import Buttonv2 from "../Buttonv2";
import Image from "next/image";

import { Fragment, useState } from "react";
import EventOverlay from "../events/EventOverlay";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import { EventBoxProps } from "../../types/event";
import formatDate from "../events/ConvertDate";
import { EventType } from "../../types/event";

const EventBox = ({ event, isAdmin }: EventBoxProps) => {
  // console.log(isAdmin);
  console.log(event.date);
  // console.log(formatDate(event.date));
  const handleButtonClick = () => {
    // TODO
    console.log("Button clicked!");
  };

  const imageStyle: React.CSSProperties = {
    width: "100%",
    height: "100%",
  };

  const [showModal, setShowModal] = useState(false);

  const handleClick = (isAdmin: boolean, event: EventType) => {
    console.log(event);
    if (isAdmin) {
      setShowModal(true);
      console.log("handleClick");
      return (
        <Fragment>
          <EventOverlay
            isVisible={showModal}
            onClose={() => {
              setShowModal(false);
            }}
            type="Edit Event"
            currEvent={event}
          />
        </Fragment>
      );
    }
  };

  return (
    <>
      <Image
        src={event.imageURL}
        style={imageStyle}
        width={100}
        height={100}
        alt="Orange Poster picture"
      />
      <div style={{ paddingTop: "20px" }}>
        {isAdmin ? (
          <FontAwesomeIcon
            icon={faPen}
            alt="Edit Button"
            size="2x"
            onClick={() => setShowModal(true)}
          />
        ) : (
          <Buttonv2
            text="RSVP"
            action={() => handleClick(isAdmin, event)}
            color="blue"
            width="w-40"
          />
        )}
      </div>{" "}
      {/* {showButton(isAdmin)} */}
      <Fragment>
        <EventOverlay
          isVisible={showModal}
          onClose={() => {
            setShowModal(false);
          }}
          type="Edit Event"
          currEvent={event}
        />
      </Fragment>
    </>
  );
};

export { EventBox };
