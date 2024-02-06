import React from 'react';
import Image from 'next/image';
import Define from '../../images/define.png';
import Arrow from '../../images/arrow.png';

export default function ResourcesI() {
  const background: React.CSSProperties = {
    height: "800px",
  };
  
  const headerFontStyle = {
    fontFamily: 'coolvetica',
    // fontSize: '90px',
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
    margin: "auto",
    display: "block",
    marginTop: "20px",
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
        <div className="py-20 px-4 md:px-0 md:ml-10">
            <p className="py-5 mb-10 md:text-8xl text-6xl" style={headerFontStyle}>
                Our e-List
            </p>
            <div className="flex-col md:flex-row md:grid md:grid-cols-2 orange mellow-yellow-border font-nunito text-xl" style={round_box}>
            <div className="flex flex-col justify-center items-start px-10">
              <p> Our E-list is the most direct way for members to stay updated 
                with announcements about club events like discussion groups and
                movie screenings, our magazine publishing timeline and meetings, 
                submission opportunities, professor talks, local STS 
                conferences, and more! 
              </p>
            </div>
        </div>
        {/* Arrow */}
        <div className="flex flex-col justify-around items-center max-w-screen-md mx-auto">
        <div className="py-4">
          <div className="w-[46px] h-[96px] sm:w-[92px] sm:h-[192px]">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 108 216" fill="none">
                <path d="M2 2C28.6056 2 49.1029 14.5077 62.5771 37.6064C72.9036 55.3089 73.9233 76.4401 69.421 95.8714C67.0601 106.061 55.8048 143.057 38.2538 133.374C32.6172 130.264 29.5439 123.165 32.5198 117.328C36.8306 108.872 45.7543 105.464 54.4848 103.178C63.4485 100.83 77.2614 99.8478 85.2357 105.212C94.2341 111.266 97.3434 123.261 98.3685 133.512C99.6289 146.117 99.0619 159.8 96.4726 172.171C95.0826 178.812 92.3766 186.047 91.8946 192.795C91.5809 197.187 89.0587 201.408 88.6114 205.881C88.4363 207.632 87.8665 214.228 86.8542 209.673C86.3307 207.317 83.6955 204.838 83.571 202.598C83.4564 200.535 82.4685 198.116 81.4901 196.355C80.3522 194.307 77.2705 184.442 78.6231 190.529C79.5969 194.911 82.3377 198.906 83.5248 203.061C84.0788 205 83.7653 207.003 85.0508 208.61C86.7619 210.748 84.176 214.263 88.5652 211.939C91.836 210.207 94.8945 206.72 97.5361 204.078C98.9689 202.645 100.404 200.944 102.299 200.101C103.264 199.672 107.199 196.357 104.75 198.806C99.3448 204.211 92.5867 211.801 85.2357 214.251" stroke="black" stroke-width="3" stroke-linecap="round" stroke-dasharray="10 10"/>
              </svg>
          </div>
        {/* <svg xmlns="http://www.w3.org/2000/svg" width="92" height="192" viewBox="0 0 108 216" fill="none">
          
          <path d="M2 2C28.6056 2 49.1029 14.5077 62.5771 37.6064C72.9036 55.3089 73.9233 76.4401 69.421 95.8714C67.0601 106.061 55.8048 143.057 38.2538 133.374C32.6172 130.264 29.5439 123.165 32.5198 117.328C36.8306 108.872 45.7543 105.464 54.4848 103.178C63.4485 100.83 77.2614 99.8478 85.2357 105.212C94.2341 111.266 97.3434 123.261 98.3685 133.512C99.6289 146.117 99.0619 159.8 96.4726 172.171C95.0826 178.812 92.3766 186.047 91.8946 192.795C91.5809 197.187 89.0587 201.408 88.6114 205.881C88.4363 207.632 87.8665 214.228 86.8542 209.673C86.3307 207.317 83.6955 204.838 83.571 202.598C83.4564 200.535 82.4685 198.116 81.4901 196.355C80.3522 194.307 77.2705 184.442 78.6231 190.529C79.5969 194.911 82.3377 198.906 83.5248 203.061C84.0788 205 83.7653 207.003 85.0508 208.61C86.7619 210.748 84.176 214.263 88.5652 211.939C91.836 210.207 94.8945 206.72 97.5361 204.078C98.9689 202.645 100.404 200.944 102.299 200.101C103.264 199.672 107.199 196.357 104.75 198.806C99.3448 204.211 92.5867 211.801 85.2357 214.251" stroke="black" stroke-width="3" stroke-linecap="round" stroke-dasharray="10 10"/>
        </svg> */}
        </div>
        {/* Button */}
        <a href="https://docs.google.com/forms/d/e/1FAIpQLScoIJSqdbxqKcswFmnCiFj65L2_P7dqogSpGLegc0EaORK9MA/viewform">
        <div className="flex flex-col justify-around items-center max-w-screen-md mx-auto">
        <button
          style={buttonStyle}
          className="font-nunitosans tracking-wide hover:underline flex items-center justify-center max-w-screen-md mx-auto font-bold mt-4">
            Join our e-list!
        </button>
        </div>
        </a>
        </div>
        </div>
      </div>
      <div className="h-20 flex w-full" style={triangleStyle} id="triangle"></div>
    </div>
  );
}
