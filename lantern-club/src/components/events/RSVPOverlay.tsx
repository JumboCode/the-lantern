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
            <h2 className="text-5xl font-coolvetica">{event.name}</h2>
            <h2 className="mt-5 font-nunitobold text-xl">When:</h2>
            <text className="text-lg font-nunito">{event.date.toString()}</text>
            <text className="text-lg font-nunito">{event.startTime.toString()}</text>
            <text className="text-lg font-nunito">{event.endTime.toString()}</text>

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
            <br></br>
            <div className="flex justify-center text-md py-5">
              <Buttonv2
                text="Add to Calendar"
                action={() => setShowAddModal(true)}
                color="blue"
                width="w-60"
              />
              <AddtoCalendar calenderEvent={event} isVisible={showAddModal} onClose={() => setShowAddModal(false)}></AddtoCalendar>
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
      </div>
  );
};

export default RSVPOverlay;
