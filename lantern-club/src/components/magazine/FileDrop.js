import { useEffect, useState } from 'react';
import axios from 'axios';
import Link from 'next/link';

const FileDrop = () => {
        const [fileList, setFileList] = useState([]);
        const [currentImage, setCurrentImage] = useState('');

        useEffect(() => {
                const fetchFileList = async () => {
                try {
                        const response = await axios.get('/api/content/magazine/');
                        setFileList(response.data.urls);
                        if (response.data.urls.length > 0) {
                          console.log("HAVE U EVER MET A DATA?");
                                // Automatically set the first image as the current image
                                for (let i = 0; i < response.data.urls.length; i++) {
                                  
                                  console.log(response);
                                }
                                setCurrentImage(response.data.urls[0]);
                        }
                } catch (error) {
                        console.error('Error fetching file list:', error);
                }
                };


                fetchFileList();
        }, []);

        const handleImageChange = (event) => {
                setCurrentImage(event.target.value);
        };

        return (
            <div class="dropdown">
                <select onChange={handleImageChange} value={currentImage}>
                        {fileList.map((url, index) => {
                        // Extract file name from the URL
                        let fileName = url.substring(url.lastIndexOf('/') + 1);
                        fileName = fileName.substring(fileName.indexOf('_') + 1);
                        // console.log(`FEATURED? ${fileList[index]}`);
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


