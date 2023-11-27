import React from "react";
import Image from "next/image";
import Logo from "../images/lanternicon1.png";
import Email from "../images/email.png";
import Insta from "../images/insta.png";

import { signIn } from "next-auth/react";
import Link from "next/link";

export interface showAdminLogin {
  state: boolean;
}

export default function Footer({
  showAdminLogin,
}: {
  showAdminLogin: boolean;
}) {
  const button_login: React.CSSProperties = {
    backgroundColor: "#4279BC",
    borderColor: "#94BBE3",
    borderWidth: "2px",
    color: "white",
    fontSize: "19px",
    borderRadius: "35px",
    width: "150px",
    height: "45px",
    position: "absolute",
    right: "30px",
    bottom: "15px",
    fontFamily: "nunito",
  };

  const button_submit: React.CSSProperties = {
    backgroundColor: "#F79838",
    borderColor: "#FECB66",
    borderWidth: "2px",
    color: "black",
    fontSize: "19px",
    borderRadius: "35px",
    width: "150px",
    height: "45px",
    position: "absolute",
    right: "30px",
    bottom: "15px",
    fontFamily: "nunito",
  };

  return (
    <div className="flex grid grid-cols-3 w-full">
      {/* image column div */}
      <div className="ml-20 text-left inline-flex">
        <Image src={Logo} height={197} width={192} alt="Lantern Club Logo" />
        <div className="self-center ml-8">
          <p className="py-1 font-nunito text-xl">
            <Link href="/Magazine" className="hover:underline">
              Magazine
            </Link>
          </p>
          <p className="py-1 font-nunito text-xl">
            <Link href="/Events" className="hover:underline">
              Events
            </Link>
          </p>
          <p className="py-1 font-nunito text-xl">
            <Link href="/AboutUs" className="hover:underline">
              About Us
            </Link>
          </p>
          <p className="py-1 font-nunito text-xl">
            <Link href="/ContactUs" className="hover:underline">
              Contact Us
            </Link>
          </p>
          <p className="py-1 font-nunito text-xl">
            <Link href="/ContactUs" className="hover:underline">
              Resources
            </Link>
          </p>
        </div>
      </div>
      {/* login/submit column div */}
      <div>
        <div className="absolute inset-y-6 right-40 mr-10">
          {showAdminLogin && (
            <button
              style={button_login}
              className="hover:underline flex items-center justify-center"
              onClick={() => signIn("google")}
            >
              Login
            </button>
          )}
        </div>
        <div className="absolute inset-y-20 right-40 mr-10">
          <button
            style={button_submit}
            className="hover:underline flex items-center justify-center"
          >
            Submit
          </button>
        </div>
      </div>
      {/* icon column div */}
      <div className="justify-self-end self-center">
        <div className="inline-flex fixed bottom-9 right-20">
          <div className="mr-2">
            <a href="mailto:ststhinkthank@gmail.com">
              <Image src={Email} height={45} width={45} alt="email icon" />
            </a>
          </div>
          <a href="https://www.instagram.com/thelanterntufts/" target="_blank">
            <Image src={Insta} height={45} width={45} alt="instagram icon" />
          </a>
        </div>
      </div>
    </div>
  );
}
