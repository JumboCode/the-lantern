import React from 'react';
import Image from 'next/image';
import { ProfileType } from '@/types/profile';
import { CSSProperties } from 'react'; // Import CSSProperties

interface CardProps {
    color?: string,
    action?: () => void,
    profile: ProfileType,
    isEditingView: boolean
}

const Card = ({ profile, color, action, isEditingView }: CardProps) => {
    const cardStyle: CSSProperties = {
        display: 'flex', 
        flexDirection: 'column',
        alignItems: 'center', 
        justifyContent: 'center',
        height: '500px',
        width: '350px',
        borderWidth: '3px',
        borderRadius: "30px",
        padding: '3rem', 
        gap: '1rem', 
        position: 'relative', 


    };

    return (
        <div className={`${color} shadow-xl text-center`} style={cardStyle}>
            {isEditingView &&
            <div style={{ position: 'absolute', top: '1rem', right: '1rem' }}>
                <button onClick={action}>
                    <Image src="/images/pencil.png" height={20} width={20} alt="pencil edit icon" />
                </button>
            </div>
            }
            
            <div style={{ height: '220px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <p className="font-coolvetica text-4xl ">{profile.name}</p>
                <p className="font-nunito text-xl">{profile.pronouns}</p>
                <br></br>

                <p className="font-nunito text-xl font-extrabold">{profile.title}</p>
                <p className="font-nunito text-xl ">{profile.email}</p>
                <p className="font-nunito text-xl ">{profile.major}</p>
            </div>
            <div className="relative flex-grow w-full" style={{ minHeight: '200px' }}>
                <Image
                    src={profile.pictureURL}
                    alt="Profile image"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-3xl"
                />
            </div>      
        </div>
    );
};

export default Card;
