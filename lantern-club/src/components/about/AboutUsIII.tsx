import React from "react";
import Image from "next/image";
import Define from "../images/define.png";
import Arrow from "../images/arrow.png";
import Image3 from "../../images/sts-resources.png";


export default function AboutUsIII() {
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
    marginTop: "2.5rem",
    marginBottom: "2.5rem",
    borderRadius: "1.5rem",
    padding: "5rem",
    filter: "drop-shadow(5px 10px 3px rgba(0, 0, 0, 0.5)) drop-shadow(0 8px 5px rgba(0, 0, 0, 0.5));",
  };

  return (
    <div>
      <div
        className="-mt-20 py-60 px-20 orange-gradient"
        style={background}
      > 
        <p style={header_font}>Who is STS?</p>
        <div
        className="pale-yellow mellow-yellow-border"
        style={round_box}
        >
          <div className="w-1/2 py-5 font-nunito text-2xl flex ml-4"
           ><p>Science, Technology & Society (STS) is an interdisciplinary field of study that seeks to explore and understand the many ways that modern science and technology shape modern culture, values, and institutions, and how modern values shape science and technology. STS examines how science and technology emerge, how they enter society, how they change through social processes, and how society changes in response to science and technology. (<a href="https://majorsandminors.dasa.ncsu.edu/science-technology-society/#:~:text=Science%2C%20Technology%20%26%20Society%20(STS,values%20shape%20science%20and%20technology." className="text-blue-600 underline">NC State University.</a>)</p></div>
          <div className="bg-gray-100 w-1/2 rounded-3xl relative ml-10 mr-4">
            <Image
              src={Image3} // The image you want to use
              alt="Background"
              layout="fill" // This makes the image fill the container
            />
          </div>
        </div>
      </div>

      
      <div className="h-20 w-full" style={triangle} id="triangle"></div>

     </div>
  );
}