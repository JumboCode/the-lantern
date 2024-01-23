import Link from "next/link";
import Image from "next/image";
import Poster from "../../images/submit-poster.png";

export default function HomepageIII() {
    const buttonStyle = {
        backgroundColor: "#4279BC",
        borderColor: "#94BBE3",
        borderWidth: "2px",
        color: "white",
        fontSize: "19px",
        borderRadius: "35px",
        width: "150px",
        height: "45px",
        fontFamily: "nunito",
    };

    const imageStyle = {
        minHeight: "300px",
        minWidth: "300px",
    };

    const background: React.CSSProperties = {
        height: "auto",
    };

    const headerFontStyle = {
        fontFamily: "coolvetica",
        fontSize: "90px",
        lineHeight: "1",
    };

    const round_box: React.CSSProperties = {
        display: "flex",
        gap: "20px",
        borderWidth: "2px",
        // marginTop: "2.5rem",
        // marginBottom: "2.5rem",
        borderRadius: "1.5rem",
        padding: "5rem",
        filter: "drop-shadow(5px 10px 3px rgb(0 0 0 / 0.2)) drop-shadow(0 8px 5px rgb(0 0 0 / 0.08))",
      };

    return (
        <div>
            <div className="-mt-20 py-20 px-20 blue2-gradient" style={background}>
                {/* text side */}
                <div className="px-4 md:px-0 md:ml-10 pb-14">
                    <p style={headerFontStyle}>
                        STS Department
                    </p>
                </div>

                {/* Ending box */}
                <div className="flex-col pale-yellow mellow-yellow-border font-nunito text-xl" style={round_box}>
                    <p className="font-bold">What is the STS department? </p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        <br></br> sed do eiusmod tempor incididunt ut labore et dolore 
                        <br></br> magna aliqua. Ut enim ad minim veniam, quis nostrud
                        <br></br> exercitation ullamco laboris nisi ut aliquip ex ea 
                        <br></br> commodo consequat. Duis aute irure dolor in 
                        <br></br> reprehenderit in voluptate velit esse cillum dolore eu 
                        <br></br> fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        <br></br> non proident, sunt in culpa qui offici. Duis aute irure 
                        <br></br> dolor in reprehenderit in voluptate velit esse cillum
                        <br></br> dolore eu fugiat nulla pariatur.
                    </p>
                    <button
                        style={buttonStyle}
                        className="hover:underline flex items-center justify-center" >
                        Learn More
                    </button>
                </div>

            </div>

            
        </div>
    );
}
