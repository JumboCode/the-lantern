
import multer from 'multer';
import { v4 as uuidv4 } from 'uuid';
import s3 from '../../../aws-config.js';

const upload = multer({
  storage: multer.memoryStorage(),
  limits: {
    fileSize: 5 * 1024 * 1024, // 5MB file size limit
  },
});
export const config = {
  api: {
    bodyParser: false,
  },
};

export default function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }
  
  return upload.single('file')(req, res, async (err) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }

    try {
      const file = req.file; 
      const key = `uploads/${uuidv4()}_${file.originalname}`;
      const params = {
        Bucket: process.env.AWS_BUCKET_NAME,
        Key: key,
        Body: file.buffer,
        ContentType: file.mimetype,
      };

    await s3.upload(params).promise();
    // Return S3 file URL
    const fileUrl = `https://${process.env.AWS_BUCKET_NAME}.s3.amazonaws.com/${key}`;
    return res.status(200).json({url : fileUrl});
    } catch (error) {
      return res.status(500).json({ error: 'Failed to upload file to S3' })
    }
  });
};