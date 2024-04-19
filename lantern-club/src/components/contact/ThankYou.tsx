import React, { useState, useRef, FormEvent, useEffect } from "react";

export default function ThankYou() {
  return (
    <div className="flex flex-col items-center border-contact-g1 -pt-4 border-4 -mt-0 align-top px-40 h-contact bg-gradient-to-b from-contact-g1 to-contact-g2 rounded-3xl">
      <img className="-mt-1" src={'/images/short-lantern.png'} />
      <div className="text-center">
        <h2 className="mt-5 mb-10 font-coolvetica text-6xl">
          Thank you for your message!{" "}
        </h2>
        <div className="text-nunito">
          Please wait 2-3 business days for a reply
        </div>
      </div>
    </div>
  );
}
