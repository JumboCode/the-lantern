// pages/api/events/[id].ts
import type { NextApiRequest, NextApiResponse } from "next";
import { handleDeleteEvent } from "../../../../../prisma/delete-data";
import { handleUpdateEvent } from "../../../../../prisma/edit-data";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { id } = req.query; // Access the id of the event

  switch (req.method) {
    case "DELETE":
      const deleteResponseData = await handleDeleteEvent(id);
      res.status(200).json(deleteResponseData);
      break;
    case "PATCH":
      const event = req.body;
      console.log(event);
      const patchResponseData = await handleUpdateEvent(id, req.body);
      res.status(200).json(patchResponseData);
      break;
    default:
      res.setHeader("Allow", ["DELETE", "PATCH"]);
      res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}


