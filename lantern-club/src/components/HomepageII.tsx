import React from "react";
import Image from "next/image";
import Background2 from "../images/background2.png";
import Define from "../images/define.png";
import Arrow from "../images/arrow.png";

export default function HomepageII() {
  const header_font: React.CSSProperties = {
    fontFamily: "coolvetica",
    fontSize: "90px",
    lineHeight: "1",
  };
  const background: React.CSSProperties = {
    height: "500px",
  };
  const triangle: React.CSSProperties = {
    backgroundColor: "#FECB66",
  };

  const image: React.CSSProperties = {
    minHeight: "300px",
    minWidth: "300px",
  };

  return (
    <div>
      <div
        className="w-full yellow-gradient flex flex-row grid grid-cols-2"
        style={background}
      >
        {/* image column div */}
        <div className="relative ml-20 px-20 mt-20">
          <Image
            src={Define}
            height={300}
            width={300}
            style={image}
            alt="Define picture"
          />
        </div>
        {/* text column div */}
        <div className="relative mt-20 ml-10 py-20">
          <p style={header_font}>Check out our latest</p>
          <p style={header_font}>issue!</p>
          <div className="flex grid grid-cols-2">
            <div className="mt-5">
              <p className="font-nunito text-xl mt-8">Issue No 1 Spring 2023</p>
            </div>
            <div className="justify-self-center mr-20">
              {/* <a href="/Magazine">
                <Image src={Arrow} height={120} width={120} alt="arrow icon" />
              </a> */}
              <Buttonv2 text="Sign Out" action={() => signOut()} color="blue" width="w-48" />
            </div>
          </div>
        </div>
      </div>
      <div className="h-20 w-full" style={triangle} id="triangle"></div>
    </div>
  );
}
