import { useEffect, useState } from 'react';
import axios from 'axios';

const FileDrop = () => {
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
            <div class="dropdown">
                <select>
                        {fileList.map((url, index) => {
                        // Extract file name from the URL
                        let fileName = url.substring(url.lastIndexOf('/') + 1);
                        fileName = fileName.substring(fileName.indexOf('_') + 1);
                        
                        return (
                        <option key={index} >
                        <a href={url} target="_blank">{fileName.replace(/\.[^/.]+$/, "")}</a>
                        
                        </option>
                        );
                        })}
                </select>
          </div> 
          
        );
      };
      export default FileDrop;


