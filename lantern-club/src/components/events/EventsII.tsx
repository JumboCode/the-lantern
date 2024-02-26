import React from "react";
import Image from "next/image";
import OrangePoster from '../../images/orangeposter.png';
import BluePoster from '../../images/blueposter.png';
import TanPoster from '../../images/tanposter.png';


export default function EventsII() {
  const header_font: React.CSSProperties = {
    fontFamily: "coolvetica",
    fontSize: "90px",
    lineHeight: "1",
  };
  const background: React.CSSProperties = {
    height: "auto",
  };

  const imageStyle: React.CSSProperties = {
    width: "100%", // Ensure image takes up the entire width
    height: "100%", // Ensure image takes up the entire height
  };

  return (
    <div>
      <div className="-mt-20 py-20 px-20 blue2-gradient" style={background}>
        <h1 className="mb-20 font-coolvetica md:text-8xl text-7xl">Past Events</h1>

        {/* Two boxes */}
        <div className="flex flex-col gap-10 md:flex-row">
          {/* Event Box 1 */}
          <div className="flex-1">
            <Image src={OrangePoster} style={imageStyle} alt="Orange Poster picture" />
          </div>

          {/* Event Box 2 */}
          <div className="flex-1">
            <Image src={BluePoster} style={imageStyle} alt="Blue Poster picture" />
          </div>

          {/* Event Box 3 */}
          <div className="flex-1">
            <Image src={TanPoster} style={imageStyle} alt="Tan Poster picture" />
          </div>
        </div>
      </div>
    </div>
  );
}