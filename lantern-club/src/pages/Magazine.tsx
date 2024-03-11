import { useEffect, useState } from 'react';
import axios from 'axios';

import NavBar from "../components/Navbar";
import Footer from "../components/Footer";
import MagazineAdmin from "../components/magazine/MagazineAdmin";
import MagazineDisplay from "../components/magazine/MagazineDisplay";
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
  //const [isLoggedIn, setLoggedIn] = useState(false); 
  const isLoggedIn = false; 
  useEffect(() => {
    // const checkLogin = async() => {
    //   const userLoggedIn = await(isLoggedIn); 

    // }
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
      {isLoggedIn ? (
        <MagazineAdmin/>
      ) : (
        <MagazineDisplay/>
      )}

      <Footer showAdminLogin={true} />


    </div>
  );
}
