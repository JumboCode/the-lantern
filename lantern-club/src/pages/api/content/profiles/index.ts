import type { NextApiRequest, NextApiResponse } from "next";
// necessary functions for fetching or adding profiles
import { handleAddProfile } from "../../../../../prisma/insert-data"; 
import { handleFetchProfiles } from "../../../../../prisma/read-data";
import { Fields, Files, IncomingForm } from "formidable";
import { uploadFileToS3 } from "@/utils/uploadFileToS3";
import { ProfileType } from "@/types/profile";


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
    if (req.method === 'GET') {
        const responseData = await handleFetchProfiles();
        res.status(200).json(responseData);
    } else if (req.method === 'POST') {

        const form = new IncomingForm();
        form.parse(req, async (err: any, fields: Fields, files: Files) => {
          if (err) {
            console.error("Formidable parse error:", err);
            res.status(500).json({ error: "Failed to parse form data." });
            return
          }
        
          try {
            let url = Array.isArray(fields.pictureURL) ? fields.pictureURL[0] : fields.pictureURL ?? ""
    
            // Uploading the cover photo if present
            if (files.coverPhoto && Array.isArray(files.coverPhoto)) {
              url = await uploadFileToS3(files.coverPhoto[0], "images/profiles");
            }
    
            // `fields` comes from parsing the form data and could be string, string[], or undefined
            const addData: ProfileType = {
              name: Array.isArray(fields.name) ? fields.name[0] : fields.name ?? "",
              pronouns: Array.isArray(fields.pronouns) ? fields.pronouns[0] : fields.pronouns ?? "",
              title: Array.isArray(fields.title) ? fields.title[0] : fields.title ?? "",
              email: Array.isArray(fields.email) ? fields.email[0] : fields.email ?? "",
              major: Array.isArray(fields.major) ? fields.major[0] : fields.major ?? "",
              pictureURL: url
            };
        
            const addProfile = await handleAddProfile(addData);
            res.status(200).json(addProfile);
    
          } catch (error) {
            console.error("Failed toadd profile:", error);
            res.status(500).json({ error: "Failed toadd profile." });
          }
        });
    } else {
    // Handle any other HTTP method
        res.status(405).json({ error: "Method Not Allowed" });
    }
}

