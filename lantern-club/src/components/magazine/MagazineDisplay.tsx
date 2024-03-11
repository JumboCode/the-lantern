import { useEffect, useState } from 'react';
import axios from 'axios';
import Image from "next/image";
import Lantern from "../../images/bluelatern.png";




export default function MagazineDisplay () {
    const triangle: React.CSSProperties = {
        backgroundColor: "#FECB66",
      };
    const headerFont = {
        fontFamily: 'coolvetica',
        fontSize: '90px',
        lineHeight: '1',
      };
      const subheaderFont = {
        fontFamily: 'nunito',
        fontSize: '30px',
        lineHeight: '1',
      };
    const [fileList, setFileList] = useState([]);
    useEffect(() => {
        const fetchFileList = async () => {
          try {
            const response = await axios.get('/api/listFiles');
            setFileList(response.data.urls);
          } catch (error) {
            console.error('Error fetching file list:', error);
          }
        };
    
        fetchFileList();
      }, []);

      return (
        <div>
            <div className="-mt-20 p-20 pt-40 w-full yellow-gradient flex gap-5 flex-col">
                <p style={headerFont}>Magazine issues</p>
                
            </div> 
            
            {/* triangle man */}
            <div className="h-20 w-full" style={triangle} id="triangle"></div>


            {/* the blue guy  */}
            {/* <div className="w-full blue2-gradient flex flex-col md:grid md:grid-cols-2 -mt-20 pb-20 pt-20 md:pt-0"> */}
            <div className="-mt-20 p-20 pt-40 w-full blue2-gradient flex gap-5 flex-col">
                <div className="flex align-items-center">
                    <div>
                        <p style={headerFont}>Read Past Issues</p>
                        <ul>
                            {fileList.map((url, index) => {
                            // Extract file name from the URL
                            const keyName = "uploads/" + url.substring(url.lastIndexOf('/') + 1);
                            const key = url.substring(url.lastIndexOf('/') + 1);
                            let fileName = keyName.substring(keyName.indexOf('_') + 1);
                            fileName = fileName.replace(/\.[^/.]+$/, "");

                            return (
                                <li key={index} >
                                
                                {/* gets rid of the file extension */}
                                <div className="flex pt-5 align-bottom">
                                <a className="w-60" href={url} target="_blank">{fileName}</a>                         
                                </div>
                            
                                </li>
                            );
                            })}
                        </ul>
                    </div>
                   {/* image side */}
                    <div className="flex justify-center items-center mt-4 md:mt-20">
                        <div>
                            <Image
                                src={Lantern.src}
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