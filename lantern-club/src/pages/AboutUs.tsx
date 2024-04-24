import React from 'react';
import NavBar from "@/components/Navbar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AboutUsII from "@/components/about/AboutUsII";
import AboutUsIII from "@/components/about/AboutUsIII";
import AboutUsIV from "@/components/about/AboutUsIV";
import Head from 'next/head';


export default function AboutUs() {
  return (
    <div>
      <NavBar />
      <Head>
        <title>About Us | The Lantern</title>
      </Head>
      <Header title="About Us"/>
      <AboutUsII />
      <AboutUsIII />
      <AboutUsIV />
      <Footer showAdminLogin={false} />
    </div>
  );
}
