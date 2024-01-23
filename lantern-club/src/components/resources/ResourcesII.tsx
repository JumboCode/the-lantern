import React from 'react';
import Image from 'next/image';
import Define from '../../images/define.png';
import Arrow from '../../images/arrow.png';

export default function ResourcesI() {
  const background: React.CSSProperties = {
    height: "auto",
  };
  
  const headerFontStyle = {
    fontFamily: 'coolvetica',
    fontSize: '90px',
    lineHeight: '1',
  };

  const buttonStyle = {
    backgroundColor: "#4279BC",
    borderColor: "#94BBE3",
    borderWidth: "2px",
    color: "white",
    fontSize: "19px",
    borderRadius: "35px",
    width: "150px",
    height: "45px",
    fontFamily: "nunito",
};

  const imageStyle = {
    minHeight: '300px',
    minWidth: '300px',
  };

  const triangleStyle = {
    backgroundColor: '#FECB66',
  };

  const round_box: React.CSSProperties = {
    display: "flex",
    gap: "20px",
    borderWidth: "2px",
    borderRadius: "1.5rem",
    width: "1000px",
    height: "200px",
    padding: "5rem",
    filter: "drop-shadow(5px 10px 3px rgb(0 0 0 / 0.2)) drop-shadow(0 8px 5px rgb(0 0 0 / 0.08))",
    margin: "0 auto"
  };

  return (
    <div>
      <div 
        className="-mt-10 py-40 px-20 yellow-gradient p-10" style={background}> 
        {/* text side */}
        <div className="px-4 md:px-0 md:ml-10">
            <p className="mb-20" style={headerFontStyle}>
                Our e-List
            </p>
            <div className="orange mellow-yellow-border" style={round_box}>
              <div className="flex py-3 font-nunito text-xl items-center">
              <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
            aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum 
            dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui offici. 
              </p>
            </div>
        </div>
        {/* <div className="mb-20"> */}
        <button
                style={buttonStyle}
                className="font-nunitosans tracking-wide hover:underline flex items-center justify-center font-bold"
            >
                   Join our e-list!
            </button>
        {/* </div> */}
        </div>

        {/* image side */}
        <div className="flex justify-center items-center mt-4 md:mt-20">
            <div>
                {/* <Image
                    src={Poster.src}
                    height={280}
                    width={280}
                    style={imageStyle}
                    alt="submission poster"
                /> */}
            </div>
        </div>
      </div>
      <div className="h-20 w-full" style={triangleStyle} id="triangle"></div>
    </div>
  );
}
