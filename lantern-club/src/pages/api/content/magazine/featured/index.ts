import type { NextApiRequest, NextApiResponse } from "next";
// necessary functions for fetching or adding profiles
import { handleFetchFeaturedMag } from "../../../../../../prisma/read-data";


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
    if (req.method === 'GET') {
        const responseData = await handleFetchFeaturedMag();
        res.status(200).json(responseData);
    } 
}

