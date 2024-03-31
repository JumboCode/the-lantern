import { useRef, useState } from "react";
import React from "react";
import Buttonv2 from "../Buttonv2";

import { EventType } from "@/types/event" 

interface OverlayProps {
  isVisible: boolean;
  onClose: () => void;
  type: "Add Event" | "Edit Event";
  event?: EventType;
}

const EventOverlay = ({
  isVisible,
  onClose,
  type,
  event,
}: OverlayProps) => {
  if (!isVisible) return null;


  const [formData, setFormData] = useState({
    name: event?.name,
    date: event?.date,
    time: event?.time,
    location: event?.location,
    description: event?.description,
    host: event?.host,
  });

  const fileInputRef = useRef<HTMLInputElement>(null);
  const handleFileClick = () => {
    fileInputRef.current?.click();
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
        method: 'DELETE',
      });
  
      const result = await response.json();
      console.log(result);
      onClose(); 
      window.location.reload()
    } catch (error) {
      console.error("Failed to delete the event:", error);

      // Handle error (show error message, etc.)
    }
  };

  const handleEdit = async () => {
    
    if (!event?.id) {
      console.error("Event ID is required to edit.");
      return;
    }

    const url = `/api/content/events/${event.id}`;    

    try {
      const response = await fetch(url, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const result = await response.json();
      console.log(result);
      onClose(); 
      window.location.reload()
    } catch (error) {
      console.error("Failed to edit the event:", error);
    }
  };

  const handleAdd = async () => {
    const url = `/api/content/events/`;    

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({...formData, imageURL: "https://picsum.photos/seed/picsum/200/300", isPast: false})
      });

      const result = await response.json();
      console.log(result);
      onClose(); 
      window.location.reload()
    } catch (error) {
      console.error("Failed to add the event:", error);
    }
  };

  const handleMovetoPastEvent = async () => {
    try {
      // WORK IN PROGRESS, set isPast to true
      console.log("MOVE THIS EVENT TO PAST EVENTS");
    } catch (error) {
      console.error("Failed to move the event to Past Events:", error);
    }
  };

  
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
                <h2 className="mt-5 font-nunito text-md">Cover Photo</h2>
                <button onClick={handleFileClick} className="bg-slate-200 hover:bg-slate-300 w-24 h-14 rounded-lg mt-2">
                  +
                </button>
                <input
                  type="file"
                  accept="image/*"
                  style={{ display: 'none' }}
                  ref={fileInputRef}
                  onChange={handleChange}
                  // id="imageURL"
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
                <h2 className="mt-5 font-nunito text-md">Cover Photo</h2>
                <button className="bg-slate-200 hover:bg-slate-300 w-24 h-14 rounded-lg mt-2">
                  +
                </button>
              </div>
              <div className="flex justify-center text-md space-x-7 py-5">
                <Buttonv2
                  text="Save"
                  action={handleEdit}
                  color="blue"
                  width="w-40"
                />
              <a href="#" className="font-nunito underline text-l mt-3 ml-3" onClick={handleMovetoPastEvent}>Move to Past Events</a>
              <a href="#" className="font-nunito underline text-l mt-3 ml-3" onClick={handleDelete}>Delete</a>
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
