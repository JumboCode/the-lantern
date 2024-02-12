import React from 'react';
import NavBar from "../components/Navbar";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Contact from "../components/contact/Contact"
import MeetTheEBoard from "../components/contact/MeetTheEboard";

export default function ContactUs() {
  return (
    <div className="">
      <NavBar />
      <Header title="Contact Us"/>
      <MeetTheEBoard/>
      <Contact/>      
      <Footer showAdminLogin={false} />
    </div>
  );
}
