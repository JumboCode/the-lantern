import React from "react"
import Image from "next/image"
import Image1 from "../images/ava1.jpg"
import Image2 from "../images/hannah1.jpeg"
import Image3 from "../images/ava2.jpg"
import Image4 from "../images/hannah2.jpg"
import Image5 from "../images/ava3.jpg"
import Image6 from "../images/hannah3.jpg"

export default function MeetTheEBoard(){
    const cardStyle = {
        height: '500px',
        width: '350px',
        borderWidth: '3px',
        borderRadius: "30px",
        justifyContent: "center",
      };

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
        lineHeight: '1.2',
      };

    return(
        <div>
            <div className="pt-20 w-full yellow-gradient">
                <h1 className="font-coolvetica text-7xl ml-12">Meet the E-Board</h1>
                <div className="carousel w-full pt-10 pb-20">
                    <div id="slide1" className="carousel-item relative">
                    <div className="pt-10 pb-10 flex grid grid-cols-3 w-full justify-items-center">
                        <div className="orange-gradient orange-border text-center p-3 shadow-xl" style={cardStyle}>
                            <p style={nameFont}>Nika Lea Tomicic</p>
                            <p style={proFont}>she/her</p><br></br>
                            <p style={textFont} className="leading-8"><b>Editor in Chief</b></p>
                            <p style={textFont}>nika_lea.tomicic@tufts.edu</p>
                            <p style={textFont}>Sociology + STS</p>
                            <div className="pl-8 pt-6">
                              <Image src={Image1} height={250} width={250} className="rounded-3xl" alt="Lantern Club Editor in Chief"/>
                            </div>
                        </div>

                        <div className="true-blue-gradient justify-center items-center text-center p-3 shadow-xl" style={cardStyle}>
                            <p style={nameFont} className="text-white">Kayla Fang</p>
                            <p style={proFont} className="text-white">she/her</p><br></br>
                            <p style={textFont} className="leading-8 text-white"><b>Outreach & Partnerships</b></p>
                            <p style={textFont} className="text-white">kfang1226@gmail.com</p>
                            <p style={textFont} className="text-white">Applied Math + STS</p>
                            <div className="pl-8 pt-6">
                                <Image src={Image2} height={250} width={250} className="rounded-3xl" alt="Outreach & Partnerships in Chief"/>
                            </div>
                        </div>

                        <div className="orange-gradient justify-center items-center orange-border text-center p-3 shadow-xl" style={cardStyle}>
                            <p style={nameFont}>Maddie Cortesi</p>
                            <p style={proFont}>she/her</p><br></br>
                            <p style={textFont} className="leading-8"><b>Graphic Design & Marketing</b></p>
                            <p style={textFont}>madeline.cortesi@tufts.edu</p>
                            <p style={textFont}>Sociology + STS</p>
                            <div className="pl-8 pt-6">
                                <Image src={Image3} height={250} width={250} className="rounded-3xl" alt="Graphic Design & Marketing in Chief"/>
                            </div>
                        </div>                        
                        </div>
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide2" className="btn btn-circle text-2xl ml-2">❮</a> 
                            <a href="#slide2" className="btn btn-circle text-2xl ml-2">❯</a>
                        </div>
                    </div> 
                    <div id="slide2" className="carousel-item relative">
                    <div className="pt-10 pb-10 flex grid grid-cols-3 w-full justify-items-center">
                        <div className="true-blue-gradient justify-center items-center text-center p-3 shadow-xl" style={cardStyle}>
                            <p style={nameFont} className="text-white">fourth</p>
                            <p style={proFont} className="text-white">pronouns</p><br></br>
                            <p style={textFont} className="leading-8 text-white"><b>position</b></p>
                            <p style={textFont} className="text-white">@gmail.com</p>
                            <p style={textFont} className="text-white">major</p>
                            <div className="pl-8 pt-6">
                                <Image src={Image4} height={250} width={250} className="rounded-3xl" alt="fourth"/>
                            </div>
                        </div>

                        <div className="orange-gradient justify-center items-center orange-border text-center p-3 shadow-xl" style={cardStyle}>
                            <p style={nameFont}>fifth</p>
                            <p style={proFont}>pronouns</p><br></br>
                            <p style={textFont} className="leading-8"><b>position</b></p>
                            <p style={textFont}>@gmail.com</p>
                            <p style={textFont}>major</p>
                            <div className="pl-8 pt-6">
                                <Image src={Image5} height={250} width={250} className="rounded-3xl" alt="fifth"/>
                            </div>
                        </div> 

                        <div className="true-blue-gradient justify-center items-center text-center p-3 shadow-xl" style={cardStyle}>   
                            <p style={nameFont} className="text-white">sixth</p>
                            <p style={proFont} className="text-white">pronouns</p><br></br>
                            <p style={textFont} className="leading-8 text-white"><b>position</b></p>
                            <p style={textFont} className="text-white">@gmail.com</p>
                            <p style={textFont} className="text-white">major</p>
                            <div className="pl-8 pt-6">
                                <Image src={Image6} height={250} width={250} className="rounded-3xl" alt="sixth"/>
                            </div>
                        </div>
                        </div>
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide1" className="btn btn-circle text-2xl ml-2">❮</a> 
                            <a href="#slide1" className="btn btn-circle text-2xl ml-2g">❯</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="h-20 w-full mellow-yellow" id="triangle"></div>
        </div>
    )
}