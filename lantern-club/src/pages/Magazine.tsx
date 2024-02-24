import { useEffect, useState, Fragment } from 'react';
import axios from 'axios';

import NavBar from "../components/Navbar";
import Footer from "../components/Footer";
import FileUpload from "../components/magazine/FileUpload";
import Header from "../components/Header";
import EventOverlay from "../components/EventOverlay";
import Buttonv2 from '@/components/Buttonv2';

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

  const [showModal, setShowModal] = useState(false);

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

      <Fragment>
        <Buttonv2 text="Add Event" action={() => setShowModal(true)} color="orange" width="w-48" />
        <EventOverlay isVisible={showModal} onClose={() => {setShowModal(false)}} type="Edit Event" name="ava's half bday bash" date="2/29/2024" time="8:29pm" location="milla 4th floor" description="fun times with ava" />
      </Fragment>
      

      <Footer showAdminLogin={true} />

    </div>
  );
}
