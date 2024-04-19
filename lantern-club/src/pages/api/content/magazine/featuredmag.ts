import { NextApiRequest, NextApiResponse } from 'next';
import AWS from 'aws-sdk';
import s3Config from '../../../../../aws-config.js';
import { handleAddFeaturedMag } from '../../../../../prisma/insert-data.js';
// import { handleAddFeaturedMag } from '../../../../../prisma/insert-data.js';

const s3 = new AWS.S3(s3Config);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

    if (req.method !== 'POST' && req.method !== 'DELETE') {
        res.status(405).end(`Method ${req.method} Not Allowed`);
        return;
    }

    if (req.method === 'POST') {
      try {
        const { fileURL } = req.body;
        handleAddFeaturedMag(fileURL);

      } catch (error) {
        console.error('Failed to upload file to S3', error);
        res.status(500).json({ error: 'Failed to upload file to S3' });
        return
      }
    }

    
}
