// s3Uploader.ts
import s3 from '../../aws-config.js';
import { v4 as uuidv4 } from 'uuid';
import fs from 'fs/promises'; // Node.js File System module with Promises API

import { File as FormidableFile } from 'formidable'; // Assuming you've defined or imported a type for Formidable files

export async function uploadFileToS3(file: FormidableFile, folder: string): Promise<string> {
    if (!file.filepath) {
        throw new Error("File path is undefined.");
    }
    
    const key: string = `${folder}/${uuidv4()}_${file.originalFilename}`;
  
    // Read the file into a buffer for upload
    const fileContent = await fs.readFile(file.filepath);
    const contentType = file.mimetype || 'application/octet-stream';

    const params = {
        Bucket: process.env.AWS_BUCKET_NAME as string,
        Key: key,
        Body: fileContent,
        ContentType: contentType,
    };

    await s3.upload(params).promise();

    return `https://${process.env.AWS_BUCKET_NAME}.s3.amazonaws.com/${key}`;
}
