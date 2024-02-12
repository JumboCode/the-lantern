import { useEffect, useState } from 'react';
import axios from 'axios';
const DisplayFile = () => {
  const [fileUrl, setFileUrl] = useState('');
  useEffect(() => {
    // Replace 'your-file-key' with the actual key of the file you want to retrieve
    const fileKey = 'your-file-key';
    // Make a GET request to your API route that retrieves the file from S3
    axios.get(`/api/getFile?fileKey=${fileKey}`).then((response) => {
      setFileUrl(response.data.url);
    });
  }, []);
  return (
    <div>
      {fileUrl ? (
        <img src={fileUrl} alt="File from S3" />
      ) : (
        <p>File not found or loading...</p>
      )}
    </div>
  );
};
export default DisplayFile;