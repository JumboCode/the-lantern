import React from "react";
import Image from "next/image";
import Define from "../images/define.png";
import Arrow from "../images/arrow.png";
import Image1 from "../../images/LanternChatGPTMeeting.png";
import Image2 from "../../images/LanternChatGPT.png";

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
    borderWidth: "4px",
    // marginTop: "2.5rem",
    // marginBottom: "2.5rem",
    borderRadius: "1.5rem",
    padding: "2rem",
    paddingRight: "6rem",
    paddingLeft: "6rem",
    filter: "drop-shadow(5px 10px 3px rgb(0 0 0 / 0.2)) drop-shadow(0 8px 5px rgb(0 0 0 / 0.08))",
  };



  return (
    <div>
      <div
        className="-mt-20 pt-20 yellow-gradient p-20"
        style={background}
      > 
        <p className="mb-20" style={header_font}>Who are we?</p>

        {/* First section */}
        
        <div
          className="orange mellow-yellow-border"
          style={round_box}
         >
          <span className="w-2/3 py-11 font-nunito text-2xl"> 
            The Lantern is a <span className="font-bold">student-run, interdisciplinary think tank</span> that investigates the <span className="font-bold">social impact of science and technology</span> to advocate for responsible innovation. Our goal is to <span className="font-bold">educate the public</span> on issues like artificial intelligence, climate change tech, algorithms, ethical technology, <span className="font-bold">and more.</span>
            <span className="font-bold"></span>
          </span>
          {/* <div className="bg-gray-100 w-1/3 rounded-3xl relative ml-4">
            <Image
                src={Image1} // The image you want to use
                alt="Lantern Club members at the Chat GPT meeting"
                style={{ borderRadius: '1.5rem' }}
                // layout="fill" // This makes the image fill the container
              />
          </div> */}

          <div className="w-2/5 h-2/5 rounded-3xl">
            <Image
                src={Image1}
                style={{ borderRadius: '1.5rem' }}
                alt="Lantern Club members at the Chat GPT meeting"

            />
        </div>


        </div>
        {/* Dotted line */}

        <div className="mx-20 h-14 outline-dashed outline-4"></div>

        {/* Second section */}
        <div
          className="blue border-blue-100"
          style={round_box}
         >
          {/* <div className="bg-gray-100 w-1/3 rounded-3xl relative mr-12">
            <Image
                src={Image2} // The image you want to use
                alt="Lantern Club's Chat GPT meeting"
                style={{ borderRadius: '1.5rem' }}
                layout="fill" // This makes the image fill the container
              />
          </div> */}

          <div className="w-2/5 h-2/5 py-12 rounded-3xl">
            <Image
                src={Image2}
                style={{ borderRadius: '1.5rem' }}
                alt="Lantern Club members at the Chat GPT meeting"

            />
          </div>

          <span className="text-white w-2/3 py-11 font-nunito text-2xl"> 
            One of the primary objectives of The Lantern is to design and publish an <span className="font-extrabold">eponymous magazine</span> each academic year. Our <span className="font-extrabold">first issue</span> of The Lantern magazine was <span className="font-extrabold">published on May 11, 2023</span>, with written submissions <span className="font-bold">centering around science, technology, and society (STS) topics</span> from the Tufts University student body. We are excited to grow our community and <span className="font-bold">work towards publishing future issues.</span>
            <br /><br />
            <p className="font-bold">You can read our first issue <a href="" className="underline">here.</a></p>
            
          </span>
          
        </div>
        
      </div>
      <div className="h-20 w-full" style={triangle} id="triangle"></div>

     </div>
  );
}