import { useState } from "react";
import React from "react";
import Image from "next/image";
import Buttonv2 from "../Buttonv2";
import { EventType } from "@/types/event";
import AddtoCalendar from "./AddtoCalendar";

interface OverlayProps {
  isVisible: boolean;
  onClose: () => void;
  event: EventType;
}

const RSVPOverlay = ({ isVisible, onClose, event }: OverlayProps) => {
  if (!isVisible) return null;

  const [showAddModal, setShowAddModal] = useState(false);

  function formatTime(timeStr: string): string {
    let [hour, minute] = timeStr.split(':').map(Number); // convert strings => numbers
    const ampm = hour >= 12 ? 'PM' : 'AM';
    hour = hour % 12 || 12; // convert "00" or "12" hour to "12"
    return `${hour}:${minute.toString().padStart(2, '0')} ${ampm}`;
  }
  
  return (
      <div className="flex fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm justify-center items-center z-50">
        <div className="w-[700px] flex flex-col orange-border border-4 rounded-3xl bg-white">
          <button
            className="text-gray text-xl place-self-end mr-5 mt-2"
            onClick={() => onClose()}
          >
            x
          </button>
          <div className="px-5 flex flex-col">
                
                <div>
                <h2 className="text-5xl font-coolvetica">{event.name}</h2>
                <h2 className="mt-5 font-nunitobold text-xl">When:</h2>
                <text className="text-lg font-nunito">{event.date && event.date.toString()}</text>
                <text className="text-lg font-nunito">{formatTime(event.startTime) + " to " + formatTime(event.endTime)}</text>

                <h2 className="mt-5 font-nunitobold text-xl">Where:</h2>
                <text className="text-lg font-nunito">{event.location}</text>
                <h2 className="mt-5 font-nunitobold text-xl">
                        Event Description:
                </h2>
                <text className="text-lg font-nunito">{event.description}</text>
                <div className="flex mt-7 justify-center">
                        <Image
                        src={"/images/line-RSVP.png"}
                        alt="dotted line"
                        width={500}
                        height={1}
                        />
                </div>
                </div>

                </div>

            <br></br>
            <div className="flex justify-center text-md py-5">
              <Buttonv2
                text="Add to Calendar"
                action={() => setShowAddModal(true)}
                color="blue"
                width="w-60"
              />
              <AddtoCalendar event={event} isVisible={showAddModal} onClose={() => setShowAddModal(false)}/>
              <a
                href="#"
                className="px-7 font-nunito underline text-l mt-3 ml-3"
                onClick={onClose}
              >
                Cancel
              </a>
            </div>
          </div>
        </div>
  );
};

export default RSVPOverlay;
