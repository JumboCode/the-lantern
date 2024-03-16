import React, { useState, useEffect } from "react";
import Image from "next/image";
import OrangePoster from "../../images/orangeposter.png";
import BluePoster from "../../images/blueposter.png";
import TanPoster from "../../images/tanposter.png";
import Buttonv2 from "../Buttonv2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";

type EventsIIProps = {
  isAdmin: boolean;
  isAdminEdit: boolean;
  handleEditButtonClick: () => void;
};


export default function EventsII({ isAdmin, isAdminEdit, handleEditButtonClick }: EventsIIProps) {

  const header_font: React.CSSProperties = {
    fontFamily: "coolvetica",
    fontSize: "90px",
    lineHeight: "1",
  };

  const background: React.CSSProperties = {
    height: "auto",
  };

  const imageStyle: React.CSSProperties = {
    width: "100%",
    height: "100%",
  };


  const handleButtonClick = () => {
    // TODO: Implement the button click logic
    console.log("Button clicked!");
  };


  // ********* IS ADMIN EDIT BOOLEAN ********
  return (
    <div>
      <div className="-mt-20 py-20 px-20 blue2-gradient" style={background}>
        <h1 className={"mb-20 font-coolvetica md:text-8xl text-7xl"}>
        {isAdminEdit ? "Delete Past Events" : "Past Events"}
        </h1>

        {/* Two boxes */}
        <div className="flex flex-col gap-10 md:flex-row">
          {/* Event Box 1 */}
          <div className="flex-1" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Image src={OrangePoster} style={imageStyle} alt="Orange Poster picture" />
            {isAdminEdit && (
              <div style={{ paddingTop: '20px'}}>
                <FontAwesomeIcon icon={faTrashCan} alt="Delete Button" size="2x" onClick={handleButtonClick} />
              </div>
            )}
          </div>

          {/* Event Box 2 */}
          <div className="flex-1" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Image src={BluePoster} style={imageStyle} alt="Blue Poster picture" />
            {isAdminEdit && (
              <div style={{ paddingTop: '20px'}}>
                <FontAwesomeIcon icon={faTrashCan} alt="Delete Button" size="2x" onClick={handleButtonClick} />
              </div>
            )}
          </div>

          {/* Event Box 3 */}
          <div className="flex-1" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Image src={TanPoster} style={imageStyle} alt="Tan Poster picture" />
            {isAdminEdit && (
              <div style={{ paddingTop: '20px'}}>
                <FontAwesomeIcon icon={faTrashCan} alt="Delete Button" size="2x" onClick={handleButtonClick} />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}