import React  from 'react'
import Image from "next/image";
import lantern from '../images/lantern.png';

export default function Header({title}:{title:string}){
    const triangle: React.CSSProperties = {
        backgroundColor: "#FECB66",
      }; 
    return(
        <div className="drop-shadow-md">
    <div className="flex items-center justify-center bg-center bg-cover bg-no-repeat bg-[url('../images/background.png')]">
        <div>
            <Image src={lantern} height={100} width={100} alt="lantern logo" />
        </div>
        <h1 className="ml-20 mr-20 mt-46 text-8xl font-kiona text-center">{title}</h1>
        <div>
            <Image src={lantern} height={100} width={100} alt="lantern logo" />
        </div>
    </div>            
    <div className="h-24 bg-bottom bg-cover bg-no-repeat bg-[url('../images/background.png')]" id="triangle"></div>
</div>


    
     )
}