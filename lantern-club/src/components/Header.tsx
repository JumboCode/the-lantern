import React  from 'react'
import Image from "next/image";
import lantern from '../images/short-lantern.png';

export default function Header({title}:{title:string}){
    const triangle: React.CSSProperties = {
        backgroundColor: "#FECB66",
      }; 
    return(
        <div className="drop-shadow-md">
                <div className="flex items-start justify-center bg-center bg-cover bg-no-repeat bg-[url('../images/header-bg.png')]">
                        <div className='flex flex-shrink-0'>
                                <Image src={lantern} height={90} width={90} alt="lantern logo" />
                        </div>
                        <h1 className="flex text-4xl flex-shrink md:ml-16 md:mr-16 pt-24 md:text-8xl font-kiona text-center">{title}</h1>
                        <div className='flex flex-shrink-0'>
                                <Image src={lantern} height={90} width={90}  alt="lantern logo" />
                        </div>
                </div>            
                <div className="h-20 bg-bottom bg-cover bg-no-repeat bg-[url('../images/header-bg.png')]" id="triangle"></div>
        </div>





    
     )
}