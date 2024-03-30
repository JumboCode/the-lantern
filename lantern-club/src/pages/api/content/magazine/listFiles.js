import AWS from 'aws-sdk';
import s3Config from '../../../../../aws-config.js';

const s3 = new AWS.S3(s3Config);

export default async function handler(req, res) {
    if (req.method !== 'GET') {
        return res.status(405).end(`Method ${req.method} Not Allowed`);
    }
    
    try {
        const { Contents } = await s3.listObjectsV2({
            Bucket: process.env.AWS_BUCKET_NAME,
            Prefix: 'uploads/' // Specify the prefix for the magazines folder

        }).promise();
        
        const urls = Contents.map((content) => {
          return `https://${process.env.AWS_BUCKET_NAME}.s3.amazonaws.com/${content.Key}`;
        });

        return res.status(200).json({ urls });
    } catch (error) {
        return res.status(500).json({ error: "Error listing files from S3" });
    }
}
