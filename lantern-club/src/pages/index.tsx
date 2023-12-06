// <<<<<<< HEAD
// import React from 'react'
// import NavBar from '../components/Navbar'
// import Header from '../components/Header'
// export default function Home() {
//   return (
//     <div className="bg-gradient-to-r from-sky-400 to-blue-800">
//       <header className="flex flex-col h-screen justify-center items-center">
//           {/* <NavBar/> */}
//           <Header title="The Lantern"/>
// =======

import NavBar from "../components/Navbar";
import Footer from "../components/Footer";
import Header from "../components/Header";
import HomepageII from "../components/HomepageII";
import HomepageIV from "../components/HomepageIV";
import Link from "next/link";

export default function Home() {
  return (
    <div>
        <Header title="The Lantern"/>
      <header className="flex flex-col items-center">
      </header>

      <HomepageII />
      <HomepageIV />

      <footer className="flex items-center">
        <Footer showAdminLogin={true} />
        </footer>
    </div>
  );
}
