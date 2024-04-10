import React, { useState, useEffect } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { EventType } from "@/types/event";

type EventsIIProps = {
  isAdminEdit: boolean;
  handleEditButtonClick: () => void;
  events: EventType[];
};

export default function EventsII({
  events,
  isAdminEdit,
  handleEditButtonClick,
}: EventsIIProps) {
  const header_font: React.CSSProperties = {
    fontFamily: "coolvetica",
    fontSize: "90px",
    lineHeight: "1",
  };

  const background: React.CSSProperties = {
    height: "auto",
  };

  const imageStyle: React.CSSProperties = {
    width: "100%",
    height: "100%",
  };

  const handleDelete = async (id: string) => {
    const url = `/api/content/events/${id}`;
    try {
      const response = await fetch(url, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }

      const deletedEvent = await response.json();
      console.log("Deleted profile:", deletedEvent);
      window.location.reload();
    } catch (error) {
      console.error("Failed to delete event:", error);
    }
  };

  // ********* IS ADMIN EDIT BOOLEAN ********
  return (
    <div>
      <div className="-mt-20 py-20 px-20 blue2-gradient" style={background}>
        <h1 className={"mb-20 font-coolvetica md:text-8xl text-6xl"}>
        {isAdminEdit ? "Delete Past Events" : "Past Events"}
        </h1>

        <div className="flex flex-col gap-10 md:flex-row">
          {events &&
            events
              .filter((oneEvent) => oneEvent.isPast === true)
              .slice(0, 3)
              .map((oneEvent: EventType) => {
                return (
                  <div
                    key={oneEvent.id}
                    className="flex-1"
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    <div className="relative flex-shrink w-full" style={{ minHeight: '500px'}}>
                    {oneEvent.imageURL && (
                        <Image
                        src={oneEvent.imageURL}
                        style={imageStyle}
                        layout="fill"
                        objectFit="cover"
                        alt=""
                        />
                        )}
                    </div>       
                    {isAdminEdit && (
                      <div style={{ paddingTop: "20px" }}>
                        <FontAwesomeIcon
                          icon={faTrashCan}
                          width={100}
                          height={100}
                          size="2x"
                          onClick={() => oneEvent.id && handleDelete(oneEvent.id)}
                          className="cursor-pointer"
                        />
                      </div>
                    )}
                  </div>
                );
              })}
        </div>
      </div>
    </div>
  );
}
