import React from 'react';
import Image from 'next/image';
import Define from '../../images/define.png';
import Arrow from '../../images/arrow.png';

export default function ResourcesI() {
  const headerFont = {
    fontFamily: 'coolvetica',
    fontSize: '90px',
    lineHeight: '1',
  };

  const imageStyle = {
    minHeight: '300px',
    minWidth: '300px',
  };

  const triangleStyle = {
    backgroundColor: '#FECB66',
  };

  return (
    <div>
      <div className="-mt-20 pt-20 w-full yellow-gradient flex flex-col md:flex-row md:grid md:grid-cols-2">
        {/* Image column */}
        <div className="flex justify-center items-center px-5">
          <Image
            src={Define}
            height={300}
            width={300}
            style={imageStyle}
            alt="Define picture"
          />
        </div>

        {/* Text column */}
        <div className="flex flex-col justify-center items-start px-5">
          <p style={headerFont}>Check out our latest</p>
          <p style={headerFont}>issue!</p>
          <div className="flex flex-row justify-between items-center w-full mt-5">
            <p className="font-nunito text-xl">Issue No 1 Spring 2023</p>
            <a href="/Magazine">
              <Image className='mr-20' src={Arrow} height={120} width={120} alt="arrow icon" />
            </a>
          </div>
        </div>
      </div>
      <div className="h-20 w-full" style={triangleStyle} id="triangle"></div>
    </div>
  );
}
