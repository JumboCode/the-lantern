import React, { useState, FormEvent } from "react"
import { render } from '@react-email/render';
import nodemailer from 'nodemailer';
// import { Email } from './email';

export default function Contact() {
    const [isLoading, setIsLoading] = useState<boolean>(false)
    async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
 
    const formData = new FormData(event.currentTarget)
    const response = await fetch('/api/content/contact', {
      method: 'POST',
      body: formData,
    })

    // Handle response if necessary
    const data = await response.json()
    // console.log("Submit button pressed!")
}
    return (
 <div className="flex flex-col bg-gradient-to-b from-blue-g1 to-blue-g2">
 <div className="h-20 w-full flex-1 mellow-yellow" id="triangle"> 

</div>
    <h1 className="mt-20 font-coolvetica text-7xl ml-12">Get in touch!</h1>

        <form onSubmit={onSubmit}>
            <div className="flex flex-col border-contact-g1 border-4 mx-16 mb-16 mt-10 px-7 h-contact bg-gradient-to-b from-contact-g1 to-contact-g2 rounded-3xl">
                <div>
                    <h2 className="mt-5 text-nunito text-lg">Name</h2>
                    <input type="text" name="name" className="mt-2 w-full p-3 border-contact-g1 border-4 mr-7 rounded-full outline-gc2 h-8 contact-input rounded-3xl"></input>
                </div>

                <div>
                    <h2 className="mt-5 text-nunito text-lg">Email</h2>
                    <input type="text" name="email" className="mt-2 w-full p-3 border-contact-g1 border-4 mr-7 rounded-full outline-gc2 h-8 contact-input rounded-3xl"></input>
                </div>
            
                <div>
                    <h2 className="mt-5 text-nunito text-lg">Message</h2>
                    <textarea name="message" className="mt-2 w-full p-3 border-contact-g1 border-4 mr-7 contact-input-height rounded-3xl"></textarea>
                    <br></br>
                </div>

                <div className="flex justify-center items-center">
                    <button type="submit" id="contactBtn" disabled={isLoading} className="bg-button-blue border-button-outline-blue border-2 mt-9 text-white font-bold py-2 px-10 mb-8 rounded-3xl">{isLoading ? 'Loading...' : 'Submit'}</button>
                </div>
            </div>
        </form>
        </div>
    )
}