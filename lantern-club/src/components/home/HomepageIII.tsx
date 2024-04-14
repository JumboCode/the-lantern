import Image from "next/image";
// import Poster from "../../images/submit-poster.png";

export default function HomepageIII() {
   
    const imageStyle = {
        minHeight: "300px",
        minWidth: "300px",
    };

    const triangleStyle = {
        backgroundColor: '#FECB66',
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
            {/* <div className="-mt-20 h-20 w-full" style={triangleStyle} id="triangle"></div> */}
            <div className="orange-gradient -mt-20 pb-40 pt-20 w-full flex flex-col md:grid md:grid-cols-2 gap-4 p-20 justify-center items-center"  id="pentagon">
                {/* text side */}
                <div className="px-4 flex mt-12 flex-col text-center justify-center items-start md:text-left">
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
                            src={"/images/submit-poster.png"}
                            height={280}
                            width={280} 
                            style={imageStyle}
                            alt="submission poster"
                        />
                    </div>
                </div>
            </div>
                {/* Additional content here */}
            
        </div>
    );
}
