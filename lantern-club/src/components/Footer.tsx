
import React from "react";
import Image from "next/image";
import LogoOrange from "../images/Lantern-logo-orange.png";
// import Email from "../images/email.png";
// import LinkedIn from "../images/LinkedIn.png";
// import Insta from "@/images/insta.png";
import { signIn, signOut, useSession } from "next-auth/react"; 
import Link from "next/link";
import Buttonv2 from "./Buttonv2";

export default function Footer({ showAdminLogin }: { showAdminLogin: boolean }) {
        const handleButtonClick = () => {
                // TODO
                console.log('Button clicked!');
              };
  const { data: session } = useSession(); // Use useSession to check the authentication state

  return (
    <div className="bg-[#d5e1f3] p-10 w-full text-[#4279bc] flex items-center justify-center">
      <div className="grid w-full max-w-screen-xl grid-cols-1 md:grid-cols-3">
        {/* Image column */}
        <div className="static flex flex-col md:flex-row items-center md:items-start">
          <div className="w-24 h-24 md:w-48 md:h-48 relative">
            <Link className="border-3 static z-50 transition-all opacity-100 duration-500 hover:opacity-0" href="/"> 
              <Image src={"/images/lanternicon1.png"} layout="fill" alt="Lantern Club Logo" />
            </Link>
            <Link className=" transition-all duration-500 hover:scale-[1.02] opacity-0 hover:opacity-100" href="/"> 
              <Image src={"/images/Lantern-logo-orange.png"} layout="fill" alt="Lantern Club Logo" />
            </Link>
          </div>
          <div className="font-coolvetica items-center md:items-start mt-4 md:mt-0 md:ml-8 flex flex-col">
            {/* Links here */}
            <Link href="/Magazine" className="py-1 text-2xl transition-all duration-300 hover:scale-[1.02] hover:tracking-wide hover:font-extrabold hover:underline decoration-orange-400">
              Magazine
            </Link>
            <Link href="/Events" className="py-1 text-2xl transition-all duration-300 hover:scale-[1.02] hover:tracking-wide hover:font-extrabold hover:underline decoration-orange-400">
              Events
            </Link>
            <Link href="/AboutUs" className="py-1 text-2xl transition-all duration-300 hover:scale-[1.02] hover:tracking-wide hover:font-extrabold hover:underline decoration-orange-400">
              About Us
            </Link>
            <Link href="/ContactUs" className="py-1 text-2xl transition-all duration-300 hover:scale-[1.02] hover:tracking-wide hover:font-extrabold hover:underline decoration-orange-400">
              Contact Us
            </Link>
            <Link href="/Resources" className="py-1 text-2xl transition-all duration-300 hover:scale-[1.02] hover:tracking-wide hover:font-extrabold hover:underline decoration-orange-400">
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
            {!session ? (
              showAdminLogin && (
              <Buttonv2 text="Admin Login" action={() => signIn("google")} color="blue" width="w-48"/>
              )
            ) : (
              <Buttonv2 text="Sign Out" action={() => signOut()} color="blue" width="w-48" />
            )
            
            }
            <Buttonv2 text="Submit Work" action={handleButtonClick} color="orange" width="w-48"/>

          </div>

          <div className="flex">
            <a href="https://www.linkedin.com/company/the-lantern-at-tufts-university/about/" className="flex mr-2 hover:#faac4b">
              <div className="w-11 h-10 md:w-12 md:h-12 relative transition-all duration-300 hover:text-orange-400">
                {/* <Image src={LinkedIn} alt="linkedin icon"/> */}
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                 <path className="fill-current "
                 d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/></svg>
              </div>
            </a>
            <a href="https://www.instagram.com/thelanterntufts/" target="_blank" rel="noopener noreferrer">
              <div className="w-11 h-10 md:w-12 md:h-12 relative transition-all duration-300 hover:text-orange-400">
                {/* <Image src={Insta} alt="instagram icon" /> */}
                <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512">
                <path className="fill-current "
                d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                </svg>
              </div>
            </a>
          </div>      
        </div>
      </div>
    </div>
  );
}
