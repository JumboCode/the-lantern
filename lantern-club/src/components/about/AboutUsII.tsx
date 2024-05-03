import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function AboutUsII() {
  const header_font: React.CSSProperties = {
    fontFamily: "coolvetica",
    lineHeight: "1",
    marginBottom: "3.5rem"
  };

  const triangle: React.CSSProperties = {
    backgroundColor: "#FECB66",
  };
  const round_box: React.CSSProperties = {
    display: "flex",
    gap: "20px",
    borderWidth: "4px",
    borderRadius: "1.5rem",
    padding: "2rem",
    filter: "drop-shadow(5px 10px 3px rgb(0 0 0 / 0.2)) drop-shadow(0 8px 5px rgb(0 0 0 / 0.08))",
  };

  return (
//     <div className="">
      <div className="-mt-56 md:-mt-40 yellow-gradient w-full pb-56 pt-48 md:pt-48  md:pt-36 md:pb-60  px-4 md:px-20"  id="pentagon-body"> 
        <p className="mb-10 md:mb-20 md:text-7xl pt-1.5 text-6xl" style={header_font}>Who are we?</p>

        {/* First section */}
        
        <div className="orange mellow-yellow-border flex flex-col md:flex-row items-center" style={round_box}>
          <div className="w-full md:w-1/3 rounded-3xl relative h-80 md:h-auto md:order-2 md:pr-11">
            <Image
                layout="responsive"
                width={800}
                height={600}
                src={"/images/LanternChatGPTMeeting.png"}
                style={{ borderRadius: '1.5rem' }}
                alt="Lantern Club members at the Chat GPT meeting"
            />
          </div>
          <div className="w-full md:w-2/3 font-nunito text-base md:text-xl md:order-1 md:px-11"> 
            <p className="leading-relaxed">
            The Lantern is a <span className="font-nunitobold">student-run, interdisciplinary think tank</span> that investigates the <span className="font-nunitobold">social impact of science and technology</span> to advocate for responsible innovation. Our goal is to <span className="font-nunitobold">educate the public</span> on issues like artificial intelligence, climate change tech, algorithms, ethical technology, and more.
            </p>
            
          </div>
        </div>
        {/* Dotted line */}

        <div className="mx-4 md:mx-20 h-7 md:h-14 outline-dashed outline-4"></div>

        {/* Second section */}
        <div className="blue border-blue-100 flex flex-col md:flex-row items-center" style={round_box}>
          <div className="w-full md:w-2/5 py-8 md:py-12 rounded-3xl relative h-80 md:h-auto md:order-1 md:ml-11">
            <Image
                layout="responsive"
                width={800}
                height={600}
                src={"/images/LanternChatGPT.png"}
                style={{ borderRadius: '1.5rem' }}
                alt="Lantern Club members at the Chat GPT meeting"
            />
          </div>
          <span className="text-white w-full md:w-3/5 font-nunito text-base md:text-lg md:order-2 md:pr-11 md:pl-7 md:text-xl"> 
            One of the primary objectives of The Lantern is to design and publish an <span className="font-nunitobold">eponymous magazine</span> each academic year. Our <span className="font-nunitobold">first issue</span> of The Lantern magazine was <span className="font-nunitobold">published on May 11, 2023</span>, with written submissions <span className="font-nunitobold">centering around science, technology, and society (STS) topics</span> from the Tufts University student body. We are excited to grow our community and <span className="font-nunitobold">work towards publishing future issues.</span>
            <br/><br/>
            <p className="font-black">You can read our first issue <Link href="/Magazine" target="_blank" rel="noopener noreferrer" className="underline">here.</Link></p>
          </span>
        </div>
    
        
      </div>
//       <div className="h-10 md:h-20 w-full" style={triangle} id="triangle"></div>

//      </div>
  );
}