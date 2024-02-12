import React, { useRef } from "react"
import Image from "next/image"
import Image1 from "../../images/ava1.jpg"
import Image2 from "../../images/hannah1.jpeg"
import Image3 from "../../images/ava2.jpg"
import Image4 from "../../images/hannah2.jpg"
import Image5 from "../../images/ava3.jpg"
import Image6 from "../../images/hannah3.jpg"
import Card from "./Card"

export default function MeetTheEBoard(){
    const carouselRef = useRef<HTMLDivElement>(null);

    // Function to scroll the carousel by a specified number of items
    const scrollCarousel = (itemCount: number) => {
        if (carouselRef.current) {
            const scrollAmount = carouselRef.current.offsetWidth * (itemCount / 3); 
            carouselRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
    };

    const cardStyle = {
        height: '500px',
        width: '350px',
        borderWidth: '3px',
        borderRadius: "30px",
        justifyContent: "center",
    };

    return(
        <div>
            <div className="pt-20 w-full yellow-gradient">
                <div className="ml-5">
                    <h1 className="font-coolvetica text-7xl ml-12">Meet the E-Board
                    <a href="/ContactUs" className="font-nunito underline text-2xl ml-7">edit</a>
                    </h1>
                </div>
                <div ref={carouselRef} className="carousel w-full pt-10 pb-20">
                    <div id="slide1" className="carousel-item relative">
                        <div className="pt-10 pb-10 flex grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 justify-items-center">
                            <div className="orange-gradient orange-border justify-center items-center text-center p-3 shadow-xl" style={cardStyle}>
                                <Card name="Nika Lea Tomicic"
                                    pronouns="she/her"
                                    title="Editor-in-Chief"
                                    email="nika_lea.tomicic@tufts.edu"
                                    major="Sociology + STS"
                                    image={Image1} />
                            </div>
                            <div className="true-blue-gradient justify-center items-center text-center p-3 shadow-xl text-white" style={cardStyle}>
                                <Card name="Kayla Fang"
                                    pronouns="she/her"
                                    title="Outreach & Partnerships"
                                    email="kfang1226@gmail.com"
                                    major="Applied Math + STS"
                                    image={Image2} />
                            </div>
                            <div className="orange-gradient justify-center items-center orange-border text-center p-3 shadow-xl" style={cardStyle}>
                                <Card name="Maddie Cortesi"
                                    pronouns="she/her"
                                    title="Graphic Design & Marketing"
                                    email="madeline.cortesi@tufts.edu"
                                    major="Sociology + STS"
                                    image={Image3} />
                            </div>                        
                            </div> 
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <button className="btn btn-circle text-2xl" onClick={() => scrollCarousel(-3)}></button>
                            <button className="btn btn-circle text-2xl" onClick={() => scrollCarousel(3)}>❯</button>
                        </div>
                    </div> 
                    <div id="slide2" className="carousel-item relative">
                    <div className="pt-10 pb-10 flex grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 justify-items-center">
                        <div className="true-blue-gradient justify-center items-center text-center p-3 shadow-xl text-white" style={cardStyle}>
                        <Card name="fourth"
                            pronouns="pronouns"
                            title="title"
                            email="email"
                            major="major"
                            image={Image4} />
                        </div>

                        <div className="orange-gradient justify-center items-center orange-border text-center p-3 shadow-xl" style={cardStyle}>
                            <Card name="fifth"
                                    pronouns="pronouns"
                                    title="title"
                                    email="email"
                                    major="major"
                                    image={Image5} />
                        </div> 

                        <div className="true-blue-gradient justify-center items-center text-center p-3 shadow-xl text-white" style={cardStyle}>   
                            <Card name="sixth"
                                pronouns="pronouns"
                                title="title"
                                email="email"
                                major="major"
                                image={Image6} />
                        </div>
                        </div>
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <button className="btn btn-circle text-2xl" onClick={() => scrollCarousel(-3)}>❮</button>
                            {/* <button className="btn btn-circle text-2xl" onClick={() => scrollCarousel(3)}>❯</button> */}
                        </div>
                    </div>
                </div>
            </div>
            <div className="h-20 w-full mellow-yellow" id="triangle"></div>
        </div>
    )
}