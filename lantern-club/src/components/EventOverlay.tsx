
import React from 'react';
import Buttonv2 from "./Buttonv2";


interface OverlayProps {
    isVisible: boolean,
    onClose: () => void,
}

const EventOverlay = ( {isVisible, onClose}: OverlayProps ) => {
    if (!isVisible) return null; 

    const handleButtonClick = () => {
        // TODO
        console.log('Button clicked!');
    };

    return (
        <div>

            <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center">
                <div className="w-[800px] flex flex-col orange-border border-8 rounded-3xl bg-white">
                    <button className="text-gray text-xl place-self-end mr-3" onClick={() => onClose()}>x</button>
                    <div className="p-2">
                        <h2>EVENT TYPE</h2>
                        <p>Event Name</p>
                        <p>Date</p>
                        <p>Time</p>
                        <p>Location</p>
                        <p>Description</p>
                        <p>Cover Photo</p>
                        <div className="flex justify-center text-md space-x-7">
                            <Buttonv2 text="Save" action={handleButtonClick} color="blue" width="w-40" />
                            <Buttonv2 text="Delete" action={handleButtonClick} color="red" width="w-40" />
                            <a href="/Resources" className="py-1 text-md hover:underline"> Move to Past Events </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default EventOverlay;


