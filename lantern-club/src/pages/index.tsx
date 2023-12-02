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
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <header className="flex flex-col h-screen items-center">
        <p className="flex flex-col h-screen justify-center items-center">
          Hi Lantern Club!! This is the default page aka homepage of the website
          <Link href="/auth" className="hover:underline">
            Auth
          </Link>
        </p>
      </header>

      <section>
        <events-button label="EVENTS"/>
      </section>


      <footer className="flex items-center">
        <Footer showAdminLogin={true} />
      </footer>
    </div>
  );
}