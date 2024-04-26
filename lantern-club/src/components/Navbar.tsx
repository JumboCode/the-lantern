import React, { useEffect, useState } from 'react';
import Link from "next/link";
import Image from "next/image";
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const NavBar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
        const handleResize = () => {
          if (window.innerWidth > 768) { 
            setNav(false);
          }
        };
    
        window.addEventListener('resize', handleResize);
    
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []);

  const links = [
    { url: '/AboutUs', label: 'About Us' },
    { url: '/Events', label: 'Events' },
    { url: '/Magazine', label: 'Magazine' },
    { url: '/Resources', label: 'Resources' },
    { url: '/ContactUs', label: 'Contact Us' }
  ];

  return (
    <div className={nav ? 'fixed flex justify-between bg-white z-50 items-center h-32 w-screen px-4 text-lg font-kiona' : 'flex justify-between z-50 items-center h-32 max-w-screen mx-auto px-4 text-lg font-kiona'}>
      <div className={nav ? 'fixed z-50 pl-10 md:pl-20 pr-10 md:pr-20 flex-shrink-0 py-0' : 'z-50 pl-10 md:pl-20 pr-10 md:pr-20 flex-shrink-0 py-0'}>
        <Link href="/" className="hover:underline">
          <Image src={"/images/lantern-logo-blue.png"} height={91} width={91} alt="lantern logo" layout="intrinsic" />
        </Link>
      </div>

      <ul className="flex flex-row justify-center z-10 space-x-8 hidden md:flex md:space-x-16 md:pr-20 pt-10 overflow-x-auto pb-10">
          {links.map((link, index) => (
            <li key={index}>
              <Link href={link.url} className="hover:bg-nav-bg rounded-2xl p-3 relative transition-all duration-500">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

      <div onClick={handleNav} className={nav ? 'fixed block right-4 z-20 md:hidden' : 'block z-20 md:hidden'}>
        {nav ? <AiOutlineClose size={40} /> : <AiOutlineMenu size={40} />}
      </div>

      <ul className={nav ? 'fixed md:hidden z-10 left-0 top-32 w-screen h-full ease-in-out duration-500' : 'z-10 w-screen fixed left-[-100%]  top-32 opacity-0'}>
        {links.map((link, index) => (
          <li key={index} className={`z-10 p-10 justify-center align-center bg-white text-center hover:bg-nav-bg duration-300 items-center cursor-pointer ${link.url === '/AboutUs' ? 'z-10 border-t-2 border-sky-800' : ''}`}>
          <Link href={link.url}>{link.label}</Link>
        </li>
        ))}
      </ul>
    </div>
  );
};

export default NavBar;

// import React from 'react';
// import Link from "next/link";
// import Image from "next/image";

// export default function NavBar() {
//   return (
//     <div className="w-screen">
//         <nav
//           className="flex justify-between items-center text-lg font-kiona"
//         >
//           <div className="pl-10 md:pl-20 pr-10 md:pr-20 flex-shrink-0 py-5">
//             <Link href="/" className="hover:underline">
//               <Image src={"/images/lantern-logo-blue.png"} height={91} width={91} alt="lantern logo"layout="intrinsic"/>
//             </Link>
//           </div>

//           <ul className="flex flex-row justify-center space-x-8 md:space-x-16 md:pr-20 pt-10 overflow-x-auto pb-10">
//           <li>
//             <Link href="/AboutUs" className="hover:bg-nav-bg rounded-2xl p-3 relative transition-all duration-500">
//               About Us
//             </Link>
//           </li>

//           <li>
//             <Link href="/Events" className="hover:bg-nav-bg rounded-2xl p-3 relative transition-all duration-500">
//               Events
//             </Link>
//           </li>

//           <li>
//             <Link href="/Magazine" className="hover:bg-nav-bg rounded-2xl p-3 relative transition-all duration-500">
//               Magazine
//             </Link>
//           </li>
          
//           <li>
//             <Link href="/Resources" className="hover:bg-nav-bg rounded-2xl p-3 relative transition-all duration-500">
//               Resources
//             </Link>
//           </li>

//           <li>
//             <Link href="/ContactUs" className="hover:bg-nav-bg rounded-2xl p-3 relative transition-all duration-500">
//               Contact Us
//             </Link>
//           </li>

//           </ul>

//         </nav>
//     </div>
//   );
// }