import React from "react";
import Image from "next/image";

export default function AboutUsIII() {
  const header_font: React.CSSProperties = {
    fontFamily: "coolvetica",
    lineHeight: "1",
    marginBottom: "3.5rem"
  };
  const background: React.CSSProperties = {
    height: "auto",
  };
  const triangle: React.CSSProperties = {
    backgroundColor: "#FECB66",
  };
  const round_box: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    borderWidth: "4px",
    marginBottom: "2.5rem",
    borderRadius: "1.5rem",
    padding: "2rem",
    filter: "drop-shadow(5px 10px 3px rgba(0, 0, 0, 0.5)) drop-shadow(0 8px 5px rgba(0, 0, 0, 0.5));",
  };

  return (
      
      <div className="pb-44 md:-mt-40 -mt-56 pt-40 md:pb-32 px-4 md:px-20 orange-gradient"   id="pentagon-body"> 
        <p className="md:text-7xl text-6xl" style={header_font}> What is STS?</p>
        <div className="pale-yellow mellow-yellow-border" style={round_box}>
          <div className="flex flex-col md:flex-row items-center">
            <div className="w-full md:w-1/2 py-5 font-nunito text-lg md:text-xl px-4 md:px-0">
              <p>Science, Technology & Society (STS) is an interdisciplinary field of study that seeks to explore and understand the many ways that modern science and technology shape modern culture, values, and institutions, and how modern values shape science and technology. STS examines how science and technology emerge, how they enter society, how they change through social processes, and how society changes in response to science and technology. (<a href="https://majorsandminors.dasa.ncsu.edu/science-technology-society/#:~:text=Science%2C%20Technology%20%26%20Society%20(STS,values%20shape%20science%20and%20technology." target="_blank" rel="noopener noreferrer" className="text-sky-600 underline">NC State University.</a>)</p>
            </div>
            <div className="w-full md:w-1/2 rounded-3xl relative md:h-auto ml-0 md:ml-10 mr-0 md:mr-4">
              <Image
                src={"/images/sts-resources.png"} 
                alt="Background"
                layout="responsive"
                width={800}
                height={600}
                className="rounded-3xl"
              />
            </div>
          </div>
        </div>
      </div>
      
  );
}