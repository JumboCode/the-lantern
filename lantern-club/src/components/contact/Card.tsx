import React from 'react';
import Image, { StaticImageData } from 'next/image';
import Image1 from "../../images/ava1.jpg"
import Image2 from "../../images/hannah1.jpeg"
import Image3 from "../../images/ava2.jpg"
import Image4 from "../../images/hannah2.jpg"
import Image5 from "../../images/ava3.jpg"
import Image6 from "../../images/hannah3.jpg"
import Pencil from "../../images/pencil.png"

interface CardProps {
    name: string;
    pronouns: string;
    title: string;
    email: string;
    major: string;
    pictureURL: string; 
    color?: string; 
    action?: () => void;
}

interface ImageMap {
    [key: string]: StaticImageData; 
}

const imageMap: ImageMap = {
    "ava1.jpg": Image1,
    "hannah1.jpeg": Image2,
    "ava2.jpg": Image3,
    "hannah2.jpg": Image4,
    "ava3.jpg": Image5,
    "hannah3.jpg": Image6,
};

const Card = ({ name, pronouns, title, email, major, pictureURL, color, action }: CardProps): JSX.Element => {
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

    const cardStyle = {
        height: '500px',
        width: '350px',
        borderWidth: '3px',
        borderRadius: "30px",
        justifyContent: "center",
    }; 

    return(
        <div className={`${color} p-3 shadow-xl justify-center items-center text-center`} style={cardStyle}>
            <div className="flex justify-end -mb-5 mr-3 mt-2">
                <button onClick={action}>
                    <Image src={Pencil} height={20} width={20} className="justify-end" alt="pencil edit icon" />
                </button>
            </div>
            <p style={nameFont}>{name}</p>
            <p style={proFont}>{pronouns}</p><br />
            <p style={textFont}><b>{title}</b></p>
            <p style={textFont}>{email}</p>
            <p style={textFont}>{major}</p>
            <div className="pt-7 flex justify-center">
                <Image src={imageMap[pictureURL]} height={225} width={225} className="rounded-3xl" alt="Officer image"/>
            </div>
        </div>
    );
}; export default Card;