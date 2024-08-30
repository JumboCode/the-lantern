import Link from "next/link";
import Image from "next/image";

export default function HomepageIII() {
    const round_box: React.CSSProperties = {
        display: "flex",
        gap: "20px",
        borderWidth: "2px",
        borderRadius: "1.5rem",
        padding: "2.5rem",
        filter: "drop-shadow(5px 10px 3px rgb(0 0 0 / 0.2)) drop-shadow(0 8px 5px rgb(0 0 0 / 0.08))",
    };

    return (
        <div>
            <div className="-mt-20 py-20 px-4 md:px-10 blue2-gradient">
                {/* text side */}
                <div className="py-10 px-4 md:px-0 pb-14 md:ml-10">
                    <p className="py-5 md:text-8xl text-6xl font-coolvetica">
                        What is the STS Department?
                    </p>
                </div>

                {/* Yellow box with text and images */}
                <div className="flex-col pale-yellow mellow-yellow-border font-nunito text-xl ml-0 md:ml-10" style={round_box}>
                    {/* Row 1 */}
                    <div className="flex flex-col md:flex-row items-center justify-center">
                        <div className="pr-0 md:pr-10 md:w-1/2 text-lg md:text-xl pb-10">
                            <p>From the <u><a href="https://as.tufts.edu/science-technology-and-society/about" className="text-sky-500">Tufts University School of Arts & Sciences STS 
                                Department website</a></u>: Science, Technology, and Society 
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
                        <div className="relative md:w-1/2 h-96 md:h-auto flex justify-center">
                            <Image
                                src={"/images/vialPic.png"}
                                width={450}
                                height={500}
                                className="rounded-3xl"
                                alt="Vial"
                            />
                        </div>
                    </div>

                    {/* Row 2 */}
                    <div className="flex flex-col-reverse md:flex-row items-center justify-center">
                        <div className="relative w-full md:w-1/2 h-96 md:h-auto flex justify-center">
                            <Image
                                src={"/images/plants.png"}
                                width={450}
                                height={500}
                                className="rounded-3xl"
                                alt="Plants"
                            />
                        </div>
                        <div className="md:pl-10 md:w-1/2 text-lg md:text-xl pb-10 pt-10">
                            <p>The 10-course <u>
                                    <a href="https://as.tufts.edu/science-technology-and-society/requirements/babs-science-technology-and-society-co-major" className="text-sky-500">co-major</a>
                                </u> must be declared in conjunction with another major, and pairs very well with science, humanities, social science, or visual and performing arts majors (Tufts University). The 6-course <u>
                                    <a href="https://as.tufts.edu/science-technology-and-society/requirements/minor-science-technology-and-society" className="text-sky-500">minor</a>
                                </u> may be of particular interest to students majoring in the natural sciences or enrolled in the School of Engineering as a complement to their major technical fields (Tufts University).
                            </p>
                        </div>
                    </div>

                    {/* Row 3 */}
                    <div className="flex flex-col md:flex-row items-center justify-center">
                        <div className="md:pr-10 md:w-1/2 text-lg md:text-xl pt-10">
                            <p>
                                Exciting and interdisciplinary courses are offered in the STS department---and cross-listed across multiple disciplines---each semester. Some recently offered examples include STS 32/ANTH 32 Introduction to the Anthropology of Science & Technology; STS 50-01 STS Lunch Seminar Series; STS 148/ANTH 148 Medical Anthropology; STS 12/HIST 12 History of Science, Technology, and Medicine; PHIL 0057/STS 0057/ENP 0028 Philosophy of Technology; CS 0028 Cyber-Security & Cyber-Warfare; ENG 0160 Environmental Justice and World Literature; SOC 0108 Epidemics: Plagues, People, and Politics.
                            </p>
                        </div>
                        <div className="relative w-full md:w-1/2 h-96 md:h-auto flex justify-center pt-10">
                            <Image
                                src={"/images/brain.png"}
                                width={450}
                                height={500}
                                className="rounded-3xl"
                                alt="Brain"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}