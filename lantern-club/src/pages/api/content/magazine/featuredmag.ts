import { NextApiRequest, NextApiResponse } from 'next';
import AWS from 'aws-sdk';
import s3Config from '../../../../../aws-config.js';
import { FeaturedMagType } from "@/types/featuredmag"
import { handleAddFeaturedMag } from '../../../../../prisma/insert-data';
import { handleFetchFeaturedMag } from '../../../../../prisma/read-data';
import { handleDeleteFeaturedMag } from '../../../../../prisma/delete-data';

// import { handleAddFeaturedMag } from '../../../../../prisma/insert-data.js';

const s3 = new AWS.S3(s3Config);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

    if (req.method !== 'POST' && req.method !== 'DELETE') {
        res.status(405).end(`Method ${req.method} Not Allowed`);
        return;
    }

    else if (req.method === 'POST') {
      try {
        const { fileURL } = req.body;
        
        // const newFeaturedMag = await handleAddFeaturedMag({cloudURL: fileURL});
        const newFeaturedMag = await handleAddFeaturedMag(req.body);
        res.status(201).json(newFeaturedMag); 
      } catch (error) {
        console.error('Failed to set featured file', error);
        res.status(500).json({ error: 'Failed to set featured file' });
        return
      }
    }
    else if (req.method === 'DELETE') {
      // TODO: get id, should j be first thing
      const deleteResponseData = await handleDeleteFeaturedMag();
      res.status(200).json(deleteResponseData);
      
    }
    else if (req.method === 'GET') {
      const responseData = await handleFetchFeaturedMag();
      res.status(200).json(responseData);
    }
    
}
