import React from "react";
import Image from "next/image";
import Background2 from "../images/background2.png";
import Define from "../images/define.png";
import Arrow from "../images/arrow.png";

export default function AboutUsII() {
  const header_font: React.CSSProperties = {
    fontFamily: "coolvetica",
    fontSize: "90px",
    lineHeight: "1",
  };
  const background: React.CSSProperties = {
    height: "auto",
  };
  const triangle: React.CSSProperties = {
    backgroundColor: "#FECB66",
  };
  const round_box: React.CSSProperties = {
    display: "flex",
    gap: "20px",
    borderWidth: "2px",
    // marginTop: "2.5rem",
    // marginBottom: "2.5rem",
    borderRadius: "1.5rem",
    padding: "5rem",
    filter: "drop-shadow(5px 10px 3px rgb(0 0 0 / 0.2)) drop-shadow(0 8px 5px rgb(0 0 0 / 0.08))",
  };



  return (
    <div>
      <div
        className="pt-20 yellow-gradient p-20"
        style={background}
      > 
        <p className="mb-20" style={header_font}>Who are we?</p>

        {/* First section */}
        
        <div
          className="orange mellow-yellow-border"
          style={round_box}
         >
          <span className="w-2/3 py-5 font-nunito text-xl"> 
            The Lantern is a <span className="font-bold">student-run, interdisciplinary think tank</span> that investigates the <span className="font-bold">social impact of science and technology</span> to advocate for responsible innovation. Our goal is to <span className="font-bold">educate the public</span> on issues like artificial intelligence, climate change tech, algorithms, ethical technology, <span className="font-bold">and more.</span>
            <span className="font-bold"></span>
          </span>
          <div className="bg-gray-100 w-1/3 rounded-3xl"></div>
        </div>
        {/* Dotted line */}

        <div className="mx-20 h-14 outline-dashed outline-4"></div>

        {/* Second section */}
        <div
          className="blue border-blue-100"
          style={round_box}
         >
          <div className="bg-gray-100 w-1/3 rounded-3xl"></div>
          <span className="text-white w-2/3 py-5 font-nunito text-xl"> 
            One of the primary objectives of The Lantern is to design and publish an <span className="font-bold">eponymous magazine</span> each academic year. Our <span className="font-bold">first issue</span> of The Lantern magazine was <span className="font-bold">published on May 11, 2023</span>, with written submissions <span className="font-bold">centering around science, technology, and society (STS) topics</span> from the Tufts University student body. We are excited to grow our community and <span className="font-bold">work towards publishing future issues.</span>
            <br /><br />
            <p className="font-bold">You can read our first issue <a href="" className="underline">here.</a></p>
            
          </span>
          
        </div>
        
      </div>
      <div className="h-20 w-full" style={triangle} id="triangle"></div>

     </div>
  );
}