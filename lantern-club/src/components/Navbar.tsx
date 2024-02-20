import React from 'react';
import Link from "next/link";
import Image from "next/image";
import Logo from "../images/thelantern1.png";

export default function NavBar() {
  return (
    <div className="w-screen">
        <nav
          className="flex justify-between items-center text-xl pb-14 font-kiona"
        >
          <div className="pl-10 md:pl-20 pr-10 md:pr-20 flex-shrink-0">
            <Link href="/" className="hover:underline">
              <Image src={Logo} height={250} width={250} alt="lantern logo"layout="intrinsic"/>
            </Link>
          </div>
          <ul className="flex flex-row justify-center space-x-8 md:space-x-16 md:pr-20 pt-14 overflow-x-auto">
          <li>
            <Link href="/Magazine" className="hover:underline">
              Magazine
            </Link>
          </li>
          <li>
            <Link href="/Events" className="hover:underline">
              Events
            </Link>
          </li>
          <li>
            <Link href="/AboutUs" className="hover:underline">
              About Us
            </Link>
          </li>
          <li>
            <Link href="/ContactUs" className="hover:underline">
              Contact Us
            </Link>
          </li>
          <li>
            <Link href="/Resources" className="hover:underline">
              Resources
            </Link>
          </li>
          </ul>

        </nav>
    </div>
  );
}