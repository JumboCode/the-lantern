import { Key, useEffect, useState } from 'react';
import axios from 'axios';

import FileUpload from ".//FileUpload";
import FileDrop from ".//FileDrop";
import Buttonv2 from "../Buttonv2";
import ConfirmModal from "../ConfirmModal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
// import extractFileKeyFromURL from '@/utils/extractFileKeyFromURL';

export default function MagazineAdmin({ magazines }: { magazines: any[]}) {

  const [showConfirmModal, setShowConfirmModal] = useState(false);

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
                            
                              <FontAwesomeIcon
                                icon={faTrashCan} 
                                width={100}
                                height={100}
                                size="2x"
                                onClick={() => setShowConfirmModal(true)}
                                className="cursor-pointer relative transition-all duration-300 hover:text-[#4279BC]"
                              />

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

