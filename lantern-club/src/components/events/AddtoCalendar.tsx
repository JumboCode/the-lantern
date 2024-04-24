import { useState } from "react";
import React from "react";
import { SocialIcon } from 'react-social-icons';
import 'add-to-calendar-button';

interface CalendarProps {
    isVisible: boolean;
    onClose: () => void;
}

const AddtoCalendar = ({ isVisible, onClose }: CalendarProps) => {
    if (!isVisible) return null;

    return (
        <div className="flex fixed backdrop-blur-sm inset-0 justify-center items-center" style={{ zIndex: 999}}>
          <div className="bg-white p-8 text-center rounded-3xl border-[#f79838] border-8">
            
            <div className="flex flex-col justify-center mt-6 gap-6">
              <add-to-calendar-button
                name="event name"
                startDate="2024-04-19"
                startTime="10:15"
                endTime="23:30"
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