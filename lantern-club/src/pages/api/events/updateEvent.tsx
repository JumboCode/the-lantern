import React from "react";
import { useEffect, useState } from "react";
import { EventType } from "../../../types/event";

const handleUpdate = async (idToUpdate: string, Event: EventType) => {
  const response = await fetch("api/content/events", {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      id: idToUpdate,
      name: Event.name,
      description: Event.description,
      date: Event.date,
      time: Event.time,
      location: Event.location,
      host: Event.host,
      imageURL: Event.imageURL,
    }),
  });
};

export { handleUpdate };
