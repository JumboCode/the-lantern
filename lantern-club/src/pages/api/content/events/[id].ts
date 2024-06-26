// pages/api/events/[id].ts
import type { NextApiRequest, NextApiResponse } from "next";
import { handleDeleteEvent } from "../../../../../prisma/delete-data";
import { handleUpdateEvent } from "../../../../../prisma/edit-data";
import { Fields, Files, File, IncomingForm } from "formidable";
import { uploadFileToS3 } from "@/utils/uploadFileToS3";
import { EventType } from "@/types/event";

// disable this automatic parsing
export const config = {
  api: {
    bodyParser: false,
  },
};

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
      const form = new IncomingForm();
      // console.error(form)

      form.parse(req, async (err: any, fields: Fields, files: Files) => {
        if (err) {
          console.error("Formidable parse error:", err);
          res.status(500).json({ error: "Failed to parse form data." });
          return
        }

        try {
          let url = Array.isArray(fields.imageURL) ? fields.imageURL[0] : fields.imageURL ?? "" 

          // Uploading the cover photo if present
          if (files.coverPhoto && Array.isArray(files.coverPhoto)) {
            url = await uploadFileToS3(files.coverPhoto[0], "images/events");
          } 

          // `fields` comes from parsing the form data and could be string, string[], or undefined
          const updateData: EventType = {
            name: Array.isArray(fields.name) ? fields.name[0] : fields.name ?? "",
            date: Array.isArray(fields.date) ? fields.date[0] : fields.date ?? "",
            location: Array.isArray(fields.location) ? fields.location[0] : fields.location ?? "",
            description: Array.isArray(fields.description) ? fields.description[0] : fields.description ?? "",
            startTime: Array.isArray(fields.startTime) ? fields.startTime[0] : fields.startTime ?? "",
            endTime: Array.isArray(fields.endTime) ? fields.endTime[0] : fields.endTime ?? "",
            host: Array.isArray(fields.host) ? fields.host[0] : fields.host ?? "",
            isPast: Array.isArray(fields.isPast) ? fields.isPast[0] === 'true' : !!fields.isPast,
            imageURL: url
          };
      
          const updatedEvent = await handleUpdateEvent(id, updateData);
          res.status(200).json(updatedEvent);

        } catch (error) {
          console.error("Failed to update event:", error);
          res.status(500).json({ error: "Failed to update event." });
          return
        }
      });
      break;

    default:
      res.setHeader("Allow", ["DELETE", "PATCH"]);
      res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}








