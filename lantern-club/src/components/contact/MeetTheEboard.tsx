import React, { use } from "react"
import { useState, Fragment } from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Card from "./Card"
import ProfileType from "@/types/profile";
import EboardOverlay from "./EboardOverlay";
import { useSession } from "next-auth/react";

interface CardType {
    profile: ProfileType
    color?: string; 
    action?: () => void,
}

interface MeetTheEBoardProps {
    data: ProfileType[]; 
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

    const [showEditView, setShowEditView] = useState(false);
    const {data:session} = useSession();
    const [showModal, setShowModal] = useState(false);
    const [currentCardData, setCurrentCardData] = useState<ProfileType>();

    const handleToggleEditView = () => {
        setShowEditView(!showEditView);
    };

    const handleCardClick = (cardData: ProfileType) => {
        setCurrentCardData(cardData);
        setShowModal(true);
    };

    return(
        <div>
            <div className="-mt-20 pt-32 w-full yellow-gradient">
                <div className="ml-5">

                    <h1 className="font-coolvetica text-7xl ml-12">Meet the E-Board
                        { session?.user.isAdmin &&
                        <text className="font-nunito underline text-2xl ml-7" onClick={handleToggleEditView}>edit</text>
                        }
                    </h1>
                    
                </div>
                <div className="z-100" style={{ position: 'relative' }} >
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
                    {data.map((profileData, index) => (
                        <div key={index} className="-ml-5">
                            <Card
                                color={colors[index % 2]}
                                profile={profileData} // Use the imageMap to get the correct image
                                action={() => handleCardClick(profileData)}
                                isEditingView={showEditView}
                            />
                        </div>
                    ))}
                </Carousel>
                {showModal && currentCardData && (
                    <EboardOverlay 
                        type="Edit" 
                        isVisible={showModal} 
                        onClose={() => {setShowModal(false)}} 
                        profile={currentCardData}
                        />
                )}
            </div>  
            </div>
            <div className="h-20 w-full mellow-yellow" style={{ zIndex: -50, position: 'relative'}} id="triangle"></div>
        </div>
    )
}; export default MeetTheEBoard;
