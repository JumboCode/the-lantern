import React  from 'react'
import logo from '../images/logo.png';
import NavBar from './Navbar';
import lantern from '../images/lantern.png';

export default function Header({title}:{title:string}){
    const triangle: React.CSSProperties = {
        backgroundColor: "#FECB66",
      }; 
    return(
        <div>
            <NavBar/>
            <header className="flex h-13 bg-gradient-to-r from-gc1 via-gc2 via-gc3 via-gc4 to-gc5 grid grid-rows-3">
                {/* <div className="flex flex-row m-14"> */}
                    <img className="justify-self-end mr-20" src={lantern.src}/>
                    <h1 className="ml-20 justify-self-start text-8xl font-kiona text-right">The Lantern</h1>
                    <h1 className="justify-self-end mr-20 mt-40 text-4xl font-nunitolight text-center tracking-wide">A think-tank advocating socially responsible
                    <br></br> technology use and production</h1>
                    <img src={logo.src} height={200} width={200} className="flex inline-flex rotate-6 opacity-40 self-end"/>
                    
                
            </header>            
            <div className="h-8 w-full bg-gradient-to-r from-gc1 via-gc2 via-gc3 via-gc4 to-gc5" id="triangle"></div>

        </div>
     )
}