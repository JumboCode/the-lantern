import React from 'react';
import Link from "next/link";
import Image from "next/image";

export default function NavBar() {

  const links = [
    { url: '/AboutUs', label: 'About Us' },
    { url: '/Events', label: 'Events' },
    { url: '/Magazine', label: 'Magazine' },
    { url: '/Resources', label: 'Resources' },
    { url: '/ContactUs', label: 'Contact Us' }
  ];

  return (
    <div className="w-screen">
      <nav className="flex justify-between items-center text-lg font-kiona">
        <div className="pl-10 md:pl-20 pr-10 md:pr-20 flex-shrink-0 py-5">
          <Link href="/" className="hover:underline">
            <Image src={"/images/lantern-logo-blue.png"} height={91} width={91} alt="lantern logo" layout="intrinsic" />
          </Link>
        </div>

        <ul className="flex flex-row justify-center space-x-8 md:space-x-16 md:pr-20 pt-10 overflow-x-auto pb-10">
          {links.map((link, index) => (
            <li key={index}>
              <Link href={link.url} className="hover:bg-nav-bg rounded-2xl p-3 relative transition-all duration-500">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
