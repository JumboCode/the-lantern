import React  from 'react'
import Image from "next/image";

export default function Header({title}:{title:string}){
    const triangle: React.CSSProperties = {
        backgroundColor: "#FECB66",
      }; 
    return(
        <div className="flex items-start justify-center bg-center pb-40 md:pb-24 bg-cover bg-no-repeat bg-[url('/images/header-bg.png')]"  id="header2-pent">
                        <div className='flex flex-shrink-0 -mt-2 scale-90 md:scale-100'>
                                <Image src={"/images/short-lantern.png"} height={77} width={77} alt="lantern logo" />
                        </div>
                        <h1 className="flex text-5xl flex-shrink md:ml-16 md:mr-16 pt-28 md:pt-20 md:text-[5.2rem] font-kiona text-center">{title}</h1>
                        <div className='flex flex-shrink-0 -mt-2 scale-90 md:scale-100'>
                                <Image src={"/images/short-lantern.png"} height={77} width={77}  alt="lantern logo" />
                        </div>
                </div>     





    
     )
}