import React, { useState } from 'react';
import Link from "next/link";
import Image from "next/image";

export default function NavBar() {
  // State variable to track menu open/close
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to toggle menu state
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="w-screen">
<<<<<<< HEAD
      <nav className="flex justify-between items-center text-lg font-kiona">
        <div className="pl-10 md:pl-20 pr-10 md:pr-20 flex-shrink-0 py-5">
          <Link href="/" className="hover:underline">
            <Image src={"/images/lantern-logo-blue.png"} height={91} width={91} alt="lantern logo" layout="intrinsic" />
          </Link>
        </div>
=======
        <nav
          className="flex justify-between items-center text-lg font-kiona"
        >
          <div className="pl-10 md:pl-20 pr-10 md:pr-20 flex-shrink-0 py-5">
            <Link href="/" className="hover:underline">
              <Image src={"/images/lantern-logo-blue.png"} height={91} width={91} alt="lantern logo"layout="intrinsic"/>
            </Link>
          </div>
>>>>>>> 6beed3e1160e01b6f98ead19379aec9f9f76e74c

        {/* Hamburger menu icon */}
        <div className="md:hidden flex items-center px-10">
          <button onClick={toggleMenu}>
            <div className="space-y-2">
              <div className="h-0.5 w-8 bg-black"></div>
              <div className="h-0.5 w-8 bg-black"></div>
              <div className="h-0.5 w-8 bg-black"></div>
            </div>
          </button>
        </div>


        {/* Menu items */}
        <ul className={`flex-col md:flex-row justify-center items-start md:justify-end space-y-4 md:space-y-0 md:space-x-8 pt-10 md:pt-0 overflow-x-auto pb-10 w-full ${isMenuOpen ? 'flex' : 'hidden md:flex'}`}>
          <li>
            <Link href="/AboutUs" className="hover:bg-nav-bg rounded-2xl p-3 relative transition-all duration-500">
              About Us
            </Link>
          </li>

          <li>
            <Link href="/Events" className="hover:bg-nav-bg rounded-2xl p-3 relative transition-all duration-500">
              Events
            </Link>
          </li>

          <li>
            <Link href="/Magazine" className="hover:bg-nav-bg rounded-2xl p-3 relative transition-all duration-500">
              Magazine
            </Link>
          </li>
          
          <li>
            <Link href="/Resources" className="hover:bg-nav-bg rounded-2xl p-3 relative transition-all duration-500">
              Resources
            </Link>
          </li>
<<<<<<< HEAD
=======

>>>>>>> 6beed3e1160e01b6f98ead19379aec9f9f76e74c
          <li>
            <Link href="/ContactUs" className="hover:bg-nav-bg rounded-2xl p-3 relative transition-all duration-500">
              Contact Us
            </Link>
          </li>
<<<<<<< HEAD
        </ul>
      </nav>
=======

          </ul>

        </nav>
>>>>>>> 6beed3e1160e01b6f98ead19379aec9f9f76e74c
    </div>
  );
}
