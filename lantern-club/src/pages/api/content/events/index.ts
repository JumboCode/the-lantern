// pages/api/events/index.ts
import type { NextApiRequest, NextApiResponse } from "next";
import { handleAddEvent } from "../../../../../prisma/insert-data";
import { handleFetchEvents } from "../../../../../prisma/read-data";
import { Fields, Files, IncomingForm } from "formidable";
import { uploadFileToS3 } from "@/utils/uploadFileToS3";
import { EventType } from "@/types/event";

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  switch (req.method) {
    case "GET":
      try {
        const responseData = await handleFetchEvents();
        res.status(200).json(responseData);
      } catch (error) {
        console.error("Failed to fetch events:", error);
        res.status(500).json({ error: "Failed to fetch events." });
      }
      break;
    case "POST":
      try {
        const form = new IncomingForm();
        form.parse(req, async (err: any, fields: Fields, files: Files) => {
          if (err) {
            console.error("Formidable parse error:", err);
            res.status(500).json({ error: "Failed to parse form data." });
            return;
          }
          try {
            let url = Array.isArray(fields.imageURL) ? fields.imageURL[0] : fields.imageURL ?? "";

            // Uploading the cover photo if present
            if (files.coverPhoto && Array.isArray(files.coverPhoto)) {
              url = await uploadFileToS3(files.coverPhoto[0], "images/events");
            }

            const data: EventType = {
              name: Array.isArray(fields.name) ? fields.name[0] : fields.name ?? "",
              date: Array.isArray(fields.date) ? fields.date[0] : fields.date ?? "",
              location: Array.isArray(fields.location) ? fields.location[0] : fields.location ?? "",
              description: Array.isArray(fields.description) ? fields.description[0] : fields.description ?? "",
              time: Array.isArray(fields.time) ? fields.time[0] : fields.time ?? "",
              host: Array.isArray(fields.host) ? fields.host[0] : fields.host ?? "",
              isPast: Array.isArray(fields.isPast) ? fields.isPast[0] === 'true' : !!fields.isPast,
              imageURL: url
            };

            const addEvent = await handleAddEvent(data);
            res.status(200).json(addEvent);
          } catch (error) {
            console.error("Failed to add event:", error);
            res.status(500).json({ error: "Failed to add event." });
          }
        });
      } catch (error) {
        console.error("An unexpected error occurred:", error);
        res.status(500).json({ error: "An unexpected error occurred." });
      }
      break;
    default:
      res.setHeader("Allow", ["GET", "POST"]);
      res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}

