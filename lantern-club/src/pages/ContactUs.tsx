import React from 'react';
import NavBar from "../components/Navbar";
import Footer from "../components/Footer";
import Contact from "../components/contact/Contact"
import MeetTheEBoard from "../components/contact/MeetTheEboard";

export default function ContactUs() {
  return (
    <div className="">
      <NavBar />
      <MeetTheEBoard />
      <Contact />      
      <Footer showAdminLogin={false} />
    </div>
  );
}
