import { useState } from 'react';
import React from 'react';
import Image from "next/image";
import Buttonv2 from "../Buttonv2";
import Line from "../../images/line-RSVP.png";

interface OverlayProps {
    isVisible: boolean,
    onClose: () => void,
    name: string,
    pronouns: string,
    title: string,
    email: string
    major: string,
}

const EboardOverlay = ( {isVisible, onClose, name, pronouns, title, email, major}: OverlayProps ) => {
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
                        <div>
                            <h2 className="mt-5 font-nunito text-md">Name</h2>
                            <input className="mt-2 p-3 w-full border-contact-g1 border-2 rounded-lg outline-gc2 h-8 contact-input" type="text" id="name" name="name" onChange={handleChange}></input>
                        </div>
                        <div>
                            <h2 className="mt-5 font-nunito text-md">Pronouns</h2>
                            <input className="mt-2 p-3 w-full border-contact-g1 border-2 rounded-lg outline-gc2 h-8 contact-input" type="text" id="pronouns" name="pronouns" onChange={handleChange}></input>
                        </div>
                        <div>
                            <h2 className="mt-5 font-nunito text-md">Title</h2>
                            <input className="mt-2 p-3 w-full border-contact-g1 border-2 rounded-lg outline-gc2 h-8 contact-input" type="text" id="title" name="title" onChange={handleChange}></input>
                        </div>
                        <div>
                            <h2 className="mt-5 font-nunito text-md">Email</h2>
                            <input className="mt-2 p-3 w-full border-contact-g1 border-2 rounded-lg outline-gc2 h-8 contact-input" type="text" id="email" name="email" onChange={handleChange}></input>
                        </div>
                        <div>
                        <h2 className="mt-5 font-nunito text-md">Cover Photo</h2>
                            <button className="bg-slate-200 hover:bg-slate-300 w-24 h-14 rounded-lg mt-2">+</button> 
                        </div> 
                        <div className="flex justify-center text-md space-x-7 py-5">
                            <Buttonv2 text="Submit" action={() => handleSubmit} color="blue" width="w-40"/>
                        </div>
                    </div>
                </div>
            </div>
            </form>
        );
}

export default EboardOverlay;