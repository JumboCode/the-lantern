import React, { use } from "react"
import { useState } from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Card from "./Card"
import EboardOverlay from "./EboardOverlay";
import { useSession } from "next-auth/react";
import { ProfileType } from '@/types/profile';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons'

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
    const [showAddModal, setShowAddModal] = useState(false);
    const [showEditModal, setShowEditModal] = useState(false);
    const [currentCardData, setCurrentCardData] = useState<ProfileType>();

    const handleToggleEditView = () => {
        setShowEditView(!showEditView);
    };

    const handleCardClick = (cardData: ProfileType) => {
        setCurrentCardData(cardData);
        setShowEditModal(true);
    };
    

    return(
        <div className="z-40">
            <div className="-mt-20 pt-32 w-full yellow-gradient">
                <div className="ml-5">
                    <h1 className="font-coolvetica text-6xl md:text-8xl ml-12 flex items-end w-12/12">
                    Meet the E-Board
                    {session?.user.isAdmin && (
                        <span className="font-nunito underline text-2xl ml-8 mb-2 cursor-pointer transition-all duration-300 hover:text-orange-400" onClick={handleToggleEditView}>
                        Edit
                        </span>
                    )}
                    {showEditView && (
                        <div className="flex items-center ml-auto">
                            <FontAwesomeIcon onClick={() => setShowAddModal(true)} icon={faCirclePlus} className="text-7xl mr-2 cursor-pointer" />
                            <span className="font-nunito text-lg">Add New</span>
        
                        </div>
                    )}
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
                {showEditModal && currentCardData && (
                    <EboardOverlay 
                        type="Edit" 
                        isVisible={showEditModal} 
                        onClose={() => {setShowEditModal(false)}} 
                        profile={currentCardData}
                        />
                )}
                {showAddModal && (
                    <EboardOverlay 
                        type="Add" 
                        isVisible={showAddModal} 
                        onClose={() => {setShowAddModal(false)}} 
                    />
                )}
            </div>
            
        </div>
    )
}; export default MeetTheEBoard;
