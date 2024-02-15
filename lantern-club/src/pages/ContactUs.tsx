import React from 'react';
import NavBar from "../components/Navbar";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Contact from "../components/contact/Contact"
import MeetTheEBoard from "../components/contact/MeetTheEboard";
import sampleData from "../components/contact/sampleCardData.json"

export default function ContactUs() {
  return (
    <div className="">
      <NavBar />
      <Header title="Contact Us"/>
      <MeetTheEBoard data={sampleData}/>
      <Contact/>      
      <Footer showAdminLogin={false} />
    </div>
  );
}
