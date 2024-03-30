// pages/api/deleteFile.js
import AWS from 'aws-sdk';
import s3Config from '../../../../../aws-config';


const s3 = new AWS.S3(s3Config);

export default async function handler(req, res) {
  if (req.method !== 'DELETE') {
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  try {
    const { keyName } = req.query;

    const deleteParams = {
      Bucket: process.env.AWS_BUCKET_NAME,
      Key: keyName
    };

    await s3.deleteObject(deleteParams).promise();
    return res.status(200).json({ success: true, message: 'File deleted successfully.' });
  } catch (error) {
    return res.status(500).json({ success: false, message: 'Failed to delete file.' });
  }
}
