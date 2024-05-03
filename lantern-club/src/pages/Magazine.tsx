import { useEffect, useState } from 'react';

import NavBar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MagazineAdmin from "@/components/magazine/MagazineAdmin";
import MagazineDisplay from "@/components/magazine/MagazineDisplay";
import MagazineDisplay2 from "@/components/magazine/MagazineDisplay2";
import Header from "@/components/Header";
import axios from 'axios';
import Head from 'next/head';
import FadeInOutComponent from "@/components/about/FadeInOutComponent";

// import { useSession } from 'next-auth/react';

export default function Magazine() {
  
  const [showAdminView, setShowAdminView] = useState(false);

  const handleToggleAdminView = () => {
    setShowAdminView(!showAdminView);
  };

  const [magazineList, setMagazineList] = useState([]);


  useEffect(() => {
    const fetchFileList = async () => {
      try {
        const response = await axios.get('/api/content/magazine/');
        setMagazineList(response.data.urls);
        

      } catch (error) {
        console.error('Error fetching file list:', error);
      }
    };

    fetchFileList();
  }, [magazineList]);

  
  return (
    <div>
      <NavBar />
      <Head>
        <title>Magazine | The Lantern</title>
      </Head>
      <FadeInOutComponent><Header title='Magazine'/></FadeInOutComponent>
        <>
        {magazineList ? (
          // Render MagazineDisplay or MagazineAdmin based on showAdminView
          showAdminView ? (
                <FadeInOutComponent><MagazineAdmin magazines={magazineList}  handleToggleAdminView={handleToggleAdminView}/></FadeInOutComponent>
          ) : (
            <>
            <FadeInOutComponent><MagazineDisplay magazines={magazineList} handleToggleAdminView={handleToggleAdminView} /></FadeInOutComponent>
            <FadeInOutComponent><MagazineDisplay2 magazines={magazineList} handleToggleAdminView={handleToggleAdminView} /></FadeInOutComponent>
            </>
          )
        ) : (
          // Render a loading state while magazineList is being fetched
          <div>Loading...</div>
          
          
        )}
        </>
      <Footer showAdminLogin={true} />
    </div>
  );
}
