import React from "react";
import Image from "next/image";
import LanternHead from "../../images/lantern-head.png";

export default function HomepageIV() {
  const header_font: React.CSSProperties = {
    fontFamily: "coolvetica",
    fontSize: "90px",
    lineHeight: "1",
  };
  

  
  const image: React.CSSProperties = {
    minHeight: "280px",
    minWidth: "280px",
  };
  
  return (
    <div
        className="-mt-20 pb-20 pt-20 md:pt-0 w-full blue2-gradient flex grid grids-cols-1 justify-center md:grid-cols-2"
      >
        {/* image column div */}
        <div className="flex px-20 md:pl-44 md:pt-32">
          <div className="mt-6">
          <Image
            src={LanternHead}
            height={280}
            width={280}
            style={image}
            alt="LanternHead picture"
          />
          </div>
        </div>
        {/* text column div */}
        <div className="md:ml-10 md:mt-32 ">
            <div className="mt-5">
            <p style={header_font}>Who are we?</p>
                <div className="pt-5 font-nunito text-xl">
                <p>We are a student led think tank that investigates the</p>
                <p>societal impacts of modern technology. We want to break </p>
                <p>down complex ideas at the intersection of science, </p>
                <p>technology, and society (STS) through student led </p>
                <p>discussions and research.</p>
                </div>
                <div className="justify-self-center pt-1">
                    <div className="mt-5">
                    <a href="/AboutUs">
                        <button className="font-nunitosans tracking-wide bg-button-blue text-white font-bold py-2 px-9 rounded-full border-2 border-borderblue"> 
                        Learn More</button>
                    </a>
                    </div>
                </div>
            </div>
        </div>

        
    </div>
  );
}
