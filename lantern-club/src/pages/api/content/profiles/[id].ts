import type { NextApiRequest, NextApiResponse } from "next";
import { handleDeleteProfile } from "../../../../../prisma/delete-data";
import { handleUpdateProfile } from "../../../../../prisma/edit-data";
import { Fields, Files } from 'formidable';
import { IncomingForm } from 'formidable';

import { ProfileType } from "@/types/profile";

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
        return res.status(500).json({ error: "Failed to parse form data." });
      }

      const { id } = req.query;
      try {
        // Here, you would handle your logic using fields and files
        // For example:
        // Assuming `fields` comes from parsing the form data and could be string, string[], or undefined
        const updateData: ProfileType = {
          name: typeof fields.name === 'string' ? fields.name : fields.name?.[0] ?? "",
          pronouns: typeof fields.pronouns === 'string' ? fields.pronouns : fields.pronouns?.[0] ?? "",
          title: typeof fields.title === 'string' ? fields.title : fields.title?.[0] ?? "",
          email: typeof fields.email === 'string' ? fields.email : fields.email?.[0] ?? "",
          major: typeof fields.major === 'string' ? fields.major : fields.major?.[0] ?? "",
        };

        let updatedProfile;
        // If you have file uploads (e.g., coverPhoto), you need to handle them here.
        // For example, uploading to S3 and getting the URL back.
        if (files.coverPhoto) {
          // Upload coverPhoto to AWS S3 and get the URL
          // const pictureURL = await uploadToS3(files.coverPhoto.path);
          // updateData.pictureURL = pictureURL;
        }
        
        updatedProfile = await handleUpdateProfile(id, updateData);
        return res.status(200).json(updatedProfile);

      } catch (error) {
        console.error("Failed to update profile:", error);
        return res.status(500).json({ error: "Failed to update profile." });
      }
    });
  } else if (req.method === 'DELETE') {
        const { id } = req.query;
        try {
        const deletedProfile = await handleDeleteProfile(id);
        return res.status(200).json(deletedProfile);
        } catch (error) {
        console.error("Failed to delete profile:", error);
        return res.status(500).json({ error: "Failed to delete profile." });
        }
    } else {
    // Handle any other HTTP method
    res.status(405).json({ error: "Method Not Allowed" });
  }
}

function uploadToS3(coverPhoto: any) {
  throw new Error("Function not implemented.");
}

