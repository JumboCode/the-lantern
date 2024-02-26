import React from 'react';
import AWS from 'aws-sdk'; 

const FileDelete = (bucket, objectKey) => {
    return new Promise((resolve, reject) => {
        console.log('AWS_ACCESS_KEY_ID:', process.env.AWS_ACCESS_KEY_ID);
        console.log('AWS_SECRET_ACCESS_KEY:', process.env.AWS_SECRET_ACCESS_KEY);
        console.log('AWS_REGION:', process.env.AWS_REGION);
        AWS.config.update({
                bucket: process.env.AWS_BUCKET_NAME,
                accessKeyId: process.env.AWS_ACCESS_KEY_ID,
                secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
                region: process.env.AWS_REGION,
            
        });

        const s3 = new AWS.S3();
        const params = { Bucket: bucket, Key: objectKey };
        console.log('we are here');
        s3.deleteObject(params, (err, data) => {
            if (err) {
                console.error('ERROR deleting object:', err.message);
                reject(err);
            } else {
                console.log('Deleted successfully');
                resolve(data);
            }
        });
    });
};

//   return handleDelete;
// };

export default FileDelete;
