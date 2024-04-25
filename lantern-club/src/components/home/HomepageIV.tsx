import React from "react";
import Image from "next/image";
import Buttonv2 from "../Buttonv2";

export default function HomepageIV() {
  const headerFontStyle = {
    fontFamily: "coolvetica",
    fontSize: "90px",
    lineHeight: "1.2", 
  };
  const handleButtonClick = () => {
        // TODO
        console.log('Button clicked!');
      };

  return (
        <div>
    <div className="w-full blue2-gradient flex flex-col md:grid md:grid-cols-2 -mt-20 pb-20 pt-20 md:pt-0" id="pentagon2">
      {/* Image Column */}
      <div className="flex justify-center px-4 md:px-20 md:pt-32">
        <div className="mt-6">
          <Image
            src={"/images/lantern-head.png"}
            height={280}
            width={280}
            alt="LanternHead picture"
          />
        </div>
      </div>

      {/* Text Column */}
      <div className="px-4 md:px-20 md:mt-32 text-center md:text-left">
        <div className="mt-5">
          <p style={headerFontStyle}>Who are we?</p>
          <div className="pt-5 font-nunito text-xl">
            <p>We are a student-led think tank that investigates the societal impacts of modern technology. We want to break down complex ideas at the intersection of science, technology, and society (STS) through student-led discussions and research.</p>
          </div>
          <div className="mt-5">
            <a href="/AboutUs">
              {/* <button className="font-nunitosans tracking-wide bg-button-blue text-white font-bold py-2 px-9 rounded-full border-2 border-borderblue"> 
              Learn More</button> */}
              <Buttonv2 text="Learn More" action={handleButtonClick} color="blue" width="w-40" />
            </a>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}
