import React  from 'react'
import logo from '../../images/logo.png';
import NavBar from '../Navbar';
import lantern from '../../images/lantern.png';

export default function ResourcesI({title}:{title:string}){
    const triangle: React.CSSProperties = {
        backgroundColor: "#FECB66",
      }; 
    return(
        <div className="wrapper drop-shadow-md">
            <div className="flex h-60 bg-center bg-cover bg-no-repeat bg-[url('../images/background.png')]">
                    <h1 className="ml-20 pt-20 justify-self-start text-6xl md:text-8xl font-kiona text-center">RESOURCES</h1>
            </div>            
            <div className="h-20 w-full bg-bottom bg-cover bg-no-repeat bg-[url('../images/background.png')]" id="triangle"></div>
        </div>
     )
}