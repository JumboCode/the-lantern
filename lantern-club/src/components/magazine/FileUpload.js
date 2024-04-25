import React, { useState, useRef } from 'react';
import axios from 'axios';
import Buttonv2 from '../Buttonv2';

const FileUpload = ({ onUpload }) => {
  const fileInputRef = useRef(null);
  const [uploading, setUploading] = useState(false);
  const [fileUrl, setFileUrl] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
    setFileUrl(file ? URL.createObjectURL(file) : '');
  };

  const handleUpload = async () => {
    if (!selectedFile) return;
    const formData = new FormData();
    formData.append('file', selectedFile);
    try {
      setUploading(true);
      const response = await axios.post('/api/content/magazine/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      onUpload(response.data.url); // Assuming you want to pass the file URL to the parent component
      setFileUrl('');
      setSelectedFile(null);
    } catch (error) {
      console.error('Error uploading file:', error);
    } finally {
      setUploading(false);
    }
  };

  const handleClick = () => {
    fileInputRef.current.click();
  };

  return (
    <div>
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        style={{ display: 'none' }}
      />
      <label
        htmlFor="fileInput"
        onClick={handleClick}
        onMouseEnter={(e) => e.target.style.textDecoration = 'underline'}
        onMouseLeave={(e) => e.target.style.textDecoration = 'none'}
      >
        Upload New File
      </label>
      {fileUrl && (
        <div>
          {selectedFile.type.startsWith('image/') ? (
            <img src={fileUrl} alt="Selected file" />
          ) : (
            <a href={fileUrl} target="_blank" rel="noopener noreferrer">
              View File
            </a>
          )}
        </div>
      )}
        
        <div> 
          <Buttonv2 text="Save" action={() => console.log('okk>>')} color="blue" width="w-48" />
        </div>
    </div>
  );
};

export default FileUpload;
