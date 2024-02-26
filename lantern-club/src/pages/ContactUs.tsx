import React, { useEffect, useState } from 'react';
import NavBar from "../components/Navbar";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Contact from "../components/contact/Contact"
import MeetTheEBoard from "../components/contact/MeetTheEboard";
import sampleData from "../components/contact/sampleCardData.json"

export default function ContactUs() {

  const [profiles, setProfiles] = useState([])

  useEffect(() => {
    fetch("/api/content/profile")
    .then(response => response.json())
    .then(json => setProfiles(json))
    .catch(error => console.error(error));
  }, []) 

  return (
    <>
      <NavBar />
      <Header title="Contact Us"/>
      <MeetTheEBoard data={profiles}/>
      <Contact/>      
      <Footer showAdminLogin={false} />
    </>
  );
}
