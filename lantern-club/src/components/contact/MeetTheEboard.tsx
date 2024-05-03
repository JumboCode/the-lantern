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
            items: 1,
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
            <div className="flex flex-col -mt-40 md:-mt-28 pt-32 pb-32 w-full yellow-gradient px-4 md:px-4" id="pentagon-body"> 
                    <div className="flex md:flex-row flex-col justify-center md:justify-start md:ml-16 md:grid md:grid-cols-2">
                        <div className="flex md:flex-row flex-col">
                            <h1 className="font-coolvetica text-6xl text-center pt-6 md:text-7xl w-12/12">
                            Meet the E-Board
                            </h1>
                            <div className="md:mt-14">
                            {session?.user.isAdmin && (
                                <p className="font-nunito underline text-center md:text-2xl text-lg md:mb-2 md:mt-0 -mt-6 md:ml-10 cursor-pointer transition-all duration-300 hover:text-orange-400" onClick={handleToggleEditView}>
                                Edit
                                </p>
                            )}
                            </div>
                        </div>
                        <div className="md:mr-16 md:mt-5 mt-8">
                            {showEditView && (
                                <div className="flex flex-row items-center md:justify-end justify-center">
                                    <FontAwesomeIcon onClick={() => setShowAddModal(true)} icon={faCirclePlus} className="md:text-7xl text-5xl mr-2 cursor-pointer transition-all duration-500 hover:text-orange-400" />
                                    <span className="font-nunito md:text-2xl text-lg ml-3">Add New</span>
                                </div>
                            )}
                        </div>
                        
                    </div>
                    
                <div>
                    <Carousel
                        swipeable={true}
                        draggable={true}
                        showDots={false}
                        responsive={responsive}
                        ssr={true}
                        infinite={true}
                        keyBoardControl={true}
                        containerClass="carousel-container pt-12 pb-20 mx-auto md:px-16"
                        itemClass="flex justify-center md:justify-start"
                        arrows={true}
                    >
                        {data.map((profileData, index) => (
                            <div key={index} className="">
                                <Card
                                    color={colors[index % 2]}
                                    profile={profileData} // Use the imageMap to get the correct image
                                    action={() => handleCardClick(profileData)}
                                    isEditingView={showEditView}
                                />
                            </div>
                        ))}
                    </Carousel>
                </div>
                
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
