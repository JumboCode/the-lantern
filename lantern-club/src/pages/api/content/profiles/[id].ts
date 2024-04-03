import type { NextApiRequest, NextApiResponse } from "next";
import { handleDeleteProfile } from "../../../../../prisma/delete-data";
import { handleUpdateProfile } from "../../../../../prisma/edit-data";
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
    if (req.method === 'PATCH') {

      const { id } = req.query;
      try {
        let updatedProfile;
  
        if (req.body.coverPhoto) {
          // const pictureURL = await uploadToS3(req.body.coverPhoto); // Upload coverPhoto to AWS S3 and get the URL
          updatedProfile = await handleUpdateProfile(id, {
            ...req.body,
            // pictureURL, 
          });
        } else {
          updatedProfile = await handleUpdateProfile(id, req.body);
        }
  
        return res.status(200).json(updatedProfile);
      } catch (error) {
        console.error("Failed to update profile:", error);
        return res.status(500).json({ error: "Failed to update profile." });
      }
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

