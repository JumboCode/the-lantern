import type { NextApiRequest, NextApiResponse } from "next";
import { handleDeleteProfile } from "../../../../../prisma/delete-data";
import { handleUpdateProfile } from "../../../../../prisma/edit-data";
import { handleAddProfile } from "../../../../../prisma/insert-data"; 

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
    if (req.method === 'PATCH') {

        const { id } = req.query;
        try {
            const updatedProfile = await handleUpdateProfile(id, req.body);
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
    } else if (req.method === 'POST') { // Handle creation of new profile
        try {
            const newProfile = await handleAddProfile(req.body);
            return res.status(201).json(newProfile); // Use 201 status code for resource creation
        } catch (error) {
            console.error("Failed to add profile:", error);
            return res.status(500).json({ error: "Failed to add profile." });
        }
    }
    // Handle any other HTTP method
    res.status(405).json({ error: "Method Not Allowed" });
  }
}

