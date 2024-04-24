import { NextApiRequest, NextApiResponse } from 'next';
import AWS from 'aws-sdk';
import s3Config from '../../../../../aws-config.js';

const s3 = new AWS.S3(s3Config);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

    if (req.method !== 'GET' && req.method !== 'DELETE') {
        res.status(405).end(`Method ${req.method} Not Allowed`);
        return;
    }

    if (req.method === 'DELETE') {
        try {
            const { keyName } = req.body;
        
            if (!keyName) {
              res.status(400).json({ success: false, message: 'Missing keyName parameter.' });
              return
            }
        
            // Configure parameters for deleting the object from S3
            const deleteParams: AWS.S3.DeleteObjectRequest = {
              Bucket: process.env.AWS_BUCKET_NAME || '',
              Key: keyName as string,
            };
        
            await s3.deleteObject(deleteParams).promise();
            res.status(200).json({ success: true, message: 'File deleted successfully.' });
          } catch (error) {
            console.error('Failed to delete file:', error);
            res.status(500).json({ success: false, message: 'Failed to delete file.' });
            return
          }
    }

    const bucketName = process.env.AWS_BUCKET_NAME;
    if (!bucketName) {
        res.status(500).json({ error: "AWS_BUCKET_NAME environment variable is not defined." });
        return;
    }
    
    try {
        const { Contents } = await s3.listObjectsV2({
            Bucket: bucketName,
            Prefix: 'uploads/' 
        }).promise();

        if (!Contents) {
            res.status(200).json({ urls: [] });
            return 
        }
        
        const urls = Contents.map((content) => {
          return `https://${process.env.AWS_BUCKET_NAME}.s3.amazonaws.com/${content.Key}`;
        });

        res.status(200).json({ urls });
    } catch (error) {
        res.status(500).json({ error: "Error listing files from S3" });
    }
}
