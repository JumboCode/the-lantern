import React  from 'react'
import logo from '../images/logo.png';
import NavBar from './Navbar';
import lantern from '../images/lantern.png';

export default function Header({title}:{title:string}){
     return(
        <div>
            <NavBar/>
            <header className="flex flex-row h-13 bg-gradient-to-tr from-lanternblue from-40% to-lanternyellow to-80%">
                <div className="flex flex-row m-14">
                    <h1 className="text-7xl font-kiona text-right">The Lantern</h1>
                    <img src={lantern.src} className="container justify-end h-60 w-auto flex flex-row"/>
                 </div>
            </header>
        </div>
     )
}