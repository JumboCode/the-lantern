import React, { useState, useRef, FormEvent, useEffect } from "react";
import Buttonv2 from "../Buttonv2";
import ThankYou from "./ThankYou";

export default function Contact() {
  const [isLoading, setIsLoading] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [formData, setFormData] = useState<{ [key: string]: string } | null>(
    null
  );
  const [showThankYou, setShowThankYou] = useState(false);
  const imageRef = useRef(null);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const tempFormData: { [key: string]: string } = {};
    new FormData(event.currentTarget).forEach((value, key) => {
      tempFormData[key] = value.toString();
    });

    setFormData(tempFormData); // Store form data for later submission
    setShowConfirmation(true); // Show the confirmation popup
  };

  const onConfirmSubmit = async () => {
    setIsLoading(true);
    if (!formData) return; // Check if formData is null

    try {
      const response = await fetch("/api/content/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        formRef.current?.reset();
        setFormSubmitted(true);
      } else {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
    } catch (error) {
      console.error("There was a problem with the fetch operation:", error);
    } finally {
      setShowConfirmation(false); // Hide confirmation popup regardless of outcome
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: any) => {
      setFormSubmitted(false);
      console.log(formSubmitted);
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const buttonText = isLoading ? "Sending..." : "Yes";

  return (
    <div>
      <div className="h-20 w-full flex-1 mellow-yellow" id="triangle"> </div>
      <div className="flex flex-col bg-gradient-to-b from-blue-g1 to-blue-g2 -mt-20">
        <div className="h-20 w-full flex-1 mellow-yellow" id="triangle"></div>
        <h1 className="mt-20 font-coolvetica text-7xl ml-16 pt-20">
          Get in touch!
        </h1>
        {/* Shows popup when the form is submitted */}
        {formSubmitted && (
          <div className="z-50 fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            {formSubmitted && <ThankYou></ThankYou>}
          </div>
        )}
        <form onSubmit={onSubmit} ref={formRef}>
          <div className="flex flex-col border-contact-g1 border-4 mx-16 mb-16 mt-10 px-7 h-contact bg-gradient-to-b from-contact-g1 to-contact-g2 rounded-3xl">
            <div>
              <h2 className="mt-5 font-nunito text-lg">Name</h2>
              <div className="w-full">
                <input
                  required
                  type="text"
                  name="name"
                  className="mt-2 w-full p-3 border-contact-g1 border-4 mr-7 h-8 contact-input rounded-3xl w-full max-w-full"
                ></input>
              </div> 
            </div>

            <div className="w-full">
              <h2 className="mt-5 font-nunito text-lg">Email</h2>
              <div >
                <input
                  required
                  type="email"
                  name="email"
                  className="mt-2 w-full p-3 border-contact-g1 border-4 mr-7 h-8 contact-input rounded-3xl w-full max-w-full"
                ></input>
              </div>
              
            </div>

            <div>
              <h2 className="mt-5 font-nunito text-lg">Message</h2>
              <textarea
                required
                name="message"
                className="mt-2 w-full p-3 border-contact-g1 border-4 mr-7 contact-input-height rounded-2xl h-full max-h-full resize-none"
              ></textarea>
              <br></br>
            </div>

            <div className="flex justify-center items-center m-10">
              <Buttonv2
                type="submit"
                text="Submit"
                color="blue"
                width="w-40"
                isLoading={isLoading}
              />
            </div>
          </div>
        </form>
        {showConfirmation && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-8 text-center rounded-3xl shadow-xl border-[#f79838] border-8">
              <h3 className="text-xl mb-4 break-want">
                Are you sure you want to send?
              </h3>
              <div className="flex justify-center mt-6 gap-6">
                <button
                  onClick={onConfirmSubmit}
                  className={
                    isLoading
                      ? "flex bg-[#4279bc] text-white border-[#94bbe3] border-2 shadow-2xl drop-shadow-2xl font-bold py-2 pl-4 rounded-3xl"
                      : "flex bg-[#4279bc] text-white border-[#94bbe3] border-2 shadow-2xl drop-shadow-2xl font-bold py-2 px-8 rounded-3xl hover:bg-white hover:text-[#4279bc] "
                  }
                >
                  <div className={isLoading ? "pr-2" : ""}>{buttonText}</div>
                  {isLoading && (
                    <svg
                      className="animate-spin h-5 w-5 mr-3 "
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        stroke-width="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                  )}
                </button>
                <button
                  onClick={() => setShowConfirmation(false)}
                  className="underline"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
