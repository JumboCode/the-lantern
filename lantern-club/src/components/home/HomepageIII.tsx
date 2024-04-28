import Image from "next/image";
import Buttonv2 from "../Buttonv2";
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
    const openForm = () => {
        console.log('Form opened!');
      };

    return (
        <div>
            {/* <div className="-mt-20 h-20 w-full" style={triangleStyle} id="triangle"></div> */}
            <div className="orange-gradient -mt-36 md:-mt-20 pt-40 pb-40 md:pt-20 md:pb-32 w-full flex flex-col md:grid md:grid-cols-2 md:gap-4 md:p-20 justify-center items-center"  id="pentagon-body">
                {/* text side */}
                <div className="px-4 flex mt-12 flex-col text-center justify-center items-center md:items-start md:text-left">
                    <p style={headerFontStyle}>
                        Submit your work!
                    </p>
                    <p className="py-5 font-nunito text-xl">
                        Did you write a paper for an STS course that you're passionate about? Or do you have an idea that you're excited to share? Submit your work to The Lantern Magazine and join the conversation! We invite essays, opinion pieces, book reviews, and research.
                    </p>
                    <a href="http://forms.gle/JP6arAGa9cKE48Pv9" target="_blank" rel="noopener">
                    <Buttonv2
                  text="Submit Work"
                  action={openForm}
                  color="blue"
                  width="w-40"
                />
                </a>
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
