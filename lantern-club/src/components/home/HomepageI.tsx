import React  from 'react'
import logo from '../../images/logo.png';
import NavBar from '../Navbar';
import lantern from '../../images/lantern.png';

export default function HomepageI({title}:{title:string}){
    const triangle: React.CSSProperties = {
        backgroundColor: "#FECB66",
      }; 
    return(
        <div className="wrapper drop-shadow-md">
            <div className="flex h-13 bg-center bg-cover bg-no-repeat bg-[url('../images/background.png')] grid grid-rows-3">
                {/* <div className="flex flex-row m-14"> */}
                    <img className="justify-self-end mr-20" src={lantern.src}/>
                    <h1 className="ml-20 justify-self-start text-8xl font-kiona text-right">The Lantern</h1>
                    <h1 className="justify-self-end mr-20 mt-40 text-4xl font-nunitolight text-center tracking-wide">A think-tank advocating socially responsible
                    <br></br> technology use and production</h1>
                    <img src={logo.src} height={200} width={200} className="flex inline-flex rotate-6 opacity-40 self-end"/>
            </div>            
            <div className="h-20 w-full bg-bottom bg-cover bg-no-repeat bg-[url('../images/background.png')]" id="triangle"></div>
        </div>
     )
}