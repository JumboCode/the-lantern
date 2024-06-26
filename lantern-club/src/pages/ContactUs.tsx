import React, { useEffect, useState } from "react";
import NavBar from "@/components/Navbar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Contact from "@/components/contact/Contact";
import MeetTheEBoard from "@/components/contact/MeetTheEboard";
import Head from 'next/head';
import { ProfileType } from "@/types/profile";

// import sampleData from "@/components/contact/sampleCardData.json";

export default function ContactUs({ profiles }: { profiles: ProfileType[] }) {
  
  return (
    <> 
      <NavBar />
      <Head>
        <title>Contact Us | The Lantern</title>
      </Head>
      <Header title="Contact Us" />
      <MeetTheEBoard data={profiles} />
      <Contact />
      <Footer showAdminLogin={true} />
    </>
  );
}

export async function getServerSideProps() {
  try {
    const response = await fetch("https://the-lantern.vercel.app/api/content/profiles", { method: "GET" });
    const profiles = await response.json();

    return {
      props: {
        profiles,
      },
    };
  } catch (error) {
    console.error("Error fetching events:", error);
    return {
      props: {
        profiles: [], 
      },
    };
  }
}
