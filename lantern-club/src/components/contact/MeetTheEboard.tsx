import React from "react"
import { useState, Fragment } from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Card from "./Card"
import Buttonv2 from "../Buttonv2";
import EboardOverlay from "./EboardOverlay";

interface CardType {
    name: string;
    pronouns: string;
    title: string;
    email: string;
    major: string;
    pictureURL: string; 
    color?: string; 
}

interface MeetTheEBoardProps {
    data: CardType[]; 
}

const MeetTheEBoard = ({data}: MeetTheEBoardProps): JSX.Element => {

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

    const colors = [
        "orange-gradient orange-border", // For odd-indexed cards
        "true-blue-gradient text-white" // For even-indexed cards
    ];

    const [showModal, setShowModal] = useState(false);
    
    return(
        <div>
            <div className="-mt-20 pt-32 w-full yellow-gradient">
                <div className="ml-5">
                    <h1 className="font-coolvetica text-7xl ml-12">Meet the E-Board
                    <Fragment>
                        <text className="font-nunito underline text-2xl ml-7" onClick={() => setShowModal(true)}>edit</text>
                        <EboardOverlay type="Add" isVisible={showModal} onClose={() => {setShowModal(false)}} name="Nika Lea Tomicic" pronouns="she/her" title="Editor-in-Chief" email="nika_lea.tomicic@tufts.edu" major="Sociology + STS" />
                    </Fragment>
                    </h1>
                </div>
                    <Carousel
                    swipeable={true}
                    draggable={true}
                    showDots={false}
                    responsive={responsive}
                    ssr={true}
                    infinite={true}
                    keyBoardControl={true}
                    containerClass="carousel-container pt-12 pb-20 mx-auto px-20"
                    arrows={true}
                >
                    {data.map((card, index) => (
                        <div key={index} className="-ml-5">
                            <Card
                                name={card.name}
                                color={colors[index % 2]}
                                pronouns={card.pronouns}
                                title={card.title}
                                email={card.email}
                                major={card.major}
                                pictureURL={card.pictureURL} // Use the imageMap to get the correct image
                            />
                        </div>
                    ))}
                </Carousel>
                
            </div>
            <div className="h-20 w-full mellow-yellow" id="triangle"></div>
        </div>
    )
}; export default MeetTheEBoard;