import React from 'react';
import NavBar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HomepageI from "@/components/home/HomepageI";
import HomepageII from "@/components/home/HomepageII";
import HomepageIII from "@/components/home/HomepageIII";
import HomepageIV from "@/components/home/HomepageIV";
import FadeInOutComponent from '@/components/home/FadeInOutComponent';



export default function Home() {
  return (
    <div className="">
      <NavBar />
      <FadeInOutComponent><HomepageI title="The Lantern"/></FadeInOutComponent>
      <FadeInOutComponent><HomepageII /></FadeInOutComponent>
      <FadeInOutComponent><HomepageIII /></FadeInOutComponent>
      <FadeInOutComponent><HomepageIV /></FadeInOutComponent>
      <Footer showAdminLogin={false} />
    </div>
  );
}
