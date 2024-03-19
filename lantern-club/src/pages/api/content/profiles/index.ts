import type { NextApiRequest, NextApiResponse } from "next";
// necessary functions for fetching or adding profiles
import { handleAddProfile } from "../../../../../prisma/insert-data"; 

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
    if (req.method === 'GET') {
        // Logic to fetch and return all profiles
        // const profiles = await fetchProfiles();
        // res.status(200).json(profiles);
    } else if (req.method === 'POST') {
        try {

            const newProfile = await handleAddProfile(req.body);
            console.log(req.body)
            return res.status(201).json(newProfile); // Use 201 status code for resource creation
        } catch (error) {
            console.error("Failed to add profile:", error);
            return res.status(500).json({ error: "Failed to add profile." });
        }
    } else {
        // If other HTTP methods are not supported
        res.setHeader('Allow', ['GET', 'POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}

