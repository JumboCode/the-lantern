import { useEffect, useState } from 'react';
import Image from "next/image";
import Link from "next/link"
import { useSession } from 'next-auth/react';
import extractFileNameFromURL from '@/utils/extractFileNameFromURL';

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


  const { data: session } = useSession();
  const [currentImage, setCurrentImage] = useState('');

  useEffect(() => {
    const fetchFeaturedFile = async () => {
      try {
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
    fetchFeaturedFile();
  }, []);
  
  return (
    <div>
        <div className="yellow-gradient -mt-20 py-40  px-2 md:px-20 w-full p-20">
            <div className="flex gap-10 md:text-8xl text-6xl">
                <p style={headerFont}>Magazine Issues</p>
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
        
        {/* triangle man */}
        <div className="h-20 w-full" style={triangle} id="triangle"></div>


        {/* the blue guy  */}
        <div className="-mt-20 p-20 pt-40 w-full blue2-gradient flex gap-5 flex-col">
            <div className="grid grid-flow-col">
                {/* left container  */}
                <div>
                    <p className="md:text-8xl text-6xl" style={headerFont}>Read Past Issues</p>
                    <ul>
                        {magazines.map((url: string, index) => {
                          
                            let fileName = extractFileNameFromURL(url);
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

    </div>

    
  );
     
}