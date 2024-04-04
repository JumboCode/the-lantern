import React from 'react';
import Link from "next/link";
import Image from "next/image";

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

          <ul className="flex flex-row justify-center space-x-8 md:space-x-16 md:pr-20 pt-10 overflow-x-auto pb-10">
          <li>
            <Link href="/Magazine" className="hover:bg-nav-bg rounded-2xl p-3 relative transition-all duration-500">
              Magazine
            </Link>
          </li>
          <li>
            <Link href="/Events" className="hover:bg-nav-bg rounded-2xl p-3 relative transition-all duration-500">
              Events
            </Link>
          </li>
          <li>
            <Link href="/AboutUs" className="hover:bg-nav-bg rounded-2xl p-3 relative transition-all duration-500">
              About Us
            </Link>
          </li>
          <li>
            <Link href="/ContactUs" className="hover:bg-nav-bg rounded-2xl p-3 relative transition-all duration-500">
              Contact Us
            </Link>
          </li>
          <li>
            <Link href="/Resources" className="hover:bg-nav-bg rounded-2xl p-3 relative transition-all duration-500">
              Resources
            </Link>
          </li>
          </ul>

        </nav>
    </div>
  );
}