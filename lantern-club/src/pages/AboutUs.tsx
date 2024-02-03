import React from 'react';
import NavBar from "../components/Navbar";
import Footer from "../components/Footer";
import AboutUsII from "../components/about/AboutUsII";
import AboutUsIII from "../components/about/AboutUsIII";
import AboutUsIV from "../components/about/AboutUsIV";

export default function AboutUs() {
  return (
    <div>
      <NavBar />
      <AboutUsII />
      <AboutUsIII />
      <AboutUsIV />
      <Footer showAdminLogin={false} />
    </div>
  );
}
