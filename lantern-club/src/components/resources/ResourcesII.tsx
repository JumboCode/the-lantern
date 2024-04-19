import React from 'react';
import Image from 'next/image';
// import Define from '../../images/define.png';
// import Arrow from '../../images/arrow.png';
import Buttonv2 from "../Buttonv2";
import Arrow from '../../images/arrow_animation.png';

export default function ResourcesI() {
  const background: React.CSSProperties = {
    height: "800px",
  };
  
  const headerFontStyle = {
    fontFamily: 'coolvetica',
    lineHeight: '1',
  };

  const triangleStyle = {
    backgroundColor: '#FECB66',
  };

  const round_box: React.CSSProperties = {
    display: "flex",
    gap: "10px",
    borderWidth: "2px",
    borderRadius: "1.5rem",
    padding: "1.5rem",
    filter: "drop-shadow(5px 10px 3px rgb(0 0 0 / 0.2)) drop-shadow(0 8px 5px rgb(0 0 0 / 0.08))",
  };

  return (
    <div>
      <div 
        className="-mt-20 overflow-hidden py-30 px-4 md:px-0 md:px-10 yellow-gradient" style={background}> 
        {/* text side */}
        <div className="pt-20 pb-12 px-4 md:px-0 md:ml-10">
            <p className="py-5 mb-10 mt-10 md:text-8xl text-6xl" style={headerFontStyle}>
                Our E-List
            </p>
            <div className="flex-col md:flex-row md:grid md:grid-cols-2 orange mellow-yellow-border font-nunito text-xl" style={round_box}>
            <div className="flex flex-col justify-center items-start px-10">
              <p> Our E-List is the most direct way for members to stay updated 
                with announcements about club events like discussion groups and
                movie screenings, our magazine publishing timeline and meetings, 
                submission opportunities, professor talks, local STS 
                conferences, and more!
              </p>
            </div>
        </div>
        {/* Arrow */}
        <div className="flex flex-col justify-around items-center max-w-screen-md mx-auto mt-6">
        <div className="py-4">
          <div className="m:w-[92px] sm:h-[192px]">
              <Image src={'/images/arrow_animation.png'} width={175} height={175} alt="arrow animation" />
          </div>
        </div>
        {/* Button */}
        <Buttonv2 text="Join our e-list!" action={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLScoIJSqdbxqKcswFmnCiFj65L2_P7dqogSpGLegc0EaORK9MA/viewform')} color="blue" width="w-48" />

        </div>
        </div>
      </div>
      <div className="h-20 flex w-full" style={triangleStyle} id="triangle"></div>
    </div>
  );
}
