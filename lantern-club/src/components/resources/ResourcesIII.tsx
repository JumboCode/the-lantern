import Link from "next/link";
import Image from "next/image";
import stsresources from '../../images/sts-resources.png';
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
                <div className="py-10 px-4 md:px-0 md:ml-10 pb-14">
                    <p style={headerFontStyle}>
                        What is the STS Department?
                    </p>
                </div>

                {/* Ending box */}

                <div className="flex-col pale-yellow mellow-yellow-border font-nunito text-xl" style={round_box}>
                    <div className="flex-col md:flex-row" >
                        {/* Row 1 */}
                        <div className="flex flex-row justify-center items-start px-5">
                            <div className="pr-10 pb-10">
                                <p>From the <u>Tufts University School of Arts & Sciences STS 
                                    Department website</u>: Science, Technology, and Society 
                                    draws on humanities and social sciences approaches to 
                                    study science and technology in their social context. We 
                                    have more than 40 faculty affiliates across Tufts 
                                    University - from anthropology, biology, classics, 
                                    education, engineering, history, mathematics, music, 
                                    philosophy, physics, political science, urban and 
                                    environmental policy and planning, and many more. This 
                                    makes the STS program a site for rich cross-pollination 
                                    of ideas and expertise. An interdisciplinary major and 
                                    minor have been available since Spring 2016. (Tufts 
                                    University)
                                </p>
                            </div>
                            
                            <br></br>
                            <br></br>
                            {/* <div className="pl-8" > */}
                                {/* Placeholder image while we wait for the real images from the google drive */}
                                <Image
                                    src={stsresources.src}
                                    height={1968}
                                    width={3246}
                                    // style={imageStyle}
                                />
                            {/* </div> */}
                            
                        </div>
                        <br></br>
                            <p></p>
                    </div>
                    
                    {/* Row 2  */}
                    <div className="flex-col md:flex-row" >
                        <div className="flex flex-row justify-center items-start px-5">
                            
                            <Image
                                src={stsresources.src}
                                height= {1968}
                                width={3246}
                                // style={imageStyle}
                            />
                            <br></br>
                            <br></br>
                            <div className="pl-10 py-10">
                            <p> The 10-course <u><a href="https://as.tufts.edu/science-technology-and-society/requirements/babs-science-technology-and-society-co-major">co-major</a></u> must be declared in conjunction 
                                with another major, and pairs very well with pairs well 
                                with science, humanities, social science, or visual and 
                                performing arts majors (Tufts University). The 6-
                                course <u><a href="https://as.tufts.edu/science-technology-and-society/requirements/minor-science-technology-and-society">minor</a></u> may be of particular interest to students 
                                majoring in the natural sciences or enrolled in the School 
                                of Engineering as a complement to their major technical 
                                fields (Tufts University).
                            </p>
                            </div>

                        </div>
                        
                    </div>

                    {/* Row 3 */}
                    <div className="flex-col md:flex-row" >
                        <div className="flex flex-row justify-center items-start px-5">
                        <div className="pr-12 py-10">
                            <p> Exciting and interdisciplinary courses are offered in the 
                                STS department---and cross-listed across multiple 
                                disciplines---each semester. Some recently offered 
                                examples include STS 32/ANTH 32 Introduction to the 
                                Anthropology of Science & Technology; STS 50-01 STS 
                                Lunch Seminar Series; STS 148/ANTH 148 Medical 
                                Anthropology; STS 12/HIST 12 History of Science, 
                                Technology, and Medicine; PHIL 0057/STS 0057/ENP 
                                0028 Philosophy of Technology; CS 0028 Cyber-Security 
                                & Cyber-Warfare; ENG 0160 Environmental Justice and 
                                World Literature; SOC 0108 Epidemics: Plagues, People, 
                                and Politics. </p>
                         </div>                       
                        <br></br>

                            <Image
                                src={stsresources.src}
                                height={1968}
                                width={3246}
                                // style={imageStyle}
                            />
                        </div>

                    </div>
                        
                    
                            {/* <img className="justify-self-end mr-20" src={stsresources.src}/> */}
                </div>
                    
            </div>

        </div>
        
    );
}
