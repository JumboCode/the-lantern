
import { useState } from 'react';
import React from 'react';
import Buttonv2 from "./Buttonv2";

interface OverlayProps {
    isVisible: boolean,
    onClose: () => void,
    type: "Add Event" | "Edit Event",
    name?: string,
    date?: string,
    time?: string
    location?: string,
    description?: string,
}

const EventOverlay = ( {isVisible, onClose, type, name, date, time, location, description}: OverlayProps ) => {
    if (!isVisible) return null; 

    const handleButtonClick = () => {
        onClose()
        console.log('Button clicked!')
    };

    const [formData, setFormData] = useState({name: "",date: "",time: "",location: "",description: ""});

    const handleChange = (event: any) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
    };

    const handleSubmit = (event: any) => {
        event.preventDefault();
        alert(`Name: ${formData.name}, Date: ${formData.date}, Time: ${formData.time}, Location: ${formData.location}, Description: ${formData.description}`
        );
    };

    if (type == "Add Event") {
        return (
            <form onSubmit={handleSubmit}>
            <div className="flex fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm justify-center items-center">
                <div className="w-[800px] flex flex-col orange-border border-4 max-h-screen rounded-3xl bg-white">
                    <button className="text-gray text-xl place-self-end mr-5 mt-2" onClick={() => onClose()}>x</button>
                    <div className="px-5 flex-col overflow-y-scroll">
                        <h2 className="text-4xl font-coolvetica underline decoration-sky-500">{type}</h2>
                        <div>
                            <h2 className="mt-5 font-nunito text-md">Event Name</h2>
                            <input className="mt-2 p-3 w-full border-contact-g1 border-2 rounded-lg outline-gc2 h-8 contact-input" type="text" id="name" name="name" onChange={handleChange}></input>
                        </div>
                        <div>
                            <h2 className="mt-5 font-nunito text-md">Date</h2>
                            <input className="mt-2 p-3 w-full border-contact-g1 border-2 rounded-lg outline-gc2 h-8 contact-input" type="text" id="date" name="date" onChange={handleChange}></input>
                        </div>
                        <div>
                            <h2 className="mt-5 font-nunito text-md">Time</h2>
                            <input className="mt-2 p-3 w-full border-contact-g1 border-2 rounded-lg outline-gc2 h-8 contact-input" type="text" id="time" name="time" onChange={handleChange}></input>
                        </div>
                        <div>
                            <h2 className="mt-5 font-nunito text-md">Location</h2>
                            <input className="mt-2 p-3 w-full border-contact-g1 border-2 rounded-lg outline-gc2 h-8 contact-input" type="text" id="location" name="location" onChange={handleChange}></input>
                        </div>
                        <div>
                            <h2 className="mt-5 font-nunito text-md">Description</h2>
                            <textarea className="mt-2 p-3 w-full border-contact-g1 border-2 rounded-lg outline-gc2 h-12 contact-input-height" id="description" name="description" onChange={handleChange}></textarea>
                        </div>
                        <div>
                            <h2 className="mt-5 font-nunito text-md">Cover Photo</h2>
                            <button className="bg-slate-200 hover:bg-slate-300 w-24 h-14 rounded-lg mt-2">+</button>
                        </div>
                        <div className="flex justify-center text-md space-x-7 py-5">
                            <Buttonv2 text="Save" action={() => handleSubmit} color="blue" width="w-40"/>
                            {/* <button type="submit">Submit</button> */}
                            <Buttonv2 text="Cancel" action={handleButtonClick} color="red" width="w-40" />
                        </div>
                    </div>
                </div>
            </div>
            </form>
        );
    /**************************************************************************/
    } else if (type == "Edit Event") {
        return (
            <form onSubmit={handleSubmit}>
            <div className="flex fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm justify-center items-center">
                <div className="w-[800px] flex flex-col orange-border border-4 max-h-screen rounded-3xl bg-white">
                    <button className="text-gray text-xl place-self-end mr-5 mt-2" onClick={() => onClose()}>x</button>
                    <div className="px-5 flex-col overflow-y-scroll">
                        <h2 className="text-4xl font-coolvetica underline decoration-sky-500">{type}</h2>
                        <div>
                            <h2 className="mt-5 font-nunito text-md">Event Name</h2>
                            <input className="mt-2 p-3 w-full border-contact-g1 border-2 rounded-lg outline-gc2 h-8 contact-input" type="text" id="name" name="name" value={formData.name} onChange={handleChange}></input>
                        </div>
                        <div>
                            <h2 className="mt-5 font-nunito text-md">Date</h2>
                            <input className="mt-2 p-3 w-full border-contact-g1 border-2 rounded-lg outline-gc2 h-8 contact-input" type="text" id="date" name="date" value={formData.date} onChange={handleChange}></input>
                        </div>
                        <div>
                            <h2 className="mt-5 font-nunito text-md">Time</h2>
                            <input className="mt-2 p-3 w-full border-contact-g1 border-2 rounded-lg outline-gc2 h-8 contact-input" type="text" id="time" name="time" value={formData.time} onChange={handleChange}></input>
                        </div>
                        <div>
                            <h2 className="mt-5 font-nunito text-md">Location</h2>
                            <input className="mt-2 p-3 w-full border-contact-g1 border-2 rounded-lg outline-gc2 h-8 contact-input" type="text" id="location" name="location" value={formData.location} onChange={handleChange}></input>
                        </div>
                        <div>
                            <h2 className="mt-5 font-nunito text-md">Description</h2>
                            <textarea className="mt-2 p-3 w-full border-contact-g1 border-2 rounded-lg outline-gc2 h-12 contact-input-height" id="description" name="description" value={formData.description} onChange={handleChange}></textarea>
                        </div>
                        <div>
                            <h2 className="mt-5 font-nunito text-md">Cover Photo</h2>
                            <button className="bg-slate-200 hover:bg-slate-300 w-24 h-14 rounded-lg mt-2">+</button>
                        </div>
                        <div className="flex justify-center text-md space-x-7 py-5">
                            <Buttonv2 text="Save" action={() => handleSubmit} color="blue" width="w-40"/>
                            <Buttonv2 text="Delete" action={handleButtonClick} color="red" width="w-40" />
                        </div>
                    </div>
                </div>
            </div>
            </form>
        )
    } else {
        return null;
    }

    
}

export default EventOverlay;


