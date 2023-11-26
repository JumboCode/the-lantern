import React from "react";
import Image from "next/image";
import Logo from "../images/lanternicon1.png";
import Email from "../images/email.png";
import Insta from "../images/insta.png";

import Link from "next/link";

export interface showAdminLogin {
  state: boolean;
}

export default function Footer({
  showAdminLogin,
}: {
  showAdminLogin: boolean;
}) {
  const button_style: React.CSSProperties = {
    backgroundColor: "#4279BC",
    color: "white",
    padding: "10px",
    fontSize: "18px",
    borderRadius: "35px",
    width: "150px",
    height: "45px",
    marginLeft: "5px",
    justifyContent: "center",
    position: "absolute",
    right: "30px",
    bottom: "15px",
  };

  return (
    <div className="flex grid grid-cols-3 w-full">
      {/* image column div */}
      <div className="ml-10 text-left inline-flex">
        <Image src={Logo} height={197} width={192} alt="Lantern Club Logo" />
        <div className="self-center ml-20">
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
      {/* other pages div */}
      <div className="text-left justify-self-left self-center"></div>
      {/* contact/button column div */}
      <div className="text-left justify-self-end self-center mr-10">
        <div>
          <div className="inline-flex indent-2 font-nunito-reg text-lg">
            <a href="mailto:ststhinkthank@gmail.com">
              <Image src={Email} height={48} width={48} alt="email icon" />
            </a>
            <p className="py-3">ststhinktank@gmail.com</p>
          </div>
        </div>
        <div>
          <div className="ml-1 inline-flex indent-3 font-nunito-reg text-lg">
            <a
              href="https://www.instagram.com/thelanterntufts/"
              target="_blank"
            >
              <Image src={Insta} height={40} width={41} alt="instagram icon" />
            </a>
            <p className="py-2"> thelanterntufts</p>
          </div>
        </div>
        <div>
          {showAdminLogin && (
            <Link href="/auth" className="hover:underline">
              <button
                style={button_style}
                className="hover:underline font-nunito-reg"
              >
                {" "}
                Login{" "}
              </button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
