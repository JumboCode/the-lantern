import React from "react";
import Image from "next/image";
import Background2 from "../images/background2.png";
import Define from "../images/define.png";
import Arrow from "../images/arrow.png";

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
    borderWidth: "2px",
    marginTop: "2.5rem",
    marginBottom: "2.5rem",
    borderRadius: "1.5rem",
    padding: "5rem",
    filter: "drop-shadow(5px 10px 3px rgb(0 0 0 / 0.2)) drop-shadow(0 8px 5px rgb(0 0 0 / 0.08))",
  };

  return (
    <div>
      <div
        className="-mt-20 py-40 px-20 orange-gradient"
        style={background}
      > 
        <p style={header_font}>Who is STS?</p>
        <div
        className="pale-yellow mellow-yellow-border"
        style={round_box}
        >
          <div className="w-1/2 py-5 font-nunito text-xl"
           >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui offici. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</div>
          <div className="bg-gray-100 w-1/2 rounded-3xl"></div>
        </div>
      </div>

      
      <div className="h-20 w-full" style={triangle} id="triangle"></div>

     </div>
  );
}