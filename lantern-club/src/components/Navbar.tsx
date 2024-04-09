import React from 'react';
import Link from "next/link";
import Image from "next/image";
import Hamburger from './Hamburger.tsx';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

export default function NavBar() {
  return (
    <div className="w-screen">
        <nav
          className="flex justify-between items-center text-lg font-kiona"
        >
          <div className="pl-10 md:pl-20 pr-10 md:pr-20 flex-shrink-0 pb-10">
            <Link href="/" className="hover:underline">
              <Image src={"/images/thelantern1.png"} height={200} width={200} alt="lantern logo"layout="intrinsic"/>
            </Link>
          </div>

          <Hamburger onToggle={toggleMenu} />

          <div className={`nav-links ${isMenuOpen ? 'active' : ''} hidden md:flex flex-row justify-center space-x-8 md:space-x-16 overflow-x-auto`}>
            <li className="list-none">
              <Link href="/Magazine">
                <a className="hover:bg-nav-bg rounded-2xl p-3 relative transition-all duration-500">Magazine</a>
              </Link>
            </li>
            <li className="list-none">
              <Link href="/Events">
                <a className="hover:bg-nav-bg rounded-2xl p-3 relative transition-all duration-500">Events</a>
              </Link>
            </li>
            <li className="list-none">
              <Link href="/AboutUs">
                <a className="hover:bg-nav-bg rounded-2xl p-3 relative transition-all duration-500">About Us</a>
              </Link>
            </li>
            <li className="list-none">
              <Link href="/ContactUs">
                <a className="hover:bg-nav-bg rounded-2xl p-3 relative transition-all duration-500">Contact Us</a>
              </Link>
            </li>
            <li className="list-none">
              <Link href="/Resources">
                <a className="hover:bg-nav-bg rounded-2xl p-3 relative transition-all duration-500">Resources</a>
              </Link>
            </li>
          </div>
        </nav>
    </div>
  );
}

export default NavBar;