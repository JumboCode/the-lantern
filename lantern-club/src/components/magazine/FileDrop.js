import { useEffect, useState } from 'react';
import axios from 'axios';
import Link from 'next/link';
import { FeaturedMagType } from "@/types/featuredmag"
// import { handleDeleteFeaturedMag } from '../../../prisma/delete-data';
// import { handleAddFeaturedMag } from '../../../prisma/insert-data';
// import { handleFetchFeaturedMag } from '../../../prisma/read-data';

const FileDrop = () => {
        const [fileList, setFileList] = useState([]);
        const [currentImage, setCurrentImage] = useState('');

        const handleDeleteFeaturedMag = async () => {
          
          const url = `/api/content/magazine/featuredmag`;

          try {
            const Delresponse = await fetch(url, {
              method: "DELETE",
            });
            const result = await Delresponse.json();
          } catch (error) {
            console.error("Failed to switch the featured mag:", error);
          }
        };

        // const fetchFeatured = async () => {
        //   try {
        //     const response = await fetch("/api/content/magazine/featured", { method: "GET" });
        //     const data = await response.json();
            
        //     if (!response.ok) {
        //       throw new Error('Network response was not ok');
        //     }
        //     return data[0];
        //   } catch (error) {
        //     console.log("Error fetching featured mag:", error);
        //   }
        // }
        const handleFeatureMag = async (newFeatured) => {

          const url = `/api/content/magazine/featuredmag`;

          try {
            const data = {
              cloudURL : newFeatured
            };
            const response = await fetch(url, {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(data)
            });
          } catch (error) {
            console.error("Failed to add the event:", error);
          }
        };

        useEffect(() => {
                const fetchFileList = async () => {
                try {
                  
                        const response = await axios.get('/api/content/magazine/');
                        // const featuredResponse = await axios.get('/api/content/magazine/');
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

        const handleImageChange = (event) => {
                              
                handleDeleteFeaturedMag();
                handleFeatureMag(event.target.value);
                
                setCurrentImage(event.target.value);
        };

        

        return (
            <div className="dropdown">
                <select onChange={handleImageChange} value={currentImage}>
                        {fileList.map((url, index) => {
                        // Extract file name from the URL
                        let fileName = url.substring(url.lastIndexOf('/') + 1);
                        fileName = fileName.substring(fileName.indexOf('_') + 1);
                        return (
                        <option key={index} value={url}>
                                {fileName.replace(/\.[^/.]+$/, "")}
                        </option>
                        );
                        })}
                </select>
                {currentImage && (
                <div style={{ marginTop: '20px', textAlign: 'center' }}>
                    <Link href={currentImage}><iframe src={currentImage} alt="Selected" style={{ maxWidth: '100%', maxHeight: '500px', objectFit: 'contain' }} /></Link>
                </div>
                )}
          </div> 
          
        );
      };
      export default FileDrop;


