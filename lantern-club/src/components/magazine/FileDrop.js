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
                {/* <select id="cars" name="cars">
                        <option value="volvo">Volvo</option>
                        <option value="saab">Saab</option>
                        <option value="fiat">Fiat</option>
                        <option value="audi">Audi</option>
                </select> */}
                <select>
                        {fileList.map((url, index) => {
                        // Extract file name from the URL
                        const fileName = url.substring(url.lastIndexOf('/') + 1);

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


