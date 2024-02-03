import React from "react"

export default function MeetTheEBoard(){
    const cardStyle = {
        height: '370px',
        width: '300px',
        borderWidth: '3px',
        borderRadius: "30px",
      };

      const nameFont = {
        fontFamily: 'coolvetica',
        fontSize: '35px',
        lineHeight: '1.5',
      };
      const proFont = {
        fontFamily: 'nunito',
        fontSize: '20px',
        lineHeight: '1',
      };
      const spacer = {
        fontFamily: 'nunito',
        fontSize: '20px',
        lineHeight: '1',
      };
    return(
        <div>
            <div className="pt-20 w-full yellow-gradient flex flex-col">
                <h1 className="font-coolvetica text-7xl ml-12">Meet the E-Board</h1>
                <div className="flex grid grid-cols-3 w-full p-10">
                    <div className="orange-gradient justify-center items-center orange-border text-center p-3 shadow-xl" style={cardStyle}>
                            <p style={nameFont}>Nika Lea Tomicic</p>
                            <p style={proFont}>she/her</p>
                            <p style={proFont} className="leading-8"><b>Editor in Chief</b></p>
                            <p style={proFont}>Sociology + STS</p>
                    </div>
                    <div className="blue2-gradient justify-center items-center text-center p-3 shadow-xl" style={cardStyle}>
                            <p style={nameFont}>Kayla Fang</p>
                            <p style={proFont}>she/her</p>
                            <p style={proFont} className="leading-8"><b>Outreach & Partnerships</b></p>
                            <p style={proFont}>Applied Math + STS</p>
                    </div>
                    <div className="orange-gradient justify-center items-center orange-border text-center p-3 shadow-xl" style={cardStyle}>
                            <p style={nameFont}>Maddie Cortesi</p>
                            <p style={proFont}>she/her</p>
                            <p style={proFont} className="leading-8"><b>Graphic Design & Marketing</b></p>
                            <p style={proFont}>Sociology + STS</p>
                    </div>
                </div>
            </div>     
        <div className="h-20 w-full mellow-yellow" id="triangle"></div>
        </div>
    )
}