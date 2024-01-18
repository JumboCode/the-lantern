import Link from "next/link";
import Image from "next/image";
import Poster from "../../images/submit-poster.png";

export default function HomepageIII() {
  
    const buttonStyle: React.CSSProperties = {
        backgroundColor: "#4279BC",
        borderColor: "#94BBE3",
        borderWidth: "2px",
        color: "white",
        fontSize: "19px",
        borderRadius: "35px",
        width: "150px",
        height: "45px",
        right: "30px",
        bottom: "15px",
        fontFamily: "nunito",
      };

      const image: React.CSSProperties = {
        minHeight: "300px",
        minWidth: "300px",
      };

      const header_font: React.CSSProperties = {
        fontFamily: "coolvetica",
        fontSize: "90px",
        lineHeight: "1",
      };

      
    return (
    
    <div> 
        <div className="orange-gradient -mt-20 pt-20 w-full h-88 flex flex-row gap-0 p-20 grid grid-cols-2 justify-center items-center  ">
                {/* text side */}
                <div className = "ml-10 justify-center items-center px-0 inset-x-0 start-0">
                        <p style={header_font}>
                        Submit your work!
                        
                        </p> 
                        <p className="py-5 font-nunito text-xl">
                                Did you write a paper for an STS course that you’re 
                                passionate about? Or do you have an idea that you’re 
                                excited to share? Submit your work to The Lantern 
                                Magazine and join the conversation! We invite essays, 
                                opinion pieces, book reviews, and research.
                        </p>
                        
                        <button
                                style={buttonStyle}
                                className="hover:underline flex items-center justify-center"

                        >Submit
                        </button>
                </div>

                {/* image side */}
                <div className="flex justify-center items-center relative px-20 mt-20" >
                        <div className = "mt-6"> 
                                <Image
                                src={Poster.src}
                                height={280}
                                width={280}
                                style={image}
                                alt="submission poster"
                                />
                        </div> 
                        
                </div>
        </div>

        <div className="h-20 w-full flex-1 mellow-yellow" id="triangle"> 

                
        
        </div> 
    </div> 
    

  );
}
