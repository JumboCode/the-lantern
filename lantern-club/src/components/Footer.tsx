
import React from "react";
import Image from "next/image";
import Logo from "../images/lanternicon1.png";
import Email from "../images/email.png";
import Insta from "../images/insta.png";
import { signIn } from "next-auth/react";
import Link from "next/link";
import Buttonv2 from "./Buttonv2";

export default function Footer({ showAdminLogin }: { showAdminLogin: boolean }) {
        const handleButtonClick = () => {
                // TODO
                console.log('Button clicked!');
              };

  return (
    <div className="bg-[#d5e1f3] p-10 w-full text-[#4279bc] flex items-center justify-center">
      <div className="grid w-full max-w-screen-xl grid-cols-1 md:grid-cols-3">
        {/* Image column */}
        <div className="flex flex-col md:flex-row items-center md:items-start">
          <div className="w-24 h-24 md:w-48 md:h-48 relative">
            <Link href="/"> 
              <Image src={Logo} layout="fill" objectFit="contain" alt="Lantern Club Logo" />
            </Link>
          </div>
          <div className="font-coolvetica items-center md:items-start mt-4 md:mt-0 md:ml-8 flex flex-col">
            {/* Links here */}
            <Link href="/Magazine" className="py-1 text-2xl hover:underline">
              Magazine
            </Link>
            <Link href="/Events" className="py-1 text-2xl hover:underline">
              Events
            </Link>
            <Link href="/AboutUs" className="py-1 text-2xl hover:underline">
              About Us
            </Link>
            <Link href="/ContactUs" className="py-1 text-2xl hover:underline">
              Contact Us
            </Link>
            <Link href="/Resources" className="py-1 text-2xl hover:underline">
              Resources
            </Link>
          </div>
        </div>

        {/* Empty column for spacing or additional content */}
        <div>
        </div>
        
        
        {/* Login/Submit column */}
        <div className="flex flex-col md:flex-row items-center md:items-end justify-end p-4">
          {/* Login and Submit buttons here */}
          <div className="font-nunitosans flex flex-col pb-5 md:pb-0 pr-0 md:pr-10 space-y-4 items-start justify-start">
            {showAdminLogin && (
        //       <button
        //         className=" border-[#94BBE3] bg-[#4279BC] border-2 text-white text-lg rounded-full w-36 h-11 hover:underline flex items-center justify-center"
        //         onClick={() => signIn("google")}
        //       >
        //         Login
        //       </button>
              <Buttonv2 text="Admin Login" action={() => signIn("google")} color="blue" width="w-48" />

            )}
            {/* <button
              className="bg-[#F79838] border-[#FECB66] border-2 text-black text-lg rounded-full w-36 h-11 hover:underline flex items-center justify-center"
            >
              Submit
            </button> */}
            <Buttonv2 text="Submit Work" action={handleButtonClick} color="orange" width="w-48" />

          </div>

          <div className="flex">
            <a href="mailto:ststhinkthank@gmail.com" className="flex mr-2">
              <div className="w-11 h-10 md:w-12 md:h-12 relative">
                <Image src={Email} layout="fill" objectFit="contain" alt="email icon" />
              </div>
            </a>
            <a href="https://www.instagram.com/thelanterntufts/" target="_blank" rel="noopener noreferrer">
              <div className="w-11 h-10 md:w-12 md:h-12 relative">
                <Image src={Insta} layout="fill" objectFit="contain" alt="instagram icon" />
              </div>
            </a>
          </div>      
        </div>
      </div>
    </div>
  );
}
