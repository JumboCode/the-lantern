import type { NextApiRequest, NextApiResponse } from 'next';
import { IncomingForm, File as FormidableFile } from 'formidable'; // Correct import for FormidableFile
import { uploadFileToS3 } from '../../../../utils/uploadFileToS3';

export const config = {
  api: {
    bodyParser: false,
  },
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.status(405).end(`Method ${req.method} Not Allowed`);
    return;
  }

  const form = new IncomingForm();
  form.parse(req, async (err, fields, files) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }

    // Assuming the file input field is named 'file'
    const file = files['file'] && files['file'][0];
    if (!file) {
      res.status(400).json({ error: 'No file uploaded' });
      return;
    }

    try {
      const fileUrl = await uploadFileToS3(file as FormidableFile, "uploads");
      res.status(200).json({ url: fileUrl });
      return 
    } catch (error) {
      console.error('Failed to upload file to S3', error);
      res.status(500).json({ error: 'Failed to upload file to S3' });
      return
    }
  });
}
