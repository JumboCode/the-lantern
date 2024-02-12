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

    const cardStyle = {
        height: '500px',
        width: '350px',
        borderWidth: '3px',
        borderRadius: "30px",
        justifyContent: "center",
    };

    function Card(props: any) {
        const nameFont = {
            fontFamily: 'coolvetica',
            fontSize: '40px',
            lineHeight: '1.2',
        };

        const proFont = {
            fontFamily: 'nunito',
            fontSize: '20px',
            lineHeight: '1.5',
        };
        
        const textFont = {
            fontFamily: 'nunito',
            fontSize: '20px',
            lineHeight: '1.4',
        };

        return(
            <div>
                <p style={nameFont}>{props.name}</p>
                <p style={proFont}>{props.pronouns}</p><br></br>
                <p style={textFont} className="leading-8"><b>{props.title}</b></p>
                <p style={textFont}>{props.email}</p>
                <p style={textFont}>{props.major}</p>
                <div className="pt-7 flex justify-center">
                    <Image src={props.image} height={225} width={225} className="rounded-3xl" alt="Officer image"/>
                </div>
            </div>
        )
    }

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
                        <div className="orange-gradient orange-border justify-center items-center text-center p-3 shadow-xl -ml-5" style={cardStyle}>
                            <Card name="Nika Lea Tomicic"
                                pronouns="she/her"
                                title="Editor-in-Chief"
                                email="nika_lea.tomicic@tufts.edu"
                                major="Sociology + STS"
                                image={Image1} />
                        </div>
                        <div className="true-blue-gradient justify-center items-center text-center p-3 shadow-xl text-white -ml-5" style={cardStyle}>
                                <Card name="Kayla Fang"
                                    pronouns="she/her"
                                    title="Outreach & Partnerships"
                                    email="kfang1226@gmail.com"
                                    major="Applied Math + STS"
                                    image={Image2} />
                        </div>
                        <div className="orange-gradient justify-center items-center orange-border text-center p-3 shadow-xl -ml-5" style={cardStyle}>
                            <Card name="Maddie Cortesi"
                                pronouns="she/her"
                                title="Graphic Design & Marketing"
                                email="madeline.cortesi@tufts.edu"
                                major="Sociology + STS"
                                image={Image3} />
                        </div>
                        <div className="true-blue-gradient justify-center items-center text-center p-3 shadow-xl text-white -ml-5" style={cardStyle}>
                            <Card name="fourth"
                                pronouns="pronouns"
                                title="title"
                                email="email"
                                major="major"
                                image={Image4} />
                        </div>
                        <div className="orange-gradient justify-center items-center orange-border text-center p-3 shadow-xl -ml-5" style={cardStyle}>
                            <Card name="fifth"
                                    pronouns="pronouns"
                                    title="title"
                                    email="email"
                                    major="major"
                                    image={Image5} />
                        </div> 
                        <div className="true-blue-gradient justify-center items-center text-center p-3 shadow-xl text-white -ml-5" style={cardStyle}>   
                            <Card name="sixth"
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