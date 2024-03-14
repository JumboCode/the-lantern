import Buttonv2 from "../Buttonv2";
import Image from "next/image";

import { Fragment, useState } from "react";
import EventOverlay from "../events/EventOverlay";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";

interface props {
  image: string;
  isAdmin: boolean;
}

const EventBox = ({ image, isAdmin }: props) => {
  console.log(isAdmin);
  const handleButtonClick = () => {
    // TODO
    console.log("Button clicked!");
  };

  const imageStyle: React.CSSProperties = {
    width: "100%", // Ensure image takes up the entire width
    height: "100%", // Ensure image takes up the entire height
  };

  const [showModal, setShowModal] = useState(false);

  // const setModal = (status: boolean) => {
  //   if (status) {
  //     setShowModal(true);
  //   } else {
  //     setShowModal(false);
  //   }
  // };

  const handleClick = (isAdmin: boolean) => {
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
            name="ava's half bday bash"
            date="2/29/2024"
            time="8:29pm"
            location="milla 4th floor"
            description="fun times with ava"
          />
        </Fragment>
      );
    }
  };

  return (
    <>
      <Image
          src={image}
          style={imageStyle}
          width={100}
          height={100}
          alt="Orange Poster picture"/>
      <div style={{ paddingTop: '20px' }}>
                {isAdmin ? (
                  <FontAwesomeIcon icon={faPen} alt="Edit Button" size="2x" onClick={() => setShowModal(true)}/>
                ) : (
                  <Buttonv2 text="RSVP" action={handleClick} color="blue" width="w-40" />
                )}
      </div>      {/* {showButton(isAdmin)} */}

      <Fragment>
        <EventOverlay
          isVisible={showModal}
          onClose={() => {
            setShowModal(false);
          }}
          type="Edit Event"
          name="ava's half bday bash"
          date="2/29/2024"
          time="8:29pm"
          location="milla 4th floor"
          description="fun times with ava"
        />
      </Fragment>
    </>
  );
};

export { EventBox };
