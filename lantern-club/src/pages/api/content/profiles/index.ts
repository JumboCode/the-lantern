import type { NextApiRequest, NextApiResponse } from "next";
// necessary functions for fetching or adding profiles
import { handleAddProfile } from "../../../../../prisma/insert-data"; 
import { handleFetchProfiles } from "../../../../../prisma/read-data";


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
    if (req.method === 'GET') {
        const responseData = await handleFetchProfiles();
        res.status(200).json(responseData);
    } else if (req.method === 'POST') {
        try {

            const newProfile = await handleAddProfile(req.body);
            console.log(req.body)
            res.status(201).json(newProfile); 
        } catch (error) {
            console.error("Failed to add profile:", error);
            res.status(500).json({ error: "Failed to add profile." });
        }
    } else {
        // If other HTTP methods are not supported
        res.setHeader('Allow', ['GET', 'POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}

