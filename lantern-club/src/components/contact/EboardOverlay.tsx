import { useState } from 'react';
import React from 'react';
import Buttonv2 from "../Buttonv2";
import { ProfileType } from '@/types/profile';

interface OverlayProps {
    isVisible: boolean,
    type: "Add" | "Edit",
    onClose: () => void,
    profile: ProfileType
    
}


const EboardOverlay = ( {isVisible, onClose, type, profile}: OverlayProps ) => {
    if (!isVisible) return null; 

    const handleDelete = () => {
        onClose()
        console.log('Button clicked!')
    };

    const [formData, setFormData] = useState({id: profile.id, name: profile.name, pronouns: profile.pronouns, title: profile.title, email: profile.email, major: profile.major});

    const handleChange = (event: any) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
    };

    
    const handleSubmit = async () => {
        const url = `/api/content/profiles/${formData.id}`;    
        try {
            const response = await fetch(url, {
                
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: formData.name,
                    pronouns: formData.pronouns,
                    title: formData.title,
                    email: formData.email,
                    major: formData.major,
                }),
            });
            alert(response.status)

    
            if (!response.ok) {
                throw new Error(`Error: ${response.status}`);
            }
            const updatedProfile = await response.json();
            alert(updatedProfile)
            console.log('Updated profile:', updatedProfile);
        } catch (error) {
            console.error('Failed to update profile:', error);
        }
    };

    if (type == "Add") {
        return (
            <form onSubmit={()=>handleSubmit}>
            <div className="flex fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm justify-center items-center z-0">
                <div className="w-[800px] flex flex-col orange-border border-4 max-h-screen rounded-3xl bg-white">
                    <button className="text-xl place-self-end mr-5 mt-2" onClick={() => onClose()}>x</button>
                    <div className="px-5 flex flex-col overflow-y-scroll">
                        <h2 className="mb-5 text-4xl font-coolvetica underline decoration-sky-500">{type}</h2>       
                        <div>
                            <h1 className="pt-2 font-nunito text-lg">Name</h1>
                            <input className="mt-2 p-3 w-full border-contact-g1 border-2 rounded-lg outline-gc2 h-8 contact-input font-nunito text-lg" type="text" id="name" name="name" onChange={handleChange}></input>
                        </div>
                        <div>
                            <h2 className="mt-5 font-nunito text-lg">Pronouns</h2>
                            <input className="mt-2 p-3 w-full border-contact-g1 border-2 rounded-lg outline-gc2 h-8 contact-input font-nunito text-lg" type="text" id="pronouns" name="pronouns" onChange={handleChange}></input>
                        </div>
                        <div>
                            <h2 className="mt-5 font-nunito text-lg">Title</h2>
                            <input className="mt-2 p-3 w-full border-contact-g1 border-2 rounded-lg outline-gc2 h-8 contact-input font-nunito text-lg" type="text" id="title" name="title" onChange={handleChange}></input>
                        </div>
                        <div>
                            <h2 className="mt-5 font-nunito text-lg">Email</h2>
                            <input className="mt-2 p-3 w-full border-contact-g1 border-2 rounded-lg outline-gc2 h-8 contact-input font-nunito text-lg" type="text" id="email" name="email" onChange={handleChange}></input>
                        </div>
                        <div>
                        <h2 className="mt-5 mb-1 font-nunito text-lg">Cover Photo</h2>
                            <button className="bg-slate-200 hover:bg-slate-300 w-24 h-14 rounded-lg mt-2">+</button> 
                        </div> 
                        <div className="flex justify-center text-md space-x-7 py-5">
                            <Buttonv2 text="Save" action={() => handleSubmit} color="blue" width="w-40"/>
                            <Buttonv2 text="Cancel" action={onClose} color="red" width="w-40" />
                        </div>
                    </div>
                </div>
            </div>
            </form>
        );
    } else if (type == "Edit") {
        return (
            <form onSubmit={()=>handleSubmit}>
            <div className="flex fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm justify-center items-center z-0">
                <div className="w-[800px] flex flex-col orange-border border-4 max-h-screen rounded-3xl bg-white">
                    <button className="text-xl place-self-end mr-5 mt-2" onClick={() => onClose()}>x</button>
                    <div className="px-5 flex flex-col overflow-y-scroll">
                        <h2 className="mb-5 text-4xl font-coolvetica underline decoration-sky-500">{type}</h2>       
                        <div>
                            <h1 className="pt-2 font-nunito text-lg">Name</h1>
                            <input className="mt-2 p-3 w-full border-contact-g1 border-2 rounded-lg outline-gc2 h-8 contact-input font-nunito text-lg" type="text" id="name" name="name" value={formData.name} onChange={handleChange}></input>
                        </div>
                        <div>
                            <h2 className="mt-5 font-nunito text-lg">Pronouns</h2>
                            <input className="mt-2 p-3 w-full border-contact-g1 border-2 rounded-lg outline-gc2 h-8 contact-input font-nunito text-lg" type="text" id="pronouns" name="pronouns" value={formData.pronouns} onChange={handleChange}></input>
                        </div>
                        <div>
                            <h2 className="mt-5 font-nunito text-lg">Title</h2>
                            <input className="mt-2 p-3 w-full border-contact-g1 border-2 rounded-lg outline-gc2 h-8 contact-input font-nunito text-lg" type="text" id="title" name="title" value={formData.title} onChange={handleChange}></input>
                        </div>
                        <div>
                            <h2 className="mt-5 font-nunito text-lg">Email</h2>
                            <input className="mt-2 p-3 w-full border-contact-g1 border-2 rounded-lg outline-gc2 h-8 contact-input font-nunito text-lg" type="text" id="email" name="email" value={formData.email} onChange={handleChange}></input>
                        </div>
                        <div>
                        <h2 className="mt-5 mb-1 font-nunito text-lg">Cover Photo</h2>
                            <button className="bg-slate-200 hover:bg-slate-300 w-24 h-14 rounded-lg mt-2">
                                +
                            </button> 
                        </div> 
                        <div className="flex justify-center text-md space-x-7 py-5">
                            <Buttonv2 text="Save" action={() => handleSubmit()} color="blue" width="w-40"/>
                            <Buttonv2 text="Delete" action={()=>handleDelete} color="red" width="w-40" />
                        </div>
                    </div>
                </div>
            </div>
            </form>
        );
    } else {
        return null;
    }
}

export default EboardOverlay;