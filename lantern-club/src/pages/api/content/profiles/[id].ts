import type { NextApiRequest, NextApiResponse } from "next";
import { handleDeleteProfile } from "../../../../../prisma/delete-data";
import { handleUpdateProfile } from "../../../../../prisma/edit-data";
import { IncomingForm, Fields, Files, File } from 'formidable';
import { ProfileType } from "@/types/profile";
import { uploadFileToS3 } from "@/utils/uploadFileToS3";

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'PATCH') {

    const form = new IncomingForm();
    form.parse(req, async (err: any, fields: Fields, files: Files) => {
      if (err) {
        console.error("Formidable parse error:", err);
        res.status(500).json({ error: "Failed to parse form data." });
        return
      }

      const { id } = req.query;

      try {
        // `fields` comes from parsing the form data and could be string, string[], or undefined
        const updateData: ProfileType = {
          name: Array.isArray(fields.name) ? fields.name[0] : fields.name ?? "",
          pronouns: Array.isArray(fields.pronouns) ? fields.pronouns[0] : fields.pronouns ?? "",
          title: Array.isArray(fields.title) ? fields.title[0] : fields.title ?? "",
          email: Array.isArray(fields.email) ? fields.email[0] : fields.email ?? "",
          major: Array.isArray(fields.major) ? fields.major[0] : fields.major ?? "",
          pictureURL: `https://thelantern.s3.amazonaws.com/images/profiles/${id}`
        };

        // Uploading the cover photo if present
        if (files.coverPhoto && Array.isArray(files.coverPhoto)) {
          const formidableFile: File = files.coverPhoto[0];
      
          // Convert the formidable file object to match the UploadFile structure
          const id = Array.isArray(req.query.id) ? req.query.id[0] : req.query.id;
          await uploadFileToS3(formidableFile, "images/profiles", id);

          const updatedProfile = await handleUpdateProfile(id, updateData);
          res.status(200).json(updatedProfile);
          return
        }
    
        const updatedProfile = await handleUpdateProfile(id, updateData);
        res.status(200).json(updatedProfile);

      } catch (error) {
        console.error("Failed to update profile:", error);
        res.status(500).json({ error: "Failed to update profile." });
      }
    });
  } else if (req.method === 'DELETE') {
        const { id } = req.query;
        try {
          const deletedProfile = await handleDeleteProfile(id);
          res.status(200).json(deletedProfile);
        } catch (error) {
          console.error("Failed to delete profile:", error);
          res.status(500).json({ error: "Failed to delete profile." });
        }
  } else {
    // Handle any other HTTP method
    res.status(405).json({ error: "Method Not Allowed" });
  }
}


