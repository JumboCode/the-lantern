import { useState } from 'react';
import React from 'react';
import Image from "next/image";
import Buttonv2 from "../Buttonv2";
import { EventType } from '@/types/event';
interface OverlayProps {
    isVisible: boolean,
    onClose: () => void,
    event: EventType
}

const RSVPOverlay = ( {isVisible, onClose, event}: OverlayProps ) => {
    if (!isVisible) return null; 

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
        <div className="flex fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm justify-center items-center z-50">
            <div className="w-[700px] h-[600px] flex flex-col orange-border border-4 max-h-screen rounded-3xl bg-white">
                <button className="text-gray text-xl place-self-end mr-5 mt-2" onClick={() => onClose()}>x</button>
                <div className="px-5 flex flex-col overflow-y-scroll">
                    <h2 className="text-5xl font-coolvetica">{event.name}</h2>
                    <h2 className="mt-5 font-nunito-bold text-xl">When:</h2>
                    <text className="text-lg font-nunito">{event.date.toString()}</text>
                    <h2 className="mt-5 font-nunito-bold text-xl">Where:</h2>
                    <text className="text-lg font-nunito">{event.location}</text>
                    <h2 className="mt-5 font-nunito-bold text-xl">Event Description:</h2>
                    <text className="text-lg font-nunito">{event.description}</text>
                    <div className="flex mt-7 justify-center">
                        <Image src={"/images/line-RSVP.png"} alt="dotted line" width={500} height={1}/>
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
                        <a href="#" className="font-nunito underline text-l mt-3 ml-3" onClick={onClose}>Cancel</a>
                    </div>
                </div>
            </div>
        </div>
        </form>
    );
}

export default RSVPOverlay;