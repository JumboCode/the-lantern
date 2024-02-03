import React from 'react';
import NavBar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Magazine() {
  return (
    <div>
      <NavBar />
      <p>MAGAZINE PAGE!</p>
      <Footer showAdminLogin={true} />
    </div>
  );
}
