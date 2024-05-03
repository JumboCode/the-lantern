import React from 'react';
import NavBar from "@/components/Navbar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AboutUsII from "@/components/about/AboutUsII";
import AboutUsIII from "@/components/about/AboutUsIII";
import AboutUsIV from "@/components/about/AboutUsIV";
import Head from 'next/head';
import FadeInOutComponent from '@/components/about/FadeInOutComponent';


export default function AboutUs() {
  return (
    <div>
      <NavBar />
      <Head>
        <title>About Us | The Lantern</title>
      </Head>
      <FadeInOutComponent><Header title="About Us"/></FadeInOutComponent>
      <FadeInOutComponent><AboutUsII /></FadeInOutComponent>
      <FadeInOutComponent><AboutUsIII /></FadeInOutComponent>
      <FadeInOutComponent><AboutUsIV /></FadeInOutComponent>
      <Footer showAdminLogin={false} />
    </div>
  );
}
