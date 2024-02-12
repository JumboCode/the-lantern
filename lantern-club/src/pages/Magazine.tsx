import React from 'react';
import NavBar from "../components/Navbar";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function Magazine() {
  return (
    <div>
      <NavBar />
      <Header title="Magazine"/>
      <p>MAGAZINE PAGE!</p>
      <Footer showAdminLogin={true} />
    </div>
  );
}
