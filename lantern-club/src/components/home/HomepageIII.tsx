import Link from "next/link";
import Image from "next/image";
import Poster from "../../images/submit-poster.png";
import Buttonv2 from "../Buttonv2";

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

    const headerFontStyle = {
        fontFamily: "coolvetica",
        fontSize: "90px",
        lineHeight: "1",
    };
    const handleButtonClick = () => {
        // TODO
        console.log('Button clicked!');
      };

    return (
        <div>
            <div className="orange-gradient -mt-20 pt-20 w-full flex flex-col md:grid md:grid-cols-2 gap-4 p-20 justify-center items-center">
                {/* text side */}
                <div className="px-4 md:px-0 md:ml-10">
                    <p style={headerFontStyle}>
                        Submit your work!
                    </p>
                    <p className="py-5 font-nunito text-xl">
                        Did you write a paper for an STS course that you’re passionate about? Or do you have an idea that you’re excited to share? Submit your work to The Lantern Magazine and join the conversation! We invite essays, opinion pieces, book reviews, and research.
                    </p>
                    {/* <button
                        style={buttonStyle}
                        className="hover:underline flex items-center justify-center"
                    >
                        Submit
                    </button> */}
                    {/* <Buttonv2 text="Submit" action={handleButtonClick} color="blue" width="w-40" /> */}
                </div>

                {/* image side */}
                <div className="flex justify-center items-center mt-4 md:mt-20">
                    <div>
                        <Image
                            src={Poster.src}
                            height={280}
                            width={280}
                            style={imageStyle}
                            alt="submission poster"
                        />
                    </div>
                </div>
            </div>

            <div className="h-20 w-full flex-1 mellow-yellow" id="triangle">
                {/* Additional content here */}
            </div>
        </div>
    );
}
