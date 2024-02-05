import type { NextApiRequest, NextApiResponse } from 'next'
import {handlePostProfile, insertEvent, insertProfile} from '../../../../prisma/insert-data';
import { send } from 'process';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    // Process a POST request
    // handlePostProfile(req, res);
    const responseData = { message: 'profile: POST requested received' };
    // Nodemailer
    res.status(200).json(responseData);
  } else {
    // Handle any other HTTP method
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}