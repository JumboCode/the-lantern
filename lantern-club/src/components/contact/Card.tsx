import React from 'react';
import Image from 'next/image';

export default function Card(props: any) {
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
            <p style={proFont}>{props.pronouns}</p><br />
            <p style={textFont}><b>{props.title}</b></p>
            <p style={textFont}>{props.email}</p>
            <p style={textFont}>{props.major}</p>
            <div className="pt-7 flex justify-center">
                <Image src={props.image} height={225} width={225} className="rounded-3xl" alt="Officer image"/>
            </div>
        </div>
    );
}