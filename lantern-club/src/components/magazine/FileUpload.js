
import { useState } from 'react';
import axios from 'axios';
const FileUpload = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [fileUrl, setFileUrl] = useState('');
  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };
  const handleUpload = async () => {
    if (!selectedFile) return;
    const formData = new FormData();
    formData.append('file', selectedFile);
      try {
        setUploading(true);
        const response = await axios.post('/api/cloud', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
        setFileUrl(response.data.url);
    
        // Trigger the file listing API after a successful upload
        await axios.get('/api/listFiles');
      } catch (error) {
        console.error('Error uploading file:', error);
      } finally {
        setUploading(false);
      }
    };
  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload} disabled={uploading}>
        Upload
      </button>
      {fileUrl && (
        <div>
          <p>File uploaded successfully!</p>
          <img src={fileUrl} alt="Uploaded file" />
        </div>
      )}
    </div>
  );
};
export default FileUpload;