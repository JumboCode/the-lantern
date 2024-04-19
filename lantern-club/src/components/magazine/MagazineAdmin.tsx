import { Key, useEffect, useState } from 'react';
import axios from 'axios';

import FileUpload from ".//FileUpload";
import FileDrop from ".//FileDrop";
import Buttonv2 from "../Buttonv2";
import ConfirmModal from "../ConfirmModal";
// import extractFileKeyFromURL from '@/utils/extractFileKeyFromURL';

export default function MagazineAdmin({ magazines }: { magazines: any[]}) {

  const [showConfirmModal, setShowConfirmModal] = useState(false);

  const [hoveredTrashCans, setHoveredTrashCans] = useState<{ [key: number]: boolean }>({});

  const handleMouseEnter = (index: number) => {
    setHoveredTrashCans(prevState => ({
      ...prevState,
      [index]: true
    }));
  };

  const handleMouseLeave = (index: number) => {
    setHoveredTrashCans(prevState => ({
      ...prevState,
      [index]: false
    }));
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
        fontWeight: 'bold',

      };
      
      const FileDelete = async (keyName: string) => {
        try {
          const response = await axios.delete(`/api/content/magazine`, { 
            data: { keyName } 
          });
     
          if (response.data.success) {

            // console.log('File List before filtering:', fileList);
            // console.log('Key Name to remove:', keyName);
            // magazines.filter((fileUrl) => {
            //     return extractFileKeyFromURL(fileUrl) !== keyName;
            // });

            
            alert('File deleted successfully');
          } else {
            alert('Failed to delete the file');
          }
          setShowConfirmModal(false);
        } catch (error) {
          console.error('Error deleting the file:', error);
          alert('Error deleting the file');
          alert(keyName)

        }
      };

        return (
            <div className="-mt-20 p-20 pt-40 w-full yellow-gradient flex gap-5 flex-col">
                    <p style={headerFont}>Edit magazine issues</p>
                  
                  <div className =" my-7">

                    <p style={subheaderFont}>Featured Issue</p>
                    <FileDrop />
                  </div>
                  
                  <div className = "mt-7"> 
                    <p style={subheaderFont}>Past Issues</p>
                  </div>

                  <ul>
                      {magazines.map((url: string, index: number) => {
                      // Extract file name from the URL
                      const keyName = "uploads/" + url.substring(url.lastIndexOf('/') + 1);
                      let fileName = keyName.substring(keyName.indexOf('_') + 1);
                      fileName = fileName.replace(/\.[^/.]+$/, "");

                      return (
                          <li key={index} >
                          
                          {/* gets rid of the file extension */}
                          <div className="flex pt-5 align-bottom">
                          <a className="w-80 md:w-96 font-bold" href={url} target="_blank">{fileName}</a>
                          <button onClick={() => setShowConfirmModal(true)
                          }
                          >                            
                             <div className="svg-container hover:underline decoration-orange-400" >
                                  
                                  <svg 
                                      className="w-10 h-10"                                      
                                      viewBox="0 0 32 32" 
                                      fill="none" 
                                      xmlns="http://www.w3.org/2000/svg" 
                                  >   
                                      <path
                                          className="path"
                                          d="M26 7H21V6C21 5.20435 20.6839 4.44129 20.1213 3.87868C19.5587 3.31607 18.7956 3 18 3H12C11.2044 3 10.4413 3.31607 9.87868 3.87868C9.31607 4.44129 9 5.20435 9 6V7H4C3.73478 7 3.48043 7.10536 3.29289 7.29289C3.10536 7.48043 3 7.73478 3 8C3 8.26522 3.10536 8.51957 3.29289 8.70711C3.48043 8.89464 3.73478 9 4 9H5V27C5 27.5304 5.21071 28.0391 5.58579 28.4142C5.96086 28.7893 6.46957 29 7 29H23C23.5304 29 24.0391 28.7893 24.4142 28.4142C24.7893 28.0391 25 27.5304 25 27V9H26C26.2652 9 26.5196 8.89464 26.7071 8.70711C26.8946 8.51957 27 8.26522 27 8C27 7.73478 26.8946 7.48043 26.7071 7.29289C26.5196 7.10536 26.2652 7 26 7ZM11 6C11 5.73478 11.1054 5.48043 11.2929 5.29289C11.4804 5.10536 11.7348 5 12 5H18C18.2652 5 18.5196 5.10536 18.7071 5.29289C18.8946 5.48043 19 5.73478 19 6V7H11V6ZM23 27H7V9H23V27ZM13 14V22C13 22.2652 12.8946 22.5196 12.7071 22.7071C12.5196 22.8946 12.2652 23 12 23C11.7348 23 11.4804 22.8946 11.2929 22.7071C11.1054 22.5196 11 22.2652 11 22V14C11 13.7348 11.1054 13.4804 11.2929 13.2929C11.4804 13.1054 11.7348 13 12 13C12.2652 13 12.5196 13.1054 12.7071 13.2929C12.8946 13.4804 13 13.7348 13 14ZM19 14V22C19 22.2652 18.8946 22.5196 18.7071 22.7071C18.5196 22.8946 18.2652 23 18 23C17.7348 23 17.4804 22.8946 17.2929 22.7071C17.1054 22.5196 17 22.2652 17 22V14C17 13.7348 17.1054 13.4804 17.2929 13.2929C17.4804 13.1054 17.7348 13 18 13C18.2652 13 18.5196 13.1054 18.7071 13.2929C18.8946 13.4804 19 13.7348 19 14Z"
                                          fill={hoveredTrashCans[index] ? '#4279BC' : 'black'}
                                          onMouseEnter={() => handleMouseEnter(index)}
                                          onMouseLeave={() => handleMouseLeave(index)}
                                      />
                                      

                                  </svg>
                              </div>
                              </button>
                              <ConfirmModal isVisible={showConfirmModal} onClose={() => {setShowConfirmModal(false)}} onDelete={() => FileDelete(keyName)} />
                          </div>
                          </li>
                      );
                      })}
                  </ul>

                  <FileUpload />
                  <Buttonv2 text="Save" action={() => console.log('okk>>')} color="blue" width="w-48" />
              
           </div>   
            
        );
}

