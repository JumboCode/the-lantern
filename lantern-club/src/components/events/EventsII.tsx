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
      <div
        className="-mt-20 py-20 px-20 blue2-gradient"
        style={background}
      > 
        <p style={header_font} className="mb-20 md:text-8xl text-7xl">Past Events</p>

        {/* Two boxes */}
        <div className="flex gap-10"
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

      </div>
     </div>
     
  );
}