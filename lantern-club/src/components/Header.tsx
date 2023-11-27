import React  from 'react'
import logo from '../images/logo.png';
import NavBar from './Navbar';

export default function Header({title}:{title:string}){
     return(
        <div>
            <NavBar/>
            <header className="flex h-13 bg-gradient-to-tr from-lanternblue from-40% to-lanternyellow to-80%">
                <div className="flex flex-row m-14">
                    <img src={logo.src} className="h-16 mx-3.5"/>
                    <h1 className="text-5xl font-kiona text-right">The Lantern Club</h1>
                 </div>
            </header>
        </div>
     )
}