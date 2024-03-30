import { NextApiRequest, NextApiResponse } from 'next';
import AWS from 'aws-sdk';
import s3Config from '../../../../../aws-config.js';

const s3 = new AWS.S3(s3Config);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'GET') {
        return res.status(405).end(`Method ${req.method} Not Allowed`);
    }

    const bucketName = process.env.AWS_BUCKET_NAME;
    if (!bucketName) {
        return res.status(500).json({ error: "AWS_BUCKET_NAME environment variable is not defined." });
    }
    
    try {
        const { Contents } = await s3.listObjectsV2({
            Bucket: bucketName,
            Prefix: 'uploads/' 
        }).promise();

        if (!Contents) {
            return res.status(200).json({ urls: [] });
        }
        
        const urls = Contents.map((content) => {
          return `https://${process.env.AWS_BUCKET_NAME}.s3.amazonaws.com/${content.Key}`;
        });

        return res.status(200).json({ urls });
    } catch (error) {
        return res.status(500).json({ error: "Error listing files from S3" });
    }
}
