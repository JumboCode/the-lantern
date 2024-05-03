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
        <div>
            <div className="yellow-gradient -mt-36 pt-40 pb-56  px-2 md:px-20 w-full p-20"  id="pentagon-body">
                <div className="flex gap-10 pt-6 md:text-7xl text-6xl">
                    <p style={headerFont}>Featured Issue</p>
                    {session?.user.isAdmin && (
                    <button className="font-nunito underline text-2xl mb-2 -ml-2 cursor-pointer relative transition-all duration-300 hover:text-orange-400" onClick={handleToggleAdminView}>
                        Edit
                    </button>
                    )}
                    
                </div>
                
                
                <div className="bg-gray-700 rounded-3xl py-20 min-h-[575px] flex justify-center items-center">
                    {currentImage && (
                        <div className="flex justify-center items-center w-full">
                            <Link href={currentImage}>
                                <iframe src={currentImage} className="w-full min-h-[575px] no-underline hover:underline" title="Selected" style={{ maxWidth: '100%', height: 'auto', width: '80vw' }} />
                            </Link>
                        </div>
                    )}
                </div>

            </div> 

        </div>

       
      );
     
}