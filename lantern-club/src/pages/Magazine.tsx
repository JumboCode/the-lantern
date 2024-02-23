import { useEffect, useState } from 'react';
import axios from 'axios';

import NavBar from "../components/Navbar";
import Footer from "../components/Footer";
import FileUpload from "../components/magazine/FileUpload";
import FileDrop from "../components/magazine/FileDrop";
import Header from "../components/Header";
import Buttonv2 from "../components/Buttonv2";

export default function Magazine() {
  const headerFont = {
    fontFamily: 'coolvetica',
    fontSize: '90px',
    lineHeight: '1',
  };
  const subheaderFont = {
    fontFamily: 'nunito',
    fontSize: '30px',
    lineHeight: '1',
  };

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
      <p style={headerFont}>Edit magazine issues</p>
      <p style={subheaderFont}>Featured issue</p>
      <FileDrop />
      <p style={subheaderFont}>Past issues</p>
      


      <ul>
        {fileList.map((url, index) => {
          // Extract file name from the URL
          const fileName = url.substring(url.lastIndexOf('/') + 1);

          return (
            <li key={index} >
              <a href={url} target="_blank">{fileName.replace(/\.[^/.]+$/, "")}</a>
            
            </li>
          );
        })}
      </ul>


      <FileUpload />
      <Buttonv2 text="Save" action={() => console.log('okk>>')} color="blue" width="w-48" />
      <Footer showAdminLogin={true} />
a

    </div>
  );
}
