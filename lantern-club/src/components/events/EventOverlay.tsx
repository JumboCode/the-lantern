import { useRef, useState } from "react";
import React from "react";
import Buttonv2 from "../Buttonv2";

import { EventType } from "@/types/event";
import ConfirmModal from "../ConfirmModal";

interface OverlayProps {
  isVisible: boolean;
  onClose: () => void;
  type: "Add Event" | "Edit Event";
  event?: EventType;
}

interface FormData {
  isPast: boolean;
  name: string;
  date: string;
  time: string;
  host: string;
  location: string;
  description: string;
  imageURL: string;
  coverPhoto: File | null; 
}

const EventOverlay = ({
  isVisible,
  onClose,
  type,
  event,
}: OverlayProps) => {
  if (!isVisible) return null;

  const [formData, setFormData] = useState<FormData>({
    isPast: typeof event?.isPast === 'string' ? event.isPast === 'true' : !!event?.isPast,
    name: event?.name || '', 
    date: event?.date || '', 
    time: event?.time || '',
    host: event?.host || '', 
    location: event?.location || '', 
    description: event?.description || '',
    imageURL: event?.imageURL || '',
    coverPhoto: null,
  });

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

  const handleChange = (event: any) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleDelete = async () => {
    if (!event?.id) {
      console.error("Event ID is required to delete.");
      return;
    }
    const url = `/api/content/events/${event.id}`;

    try {
      const response = await fetch(url, {
        method: "DELETE",
      });

      const result = await response.json();
      console.log(result);
      onClose();
      window.location.reload();
    } catch (error) {
      console.error("Failed to delete the event:", error);
    }
  };

  const handleEdit = async (updatedEvent: EventType) => {
    if (!event?.id) {
      console.error("Event ID is required to edit.");
      return;
    }

    const url = `/api/content/events/${event.id}`;

    try {
      const formDataWithPhoto = new FormData();
      formDataWithPhoto.append('name', updatedEvent.name);
      formDataWithPhoto.append('time', updatedEvent.time );
      formDataWithPhoto.append('date', updatedEvent.date);
      formDataWithPhoto.append('location', updatedEvent.location);
      formDataWithPhoto.append('description', updatedEvent.description);
      formDataWithPhoto.append('host', updatedEvent.host);
      formDataWithPhoto.append('imageURL', updatedEvent.imageURL);
      formDataWithPhoto.append('isPast', updatedEvent.isPast.toString() || 'false');

      if (formData.coverPhoto) {
          formDataWithPhoto.append('coverPhoto', formData.coverPhoto);
      }

      const response = await fetch(url, {
        method: 'PATCH',
        body: formDataWithPhoto,
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }
      
      const result = await response.json();
      console.log(result);
      window.location.reload()
    } catch (error) {
      console.error("Failed to edit the event:", error);
    }
  };

  const handleAdd = async () => {
    const url = `/api/content/events/`;

    try {

      const data = {
        name: formData.name, 
        time: formData.time, 
        date: formData.date, 
        location: formData.location, 
        description: formData.description,
        host: formData.host,
        imageURL: `https://placehold.co/400.png`,
        isPast: false
      }

      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
      });

      const result = await response.json();
      console.log(result);
      onClose();
      window.location.reload();
    } catch (error) {
      console.error("Failed to add the event:", error);
    }
  };

  const [showConfirmModal, setShowConfirmModal] = useState(false);

  if (type == "Add Event") {
    return (
        <div className="flex fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm justify-center items-center">
          <div className="w-[700px] h-[600px] flex flex-col orange-border border-4 max-h-screen rounded-3xl bg-white">
            <button
              className="text-gray text-xl place-self-end mr-5 mt-2"
              onClick={() => onClose()}
            >
              x
            </button>
            <div className="px-5 flex-col overflow-y-scroll">
              <h2 className="text-4xl font-coolvetica underline decoration-sky-500">
                {type}
              </h2>
              <div>
                <h2 className="mt-5 font-nunito text-md">Event Name</h2>
                <input
                  className="mt-2 p-3 w-full border-contact-g1 border-2 rounded-lg outline-gc2 h-8 contact-input"
                  type="text"
                  id="name"
                  name="name"
                  onChange={handleChange}
                ></input>
              </div>
              <div>
                <h2 className="mt-5 font-nunito text-md">Date</h2>
                <input
                  className="mt-2 p-3 w-full border-contact-g1 border-2 rounded-lg outline-gc2 h-8 contact-input"
                  type="text"
                  id="date"
                  name="date"
                  onChange={handleChange}
                ></input>
              </div>
              <div>
                <h2 className="mt-5 font-nunito text-md">Time</h2>
                <input
                  className="mt-2 p-3 w-full border-contact-g1 border-2 rounded-lg outline-gc2 h-8 contact-input"
                  type="text"
                  id="time"
                  name="time"
                  onChange={handleChange}
                ></input>
              </div>
              <div>
                <h2 className="mt-5 font-nunito text-md">Location</h2>
                <input
                  className="mt-2 p-3 w-full border-contact-g1 border-2 rounded-lg outline-gc2 h-8 contact-input"
                  type="text"
                  id="location"
                  name="location"
                  onChange={handleChange}
                ></input>
              </div>
              <div>
                <h2 className="mt-5 font-nunito text-md">Host</h2>
                <input
                  className="mt-2 p-3 w-full border-contact-g1 border-2 rounded-lg outline-gc2 h-8 contact-input"
                  type="text"
                  id="host"
                  name="host"
                  onChange={handleChange}
                ></input>
              </div>
              <div>
                <h2 className="mt-5 font-nunito text-md">Description</h2>
                <textarea
                  className="mt-2 p-3 w-full border-contact-g1 border-2 rounded-lg outline-gc2 h-12 contact-input-height"
                  id="description"
                  name="description"
                  onChange={handleChange}
                ></textarea>
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
                />
              </div>
              <div className="flex justify-center text-md space-x-7 py-5">
                <Buttonv2
                  text="Save"
                  action={handleAdd}
                  color="blue"
                  width="w-40"
                />
                {/* <button type="submit">Submit</button> */}
                <Buttonv2
                  text="Cancel"
                  action={() => onClose()}
                  color="red"
                  width="w-40"
                />
              </div>
            </div>
          </div>
        </div>
    );
    /**************************************************************************/
  } else if (type == "Edit Event") {
    return (
        <div className="z-50 flex fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm justify-center items-center">
          <div className="w-[700px] h-[600px] flex flex-col orange-border border-4 max-h-screen rounded-3xl bg-white">
            <button
              className="text-gray text-xl place-self-end mr-5 mt-2"
              onClick={() => onClose()}
            >
              x
            </button>
            <div className="px-5 flex-col overflow-y-scroll">
              <h2 className="text-4xl font-coolvetica underline decoration-sky-500">
                {type}
              </h2>
              <div>
                <h2 className="mt-5 font-nunito text-md">Event Name</h2>
                <input
                  className="mt-2 p-3 w-full border-contact-g1 border-2 rounded-lg outline-gc2 h-8 contact-input"
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                ></input>
              </div>
              <div>
                <h2 className="mt-5 font-nunito text-md">Date</h2>
                <input
                  className="mt-2 p-3 w-full border-contact-g1 border-2 rounded-lg outline-gc2 h-8 contact-input"
                  type="text"
                  id="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                ></input>
              </div>
              <div>
                <h2 className="mt-5 font-nunito text-md">Time</h2>
                <input
                  className="mt-2 p-3 w-full border-contact-g1 border-2 rounded-lg outline-gc2 h-8 contact-input"
                  type="text"
                  id="time"
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                ></input>
              </div>
              <div>
                <h2 className="mt-5 font-nunito text-md">Location</h2>
                <input
                  className="mt-2 p-3 w-full border-contact-g1 border-2 rounded-lg outline-gc2 h-8 contact-input"
                  type="text"
                  id="location"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                ></input>
              </div>
              <div>
                <h2 className="mt-5 font-nunito text-md">Host</h2>
                <input
                  className="mt-2 p-3 w-full border-contact-g1 border-2 rounded-lg outline-gc2 h-8 contact-input"
                  type="text"
                  id="host"
                  name="host"
                  value={formData.host}
                  onChange={handleChange}
                ></input>
              </div>
              <div>
                <h2 className="mt-5 font-nunito text-md">Description</h2>
                <textarea
                  className="mt-2 p-3 w-full border-contact-g1 border-2 rounded-lg outline-gc2 h-12 contact-input-height"
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                ></textarea>
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
                />
              </div>
              <div className="flex justify-center justify-items-center text-md py-5">
                <Buttonv2
                  text="Save"
                  action={() => handleEdit({ ...formData, isPast: event?.isPast ?? false })}
                  color="blue"
                  width="w-40"
                />
                <a
                href="#"
                className="font-nunito underline text-l mt-3 mx-7"
                onClick={() => handleEdit({ ...formData, isPast: true })}
                >
                  Move to Past Events
                </a>
                <a href="#" className="font-nunito underline text-l mt-3" onClick={() => setShowConfirmModal(true)}>
                    Delete
                </a>
                <ConfirmModal isVisible={showConfirmModal} onClose={() => {setShowConfirmModal(false)}} onDelete={handleDelete} />
              </div>
            </div>
          </div>
        </div>
    );
  } else {
    return null;
  }
};

export default EventOverlay;

