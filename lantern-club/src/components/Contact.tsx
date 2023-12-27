import React from "react"

export default function Contact() {

    return (
        <div className="flex flex-col bg-gradient-to-b from-blue-g1 to-blue-g2">
            <h1 className="mt-20 font-coolvetica text-7xl ml-5">Get in touch!</h1>
        
              <div className="flex flex-col mx-16 mb-16 mt-10 px-7 h-contact bg-gradient-to-b from-contact-g1 to-contact-g2 rounded-3xl">
                <div>
                <h2 className="mt-5 text-nunito text-lg">Name</h2>
                <input className="mt-2 border-contact-g1 border-2 rounded-full outline-gc2 h-7 contact-input" type="text"></input>
                </div>

                <div> 
                <h2 className="mt-5 text-nunito text-lg">Email</h2>
                <input className="mt-2 border-contact-g1 border-2 rounded-full outline-gc2 h-7 contact-input" type="text"></input>
                </div>

                <div>
                <h2 className="mt-5 text-nunito text-lg">Message</h2>
                <input className="mt-2 w-full border-contact-g1 border-2 mr-7 contact-input-height rounded-3xl" type="text"></input>
                <br></br>
                </div>
                
                {/* Only issue here is that I am making the button manually move down verticall I will figure out how to do that */}
                <div className="flex justify-center items-center">
                <button className="bg-button-blue border-button-outline-blue border-2 mt-9 text-white font-bold py-2 px-10 mb-8 rounded-3xl">Submit</button>      
                </div>
            </div>
        </div>
    )
}