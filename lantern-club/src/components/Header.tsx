import React  from 'react'
import logo from '../images/logo.png';

export default function Header({title}:{title:string}){
     return(
        <div>
            <div className="flex flex-row">
            <img src={logo.src} className="h-16 mx-3.5"/>
            <h1 className="text-5xl font-kiona">The Lantern Club</h1>
            </div>
        </div>
     )
}