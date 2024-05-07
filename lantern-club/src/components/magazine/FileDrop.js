// FileDrop.jsx

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Link from 'next/link';
import extractFileNameFromURL from '@/utils/extractFileNameFromURL';

const FileDrop = ({magazines}) => {
        const [currentImage, setCurrentImage] = useState('');
        const handleDeleteFeaturedMag = async () => {
          
          const url = `/api/content/magazine/featuredmag`;

          try {
            await fetch(url, { method: "DELETE" });
          } catch (error) {
            console.error("Failed to switch the featured mag:", error);
          }
        };

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
                    const featuredResponse = await fetch("/api/content/magazine/featured", { method: "GET" });
                    const featuredData = await featuredResponse.json();
                    if (featuredData.length > 0) {
                      const featured = featuredData[0].cloudURL;
                      setCurrentImage(featured);
                    }
            } catch (error) {
                    console.error('Error fetching file list:', error);
            }
          }
          fetchFileList();
        }, []);

        const handleImageChange = (event) => {
                              
                handleDeleteFeaturedMag();
                handleFeatureMag(event.target.value);
                
                setCurrentImage(event.target.value);
        };

        

    return (
        <div>
            <select className='w-1/2 flex' style={{ padding: '10px', borderRadius: '5px', border: '2px solid #FFA500', marginRight: '10px', backgroundColor: '#fff' }} onChange={handleImageChange} value={currentImage}>
                {magazines.map((url, index) => {
                    let fileName = extractFileNameFromURL(url);
                    return (
                        <option key={index} value={url}>
                            {fileName}
                        </option>
                    );
                })}
            </select>
            {currentImage && (
                <div style={{ marginTop: '20px', textAlign: 'center' }}>
                    <Link href={currentImage}>
                        <iframe src={currentImage} alt="Selected" style={{ maxWidth: '100%', maxHeight: '500px', objectFit: 'contain' }} />
                    </Link>
                </div>
            )}
        </div> 
    );
};

export default FileDrop;
