import React, { useState, FormEvent } from "react"
import { useRef } from "react";
import Buttonv2 from "../Buttonv2";

export default function Contact() {
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const formRef = useRef<HTMLFormElement>(null); // a reference to the form

    async function onSubmit(event: FormEvent<HTMLFormElement>) {
        
        event.preventDefault()
        setIsLoading(true); 

        // formData ~ an object with string keys and string values
        const formData: { [key: string]: string } = {};
        new FormData(event.currentTarget).forEach((value, key) => {
            formData[key] = value.toString();
        });
        try  {
            const response = await fetch('/api/content/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            })
            if(response.ok) {
                // const responseData = await response.json(); // Process the response data
                alert("Email was successfully sent!")
                formRef.current?.reset(); // Reset the form after submission
            } else {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
        } catch  (error) {
            console.error("There was a problem with the fetch operation:", error);
        } finally {
            setIsLoading(false);
        }
    }

    return (
<div>
<div className="h-20 w-full flex-1 mellow-yellow" id="triangle"> </div>

 <div className="flex flex-col bg-gradient-to-b from-blue-g1 to-blue-g2 -mt-20">

    <h1 className="mt-20 font-coolvetica text-7xl ml-12 pt-20">Get in touch!</h1>

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
                    <textarea required name="message"  className="mt-2 w-full p-3 border-contact-g1 border-4 mr-7 contact-input-height rounded-3xl"></textarea>
                    <br></br>
                </div>

                <div className="flex justify-center items-center m-10">
                    <Buttonv2 type="submit" text="Submit" color="blue" width="w-40" isLoading={isLoading} />
                </div>

            </div>
        </form>
        </div>
        </div>
    )
}