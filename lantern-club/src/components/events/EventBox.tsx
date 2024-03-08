import Buttonv2 from "../Buttonv2";
import Image from "next/image";
import OrangePoster from "../../images/orangeposter.png";
import BluePoster from "../../images/blueposter.png";
import TanPoster from "../../images/tanposter.png";
import { useState } from "react";
import EventOverlay from "../events/EventOverlay";

const handleButtonClick = () => {
  // TODO
  console.log("Button clicked!");
};

const imageStyle: React.CSSProperties = {
  width: "100%", // Ensure image takes up the entire width
  height: "100%", // Ensure image takes up the entire height
};

const [showModal, setShowModal] = useState(false);

const setModal = (status: boolean) => {
  if (status) {
    setShowModal(true);
  } else {
    setShowModal(false);
  }
};

const showButton = (isAdmin: boolean) => {
  if (isAdmin) {
    return (
      <div>
        <Buttonv2
          text="Edit Event"
          action={() => setModal(true)}
          color="orange"
          width="w-48"
        />
        <EventOverlay
          isVisible={showModal}
          onClose={() => {
            setModal(false);
          }}
          type="Edit Event"
          name="ava's half bday bash"
          date="2/29/2024"
          time="8:29pm"
          location="milla 4th floor"
          description="fun times with ava"
        />
      </div>
    );
  } else {
    return (
      <div>
        <Buttonv2
          text="RSVP"
          action={handleButtonClick}
          color="blue"
          width="w-40"
        />
      </div>
    );
  }
};

const EventBox = (image: string, isAdmin: boolean) => {
  return (
    <div
      className="flex-1"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div>
        <Image
          src="https://placehold.co/400"
          width={100}
          height={100}
          alt="Orange Poster picture"
        />
      </div>
      <div style={{ paddingTop: "20px" }}>showButton(isAdmin)</div>
    </div>
  );
};

export { EventBox };
