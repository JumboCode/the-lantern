import React, { useState, useRef, FormEvent } from "react";
import Buttonv2 from "../Buttonv2";

export default function Contact() {
    const [isLoading, setIsLoading] = useState(false);
    const formRef = useRef<HTMLFormElement>(null);
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [showConfirmation, setShowConfirmation] = useState(false);
    const [formData, setFormData] = useState<{ [key: string]: string } | null>(null);

    const onSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setIsLoading(true);

        const tempFormData: { [key: string]: string } = {};
        new FormData(event.currentTarget).forEach((value, key) => {
            tempFormData[key] = value.toString();
        });

        setFormData(tempFormData); // Store form data for later submission
        setShowConfirmation(true); // Show the confirmation popup
        setIsLoading(false); // Reset loading state
    };

    const onConfirmSubmit = async () => {
        if (!formData) return; // Check if formData is null

        try {
            const response = await fetch('/api/content/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                alert("Email was successfully sent!");
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

    return (
        <div className="flex flex-col bg-gradient-to-b from-blue-g1 to-blue-g2 -mt-20">
          <div className="h-20 w-full flex-1 mellow-yellow" id="triangle"></div>
          <h1 className="mt-20 font-coolvetica text-7xl ml-12 pt-20">Get in touch!</h1>
      
          {!formSubmitted ? (
            // Only show the form if formSubmitted is false
            <form onSubmit={onSubmit} ref={formRef}>
              <div className="flex flex-col border-contact-g1 border-4 mx-16 mb-16 mt-10 px-7 h-contact bg-gradient-to-b from-contact-g1 to-contact-g2 rounded-3xl">
                <div>
                  <h2 className="mt-5 text-nunito text-lg">Name</h2>
                  <input required type="text" name="name" className="mt-2 w-full p-3 border-contact-g1 border-4 mr-7 rounded-full outline-gc2 h-8 contact-input rounded-3xl"></input>
                </div>
      
                <div>
                  <h2 className="mt-5 text-nunito text-lg">Email</h2>
                  <input required type="email" name="email" className="mt-2 w-full p-3 border-contact-g1 border-4 mr-7 rounded-full outline-gc2 h-8 contact-input rounded-3xl"></input>
                </div>
      
                <div>
                  <h2 className="mt-5 text-nunito text-lg">Message</h2>
                  <textarea required name="message" className="mt-2 w-full p-3 border-contact-g1 border-4 mr-7 contact-input-height rounded-3xl"></textarea>
                  <br></br>
                </div>
      
                <div className="flex justify-center items-center m-10">
                  <Buttonv2 type="submit" text="Submit" color="blue" width="w-40" isLoading={isLoading} />
                </div>
              </div>
            </form>
          ) : (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
              <div className="bg-[#FFA500] p-10 text-center rounded-lg shadow-xl">
                <img src="images/lantern.png" alt="Thank you message" className="w-full" />
                <p className="text-white mt-4">Please wait 2-3 business days for a reply</p>
              </div>
            </div>
          )}
          {showConfirmation && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
                    <div className="bg-white p-8 text-center rounded-lg shadow-xl">
                        <h3 className="text-xl font-semibold mb-4">Send confirmation</h3>
                        <p>Are you sure you want to send?</p>
                        <div className="flex justify-center mt-6">
                            <button onClick={onConfirmSubmit} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2">
                                Yes
                            </button>
                            <button onClick={() => setShowConfirmation(false)} className="bg-gray-300 hover:bg-gray-500 text-black font-bold py-2 px-4 rounded">
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
      );
}
