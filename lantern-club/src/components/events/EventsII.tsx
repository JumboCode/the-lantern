import React, { useState, useEffect } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { EventType } from "@/types/event";
import ConfirmModal from "../ConfirmModal";
import { EventBox } from "./EventBox";
import { Session } from "next-auth";
import { useSession } from "next-auth/react";

type EventsIIProps = {
  events: EventType[];
};


export default function EventsII({
  events
}: EventsIIProps) {

  const { data: session } = useSession();
  const isAdminEdit = session?.user.isAdmin

  // ********* IS ADMIN EDIT BOOLEAN ********
  return (
    <div>
      <div className=" -mt-20 py-40 px-8 md:px-20 blue2-gradient">
        <h1 className={"mb-20 font-coolvetica md:text-8xl text-6xl flex"}>
        {session?.user.isAdmin ? "Delete Past Events" : "Past Events"}
        </h1>

        <div className="flex flex-col gap-10 md:flex-row">
          {events &&
            events
              .filter((oneEvent) => oneEvent.isPast === true)
              .slice(0, 3)
              .map((oneEvent: EventType) => {
                return (
                  <div key={oneEvent.id} className="w-full md:w-1/3">
                    <EventBox event={oneEvent} isAdminEdit={true} isPast={true}/>
                  </div>
                );
              })}
        </div>
      </div>
    </div>
  );
}
