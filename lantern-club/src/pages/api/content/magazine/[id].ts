import { NextApiRequest, NextApiResponse } from 'next';
import AWS from 'aws-sdk';
import s3Config from '../../../../../aws-config';

// Configure AWS S3
const s3 = new AWS.S3(s3Config);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'DELETE') {
    res.status(405).end(`Method ${req.method} Not Allowed`);
    return
  }

  try {
    const { keyName } = req.query;

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
