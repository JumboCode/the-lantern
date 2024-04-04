import { useEffect, useState } from 'react';
import axios from 'axios';
import Image from "next/image";
import Link from "next/link"
import { useSession } from 'next-auth/react';
// import Lantern from "../../images/bluelatern.png";



interface MagazineDisplayProps {
  handleToggleAdminView: () => void
  magazines: any[]
  
}
export default function MagazineDisplay ({ handleToggleAdminView, magazines }: MagazineDisplayProps) {
    const triangle: React.CSSProperties = {
        backgroundColor: "#FECB66",
      };
    const headerFont = {
        fontFamily: 'coolvetica',
        marginBottom: "3.5rem",
        lineHeight: '1',
      };
      const subheaderFont = {
        fontFamily: 'nunito',
        fontSize: '30px',
        lineHeight: '1',
      };
    
      const { data: session } = useSession();
      
      const [fileList, setFileList] = useState([]);
      const [currentImage, setCurrentImage] = useState('');
      
      useEffect(() => {
        const fetchFileList = async () => {
          try {
            const response = await axios.get('/api/content/magazine/');
            setFileList(response.data.urls);
            if (response.data.urls.length > 0) {
                    // Automatically set the first image as the current image
                    setCurrentImage(response.data.urls[0]);
            }
    
          } catch (error) {
            console.error('Error fetching file list:', error);
          }
        };
    
        fetchFileList();
      }, []);
      
      return (
        <div>
            <div className="yellow-gradient -mt-20 py-40 px-20 w-full p-20">
                <div className="flex gap-10 md:text-8xl text-6xl">
                    <p style={headerFont}>Magazine Issues</p>
                    {session?.user.isAdmin && (
                    <button className="font-nunito underline text-2xl ml-7" onClick={handleToggleAdminView}>
                        Edit
                    </button>
                    )}
                </div>
                
                
                <div className="bg-gray-700 rounded-3xl py-20 min-h-[575px] flex justify-center items-center">
                    {currentImage && (
                        <div className="flex justify-center items-center w-full h-full">
                            <Link href={currentImage}>
                                <iframe src={currentImage} className="w-full min-h-[575px] no-underline hover:underline" title="Selected" style={{ width: '80vw'}} />
                            </Link>


                        </div>
                    )}
                </div>
            </div> 
            
            {/* triangle man */}
            <div className="h-20 w-full" style={triangle} id="triangle"></div>


            {/* the blue guy  */}
            {/* <div className="w-full blue2-gradient flex flex-col md:grid md:grid-cols-2 -mt-20 pb-20 pt-20 md:pt-0"> */}
            <div className="-mt-20 p-20 pt-40 w-full blue2-gradient flex gap-5 flex-col">
                <div className="grid grid-flow-col">
                    {/* left container  */}
                    <div>
                        <p className="md:text-8xl text-6xl" style={headerFont}>Read Past Issues</p>
                        <ul>
                            {magazines.map((url: string, index) => {
                                // Extract file name from the URL
                                const keyName = "uploads/" + url.substring(url.lastIndexOf('/') + 1);
                                //const key = url.substring(url.lastIndexOf('/') + 1);
                                let fileName = keyName.substring(keyName.indexOf('_') + 1);
                                fileName = fileName.replace(/\.[^/.]+$/, "");

                                return (
                                    <li key={index}>

                                        {/* gets rid of the file extension */}
                                        <div className="flex pt-5 align-bottom">
                                            <Link className="w-60 hover:underline" href={url} style={{fontWeight: 'normal'}}>
                                                <span style={{transition: 'all 0.3s ease', fontWeight: 'bold', textDecoration: 'none'}}>
                                                    {fileName}
                                                </span>
                                            </Link>
                                        </div>

                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                   {/* image side */}
                    <div className="px-20 flex justify-center items-center">
                        <div>
                            <Image
                                src={"/images/bluelatern.png"}
                                height={280}
                                width={280}
                                // style={imageStyle}
                                alt="submission poster"
                            />
                        </div>
                    </div>

                    
                </div>

                
                
          
            </div>

        </div>

       
      );
     
}