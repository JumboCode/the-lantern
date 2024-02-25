import type { NextApiRequest, NextApiResponse } from 'next'
import { handleFetchProfiles } from '../../../../prisma/read-data';
import {handlePostProfile} from '../../../../prisma/insert-data';
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    // Process a GET request
    const responseData = await handleFetchProfiles()
    res.status(200).json(responseData);
  } else if (req.method === 'POST') {
    // Process a POST request
    const responseData = await handlePostProfile();
    res.status(200).json(responseData);
  } else {
    // Handle any other HTTP method
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}