import { useState } from "react";
import React from "react";
import 'add-to-calendar-button';
import { EventType } from "@/types/event";

interface CalendarProps {
    isVisible: boolean;
    onClose: () => void;
    event: EventType;
}

const AddtoCalendar = ({ isVisible, onClose, event }: CalendarProps) => {
    if (!isVisible) return null;

    console.log("Event Name:", event.name); // Log out the value of event.name

    return (
        <div className="flex fixed backdrop-blur-sm inset-0 justify-center items-center" style={{ zIndex: 999}}>
          <div className="bg-white p-8 text-center rounded-3xl border-[#f79838] border-8">
            
            <div className="flex flex-col justify-center mt-6 gap-6">
              <add-to-calendar-button
                name={event.name || "Unnamed Event"}
                startDate={event.date || "0000:00:00"} //YYYY-MM-DD
                startTime={event.startTime || "00:00"}
                endTime={event.endTime || "00:00"}
                timeZone="America/New_York"
                description="event description"
                options="'Apple','Google','Outlook.com'"
                buttonsList
                buttonStyle="round"
                lightMode="bodyScheme"
                customLabels='{"outlookcom":"Outlook"}'
              />
              <a
                href="#"
                className="font-nunito underline text-l mt-3"
                onClick={onClose}
              >
                Close
              </a>
            </div>
          </div>
        </div>
    );
}

export default AddtoCalendar;