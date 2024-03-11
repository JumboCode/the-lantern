import React from "react";
import { useEffect, useState } from "react";
// import { event } from "../types/event";

const handleUpdate = async (idToUpdate: string) => {
  const response = await fetch("api/content/events", {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      id: idToUpdate,
      name: undefined,
      description: "updated description",
      date: new Date("2024-2-27"),
      time: new Date("2024-2-28"),
      location: "change of location!",
      host: "new host",
      imageURL: "new image",
    }),
  });
};

export { handleUpdate };
