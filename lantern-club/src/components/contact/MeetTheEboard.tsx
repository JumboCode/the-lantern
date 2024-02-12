import React from "react"

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import Image from "next/image"
import Image1 from "../../images/ava1.jpg"
import Image2 from "../../images/hannah1.jpeg"
import Image3 from "../../images/ava2.jpg"
import Image4 from "../../images/hannah2.jpg"
import Image5 from "../../images/ava3.jpg"
import Image6 from "../../images/hannah3.jpg"
import Card from "./Card"

export default function MeetTheEBoard() {

    const responsive = {
        desktop: {
            breakpoint: { max: 4000, min: 1100 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1100, min: 768 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 768, min: 0 },
            items: 1
        },
    };
    
    return(
        <div>
            <div className="pt-20 w-full yellow-gradient">
                <div className="ml-5">
                    <h1 className="font-coolvetica text-7xl ml-12">Meet the E-Board
                    <a href="/ContactUs" className="font-nunito underline text-2xl ml-7">edit</a>
                    </h1>
                </div>
                <Carousel
                    swipeable={true}
                    draggable={true}
                    showDots={true}
                    responsive={responsive}
                    ssr={true}
                    infinite={true}
                    keyBoardControl={true}
                    containerClass="carousel-container pt-12 pb-20 mx-auto px-20"
                    dotListClass="custom-dot-list-style"
                    arrows={true} renderButtonGroupOutside={true}
                >
                        <div className="-ml-5">
                            <Card name="Nika Lea Tomicic"
                                color="orange-gradient orange-border"
                                pronouns="she/her"
                                title="Editor-in-Chief"
                                email="nika_lea.tomicic@tufts.edu"
                                major="Sociology + STS"
                                image={Image1} />
                        </div>
                        <div className="-ml-5">
                                <Card name="Kayla Fang"
                                    color="true-blue-gradient text-white"
                                    pronouns="she/her"
                                    title="Outreach & Partnerships"
                                    email="kfang1226@gmail.com"
                                    major="Applied Math + STS"
                                    image={Image2} />
                        </div>
                        <div className="-ml-5">
                            <Card name="Maddie Cortesi"
                                color="orange-gradient orange-border"
                                pronouns="she/her"
                                title="Graphic Design & Marketing"
                                email="madeline.cortesi@tufts.edu"
                                major="Sociology + STS"
                                image={Image3} />
                        </div>
                        <div className="-ml-5">
                            <Card name="fourth"
                                color="true-blue-gradient text-white"
                                pronouns="pronouns"
                                title="title"
                                email="email"
                                major="major"
                                image={Image4} />
                        </div>
                        <div className="-ml-5">
                            <Card name="fifth"
                                    color="orange-gradient orange-border"
                                    pronouns="pronouns"
                                    title="title"
                                    email="email"
                                    major="major"
                                    image={Image5} />
                        </div> 
                        <div className="-ml-5">   
                            <Card name="sixth"
                                color="true-blue-gradient text-white"
                                pronouns="pronouns"
                                title="title"
                                email="email"
                                major="major"
                                image={Image6} />
                        </div>
                </Carousel>
            </div>
            <div className="h-20 w-full mellow-yellow" id="triangle"></div>
        </div>
    )
}