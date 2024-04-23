import React, { useEffect, useState } from "react";
import NavBar from "@/components/Navbar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Contact from "@/components/contact/Contact";
import MeetTheEBoard from "@/components/contact/MeetTheEboard";
import Head from 'next/head';

// import sampleData from "@/components/contact/sampleCardData.json";

export default function ContactUs() {
  const [profiles, setProfiles] = useState([]);
  
  useEffect(() => {
    fetch("/api/content/profiles")
      .then((response) => response.json())
      .then((json) => setProfiles(json))
      .catch((error) => console.error(error));
  }, []);

  return (
    <> 
      <NavBar />
      <Head>
        <title>Contact Us — The Lantern</title> // Tab Title
      </Head>
      <Header title="Contact Us" />
      <MeetTheEBoard data={profiles} />
      <Contact />
      <Footer showAdminLogin={true} />
    </>
  );
}
