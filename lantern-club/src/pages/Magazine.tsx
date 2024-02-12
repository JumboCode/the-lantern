import { useEffect, useState } from 'react';
import axios from 'axios';

import NavBar from "../components/Navbar";
import Footer from "../components/Footer";
import FileUpload from "../components/magazine/FileUpload";
import Header from "../components/Header";

export default function Magazine() {
  const [fileList, setFileList] = useState([]);

  useEffect(() => {
    const fetchFileList = async () => {
      try {
        const response = await axios.get('/api/listFiles');
        setFileList(response.data.urls);
      } catch (error) {
        console.error('Error fetching file list:', error);
      }
    };

    fetchFileList();
  }, []);

  return (
    <div>
      <NavBar />
      <Header title='Magazine'/>
      <FileUpload />


      <ul>
        {fileList.map((url, index) => {
          // Extract file name from the URL
          const fileName = url.substring(url.lastIndexOf('/') + 1);

          return (
            <li key={index}>
              {fileName}
            </li>
          );
        })}
      </ul>
      <Footer showAdminLogin={true} />

    </div>
  );
}
