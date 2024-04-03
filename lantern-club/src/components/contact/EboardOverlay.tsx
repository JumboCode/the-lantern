import { ChangeEvent, useRef, useState } from 'react';
import React from 'react';
import Buttonv2 from "../Buttonv2";
import { ProfileType } from '@/types/profile';

interface OverlayProps {
    isVisible: boolean,
    type: "Add" | "Edit",
    onClose: () => void,
    profile?: ProfileType
}

interface FormData {
    id: string;
    name: string;
    pronouns: string;
    title: string;
    email: string;
    major: string;
    coverPhoto: File | null; 
}


const EboardOverlay = ( {isVisible, onClose, type, profile}: OverlayProps ) => {
    if (!isVisible) return null; 

    const [formData, setFormData] = useState<FormData>({
        id: profile?.id || '', 
        name: profile?.name || '', 
        pronouns: profile?.pronouns || '', 
        title: profile?.title || '', 
        email: profile?.email || '', 
        major: profile?.major || '',
        coverPhoto: null, 
    });

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
    };

    
    const handleEdit = async () => {
        
        const url = `/api/content/profiles/${formData.id}`;    
        try {
            const formDataWithPhoto = new FormData();
            formDataWithPhoto.append('name', formData.name);
            formDataWithPhoto.append('pronouns', formData.pronouns);
            formDataWithPhoto.append('title', formData.title);
            formDataWithPhoto.append('email', formData.email);
            formDataWithPhoto.append('major', formData.major);
            if (formData.coverPhoto) {
                formDataWithPhoto.append('coverPhoto', formData.coverPhoto);
            }            
            const response = await fetch(url, {
                
                method: 'PATCH',
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
                body: formDataWithPhoto
            });
    
            if (!response.ok) {
                throw new Error(`Error: ${response.status}`);
            }
            const updatedProfile = await response.json();
            console.log('Updated profile:', updatedProfile);
            window.location.reload()
        } catch (error) {
            console.error('Failed to update profile:', error);
        }
    };

    const handleDelete = async () => {
        const url = `/api/content/profiles/${formData.id}`;    
        try {
            const response = await fetch(url, {
                
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            alert(response.ok)
            if (!response.ok) {
                throw new Error(`Error: ${response.status}`);
            }
            
            const deletedProfile = await response.json();
            console.log('Deleted profile:', deletedProfile);
            window.location.reload()
        } catch (error) {
            console.error('Failed to update profile:', error);
        }
    };
    const [filePreview, setFilePreview] = useState<string>('');
    const fileInputRef = useRef<HTMLInputElement>(null);
    
    const handleFileClick = () => {
        setFilePreview(''); // Reset the file preview when the button is clicked
        fileInputRef.current?.click(); // Trigger the file input click event to open the file dialog if fileInputRef.current is not null
    };
    const handleCoverPhotoChange = (event: any) => {
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.onloadend = () => {
            const result = reader.result as string; // Explicitly cast the result to string
            setFilePreview(result); // Set the file preview with the data URI
        };
        reader.readAsDataURL(file); // Read the file as a data URL
        setFormData((prevFormData) => ({
            ...prevFormData,
            coverPhoto: file, // Update coverPhoto with the selected file
        }));
    };
    

    const handleAdd = async () => {
        const url = '/api/content/profiles/'; 
        try {
            const formDataWithPhoto = new FormData();
            formDataWithPhoto.append('name', formData.name || '');
            formDataWithPhoto.append('pronouns', formData.pronouns || '');
            formDataWithPhoto.append('title', formData.title || '');
            formDataWithPhoto.append('email', formData.email || '');
            formDataWithPhoto.append('major', formData.major || '');
            formDataWithPhoto.append('coverPhoto', formData.coverPhoto || '');
            
            const response = await fetch(url, {
                method: 'POST', 
                headers: {
                    'Content-Type': 'application/json',
                },
                body: formDataWithPhoto

            });
    
            if (!response.ok) {
                throw new Error(`Error: ${response.status}`);
            }
            const newProfile = await response.json();
            console.log('Added new profile:', newProfile);
            window.location.reload(); 
        } catch (error) {
            console.error('Failed to add profile:', error);
        }
    };

    if (type === "Add" || type === "Edit") {
        return (
            <div className="flex fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm justify-center items-center z-0">
                <div className="w-[700px] h-[600px] flex flex-col orange-border border-4 max-h-screen rounded-3xl bg-white">
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
                            <h2 className="mt-5 font-nunito text-lg">Major</h2>
                            <input className="mt-2 p-3 w-full border-contact-g1 border-2 rounded-lg outline-gc2 h-8 contact-input font-nunito text-lg" type="text" id="major" name="major" value={formData.major} onChange={handleChange}></input>
                        </div>
                        <div>
                            <h2 className="mt-5 mb-1 font-nunito text-lg">Cover Photo</h2>
                            <button onClick={handleFileClick} className="bg-slate-200 hover:bg-slate-300 w-24 h-14 rounded-lg mt-2">+</button> 
                            {filePreview && <img src={filePreview} alt="Cover Photo Preview" className="mt-2 mb-2" style={{ maxWidth: '100%', height: 'auto' }} />}

                            <input
                            type="file"
                            accept="image/*"
                            style={{ display: 'none' }}
                            ref={fileInputRef}
                            onChange={handleCoverPhotoChange} 
                            // id="imageURL"
                            />
                            </div>
                        <div className="flex justify-center text-md space-x-7 py-5">
                            <Buttonv2 text={type === "Add" ? "Add" : "Update"} action={type === "Add" ? handleAdd : handleEdit} color="blue" width="w-40"/>
                            {type === "Edit" && <a href="#" className="font-nunito underline text-l mt-3 ml-3" onClick={handleDelete}>Delete</a>}
                            {type === "Add" && <a href="#" className="font-nunito underline text-l mt-3 ml-3" onClick={onClose}>Cancel</a>}
                        </div>
                    </div>
                </div>
            </div>
        );
    } else {
        return null;
    }
}

export default EboardOverlay;