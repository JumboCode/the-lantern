
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

    if (type == "Add Event") {
        return (
            <div className="flex fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm justify-center items-center">
                <div className="w-[800px] flex flex-col orange-border border-4 max-h-screen rounded-3xl bg-white">
                    <button className="text-gray text-xl place-self-end mr-5 mt-2" onClick={() => onClose()}>x</button>
                    <div className="px-5 flex-col overflow-y-scroll">
                        <h2 className="text-4xl font-coolvetica underline decoration-sky-500">{type}</h2>
                        <div>
                            <h2 className="mt-5 font-nunito text-md">Event Name</h2>
                            <input className="mt-2 p-3 w-full border-contact-g1 border-2 rounded-lg outline-gc2 h-8 contact-input" type="text" name="name"></input>
                        </div>
                        <div>
                            <h2 className="mt-5 font-nunito text-md">Date</h2>
                            <input className="mt-2 p-3 w-full border-contact-g1 border-2 rounded-lg outline-gc2 h-8 contact-input" type="text" name="date"></input>
                        </div>
                        <div>
                            <h2 className="mt-5 font-nunito text-md">Time</h2>
                            <input className="mt-2 p-3 w-full border-contact-g1 border-2 rounded-lg outline-gc2 h-8 contact-input" type="text" name="time"></input>
                        </div>
                        <div>
                            <h2 className="mt-5 font-nunito text-md">Location</h2>
                            <input className="mt-2 p-3 w-full border-contact-g1 border-2 rounded-lg outline-gc2 h-8 contact-input" type="text" name="location"></input>
                        </div>
                        <div>
                            <h2 className="mt-5 font-nunito text-md">Description</h2>
                            <textarea className="mt-2 p-3 w-full border-contact-g1 border-2 rounded-lg outline-gc2 h-12 contact-input-height" name="description"></textarea>
                        </div>
                        <div>
                            <h2 className="mt-5 font-nunito text-md">Cover Photo</h2>
                            <button className="bg-slate-200 hover:bg-slate-300 w-24 h-14 rounded-lg mt-2">+</button>
                        </div>
                        <div className="flex justify-center text-md space-x-7 py-5">
                            <Buttonv2 text="Save" action={handleButtonClick} color="blue" width="w-40"/>
                            <Buttonv2 text="Cancel" action={handleButtonClick} color="red" width="w-40" />
                        </div>
                    </div>
                </div>
            </div>
        )
    /**************************************************************************/
    } else if (type == "Edit Event") {
        return (
            <div className="flex fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm justify-center items-center">
                <div className="w-[800px] flex flex-col orange-border border-4 max-h-screen rounded-3xl bg-white">
                    <button className="text-gray text-xl place-self-end mr-5 mt-2" onClick={() => onClose()}>x</button>
                    <div className="px-5 flex-col overflow-y-scroll">
                        <h2 className="text-4xl font-coolvetica underline decoration-sky-500">{type}</h2>
                        <div>
                            <h2 className="mt-5 font-nunito text-md">Event Name</h2>
                            <input className="mt-2 p-3 w-full border-contact-g1 border-2 rounded-lg outline-gc2 h-8 contact-input" type="text" value={name} />
                        </div>
                        <div>
                            <h2 className="mt-5 font-nunito text-md">Date</h2>
                            <input className="mt-2 p-3 w-full border-contact-g1 border-2 rounded-lg outline-gc2 h-8 contact-input" type="text" value={date} />
                        </div>
                        <div>
                            <h2 className="mt-5 font-nunito text-md">Time</h2>
                            <input className="mt-2 p-3 w-full border-contact-g1 border-2 rounded-lg outline-gc2 h-8 contact-input" type="text" value={time} />
                        </div>
                        <div>
                            <h2 className="mt-5 font-nunito text-md">Location</h2>
                            <input className="mt-2 p-3 w-full border-contact-g1 border-2 rounded-lg outline-gc2 h-8 contact-input" type="text" value={location} />
                        </div>
                        <div>
                            <h2 className="mt-5 font-nunito text-md">Description</h2>
                            <textarea className="mt-2 p-3 w-full border-contact-g1 border-2 rounded-lg outline-gc2 h-12 contact-input-height" value={description} />
                        </div>
                        <div>
                            <h2 className="mt-5 font-nunito text-md">Cover Photo</h2>
                            <button className="bg-slate-200 hover:bg-slate-300 w-24 h-14 rounded-lg mt-2">+</button>
                        </div>
                        <div className="flex justify-center text-md space-x-7 py-5">
                            <Buttonv2 text="Save" action={handleButtonClick} color="blue" width="w-40"/>
                            <button className="underline font-nunito">Delete</button>
                            {/* <Buttonv2 text="Delete" action={handleButtonClick} color="red" width="w-40" /> */}
                        </div>
                    </div>
                </div>
            </div>
        )
    } else {
        return null;
    }

    
}

export default EventOverlay;


