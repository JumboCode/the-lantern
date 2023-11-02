import React  from 'react'
import logo from '../images/logo.png';

export default function Header({title}:{title:string}){
     return(
        <div>
            <div className="flex flex-row bg-gradient-to-r from-sky-600 to-purple-900">
            <img src={logo.src} className="h-16 mx-3.5"/>
            <h1 className="text-5xl font-kiona hover:font-serif hover:rotate-90">The Lantern Club</h1>
            </div>
        </div>
     )
}