import type { NextApiRequest, NextApiResponse } from 'next'
 
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    // Process a GET request
    console.log('magazine: GET requested received');
  } else {
    // Handle any other HTTP method
  }
}