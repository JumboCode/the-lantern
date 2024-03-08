import { useState } from 'react';
import React from 'react';
import Image from "next/image";
import Buttonv2 from "../Buttonv2";
import Line from "../../images/line-RSVP.png";

interface OverlayProps {
    isVisible: boolean,
    onClose: () => void,
    eventName: string,
    date: Date,
    location: string,
    description: string
}

const RSVPOverlay = ( {isVisible, onClose, eventName, date, location, description}: OverlayProps ) => {
    if (!isVisible) return null; 

    const handleButtonClick = () => {
        onClose()
        console.log('Button clicked!')
    };

    const [formData, setFormData] = useState({name: "", email: ""});

    const handleChange = (event: any) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
    };

    const handleSubmit = (event: any) => {
        event.preventDefault();
        alert(`Name: ${formData.name}, Email: ${formData.email}`
        );
    };

        return (
            <form onSubmit={handleSubmit}>
            <div className="flex fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm justify-center items-center">
                <div className="w-[800px] flex flex-col orange-border border-4 max-h-screen rounded-3xl bg-white">
                    <button className="text-gray text-xl place-self-end mr-5 mt-2" onClick={() => onClose()}>x</button>
                    <div className="px-5 flex flex-col overflow-y-scroll">
                        <h2 className="text-5xl font-coolvetica">{eventName}</h2>
                        <h2 className="mt-5 font-nunito-bold text-2xl">When:</h2>
                        <text className="text-xl font-nunito">{date.toString()}</text>
                        <h2 className="mt-5 font-nunito-bold text-2xl">Where:</h2>
                        <text className="text-xl font-nunito">{location}</text>
                        <h2 className="mt-5 font-nunito-bold text-2xl">Event Description:</h2>
                        <text className="text-xl font-nunito">{description}</text>
                        <div className="flex mt-7 justify-self-center">
                            <Image src={Line} alt="dotted line" width={600}/>
                        </div>
                        <br></br>
                        <h2 className="text-4xl font-coolvetica">RSVP</h2>                   
                        <div>
                            <h2 className="mt-5 font-nunito text-md">Name</h2>
                            <input className="mt-2 p-3 w-full border-contact-g1 border-2 rounded-lg outline-gc2 h-8 contact-input" type="text" id="name" name="name" onChange={handleChange}></input>
                        </div>
                        <div>
                            <h2 className="mt-5 font-nunito text-md">Email</h2>
                            <input className="mt-2 p-3 w-full border-contact-g1 border-2 rounded-lg outline-gc2 h-8 contact-input" type="text" id="email" name="email" onChange={handleChange}></input>
                        </div>
                        <div className="flex justify-center text-md space-x-7 py-5">
                            <Buttonv2 text="RSVP" action={() => handleSubmit} color="blue" width="w-40"/>
                        </div>
                    </div>
                </div>
            </div>
            </form>
        );
}

export default RSVPOverlay;