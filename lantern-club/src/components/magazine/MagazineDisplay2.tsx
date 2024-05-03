import { useEffect, useState } from 'react';
import axios from 'axios';
import Image from "next/image";
import Link from "next/link"
import { useSession } from 'next-auth/react';
import extractFileNameFromURL from '@/utils/extractFileNameFromURL';

import FadeInOutComponent from "@/components/about/FadeInOutComponent";
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
      
      const fetchFeatured = async () => {
        try {
          const response = await fetch("/api/content/magazine/featured", { method: "GET" });
          const data = await response.json();
          
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          // console.log(data);
          return data[0];
        } catch (error) {
          console.log("Error fetching featured mag:", error);
        }
      }

      useEffect(() => {
        const fetchFileList = async () => {
          try {
            const response = await axios.get('/api/content/magazine/');
            setFileList(response.data.urls);
            const featuredResponse = await fetch("/api/content/magazine/featured", { method: "GET" });
            const featuredData = await featuredResponse.json();
            if (featuredData.length > 0) {
                    const featured = featuredData[0].cloudURL;
                    setCurrentImage(featured);
            }
    
          } catch (error) {
            console.error('Error fetching file list:', error);
          }
        };
    
        fetchFileList();
      }, []);
      
      return (
            <div className="-mt-36 p-20  w-full blue2-gradient flex gap-5 flex-col"  id="pentagon2">
                <div className="grid grid-flow-col">
                    {/* left container  */}
                    <div>
                        <p className="md:text-7xl pt-12 text-6xl" style={headerFont}>Read Past Issues</p>
                        <ul>
                            {magazines.map((url: string, index) => {
                                // Extract file name from the URL
                                // console.log("url: ", url);
                                let fileName = extractFileNameFromURL(url);
                                // const keyName = "uploads/" + url.substring(url.lastIndexOf('/') + 1);
                                // //const key = url.substring(url.lastIndexOf('/') + 1);
                                // let fileName = keyName.substring(keyName.indexOf('_') + 1);
                                // fileName = fileName.replace(/\.[^/.]+$/, "");

                                return (
                                    <li key={index}>

                                        {/* gets rid of the file extension */}
                                        <div className="flex pt-5 align-bottom">
                                            <Link className="w-60 md:w-1/2 hover:underline" href={url} target="_blank" rel="noopener noreferrer" style={{fontWeight: 'normal'}}>
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
                   <div className="flex justify-center items-center">
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

       
      );
     
}