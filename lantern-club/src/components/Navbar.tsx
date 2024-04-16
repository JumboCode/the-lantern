import React, { useState, useEffect } from 'react'; // Corrected import of useState
import Link from "next/link";
import Image from "next/image";
import Hamburger from './Hamburger';

function Navbar() {

  const defaultLogo = "/images/thelantern1.png";
  const toggleLogo = "/images/lantern-logo-blue.png";

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentLogo, setCurrentLogo] = useState(defaultLogo);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setCurrentLogo(toggleLogo);
      } else {
        setCurrentLogo(defaultLogo);
      }
    };

    // Set the logo correctly on initial render
    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="w-screen">
      <nav className="flex justify-between items-center text-lg font-kiona">
        <div className="pl-10 md:pl-20 pr-10 md:pr-20 flex-shrink-0 pb-10">
          <Link href="/" passHref>
            <div>
              <Image 
                src={defaultLogo} 
                height={200} 
                width={200} 
                alt="Default Logo" 
                className="default-logo"
                layout="intrinsic"
              />
              <Image 
                src={toggleLogo} 
                height={200} 
                width={200} 
                alt="Toggle Logo" 
                className="toggle-logo"
                layout="intrinsic"
              />
            </div>
          </Link>
        </div>

          <div className="md:hidden">
            <Hamburger onToggle={toggleMenu} />
          </div>

          <div className={`nav-links ${isMenuOpen ? 'active' : ''} hidden md:flex flex-row justify-center space-x-8 md:space-x-16 overflow-x-auto`}>
            <li className="list-none">
            <Link href="/Magazine" legacyBehavior>
                <a className="hover:bg-nav-bg rounded-2xl p-3 relative transition-all duration-500">Magazine</a>
              </Link>
            </li>
            <li className="list-none">
              <Link href="/Events" legacyBehavior>
                <a className="hover:bg-nav-bg rounded-2xl p-3 relative transition-all duration-500">Events</a>
              </Link>
            </li>
            <li className="list-none">
              <Link href="/AboutUs" legacyBehavior>
                <a className="hover:bg-nav-bg rounded-2xl p-3 relative transition-all duration-500">About Us</a>
              </Link>
            </li>
            <li className="list-none">
              <Link href="/ContactUs" legacyBehavior>
                <a className="hover:bg-nav-bg rounded-2xl p-3 relative transition-all duration-500">Contact Us</a>
              </Link>
            </li>
            <li className="list-none">
              <Link href="/Resources" legacyBehavior>
                <a className="hover:bg-nav-bg rounded-2xl p-3 relative transition-all duration-500">Resources</a>
              </Link>
            </li>
          </div>
        </nav>
    </div>
  );
}

export default Navbar;