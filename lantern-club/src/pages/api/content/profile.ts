import type { NextApiRequest, NextApiResponse } from 'next'
import {handlePostProfile, insertEvent, insertProfile} from '../../../../prisma/insert-data';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    // Process a GET request
    insertProfile()
    const responseData = { message: 'profile: GET requested received' };
    res.status(200).json(responseData);
  } else if (req.method === 'POST') {
    // Process a POST request
    handlePostProfile(req, res)
    const responseData = { message: 'profile: GET requested received' };
    res.status(200).json(responseData);
  } else {
    // Handle any other HTTP method
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}