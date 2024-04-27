import { useState } from 'react';

import FileUpload from ".//FileUpload";
import FileDrop from ".//FileDrop";
import Buttonv2 from "../Buttonv2";
import ConfirmModal from "../ConfirmModal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import FileDelete from '@/utils/FileDelete';
// import extractFileKeyFromURL from '@/utils/extractFileKeyFromURL';

export default function MagazineAdmin({ magazines }: { magazines: any[]}) {

  const [showConfirmModal, setShowConfirmModal] = useState<string | null>(null);
  const headerFont = "font-coolvetica text-6xl leading-tight";
  const subheaderFont = "font-nunito text-2xl leading-tight font-bold";
  

  return (
    <div className="-mt-20 p-20 pt-40 w-full yellow-gradient flex gap-5 flex-col">
            <p className={headerFont}>Edit magazine issues</p>
          <div className =" my-7">
            <p className={subheaderFont}>Featured Issue</p>
            <FileDrop />
          </div>
          
          <div className = "mt-7"> 
            <p className={subheaderFont}>Past Issues</p>
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
                  <button onClick={() => setShowConfirmModal(keyName)
                  }
                  >                            
                      <div className="svg-container hover:underline decoration-orange-400" >
                    
                      <FontAwesomeIcon
                        icon={faTrashCan} 
                        width={100}
                        height={100}
                        size='2x'
                        className="cursor-pointer relative transition-all duration-300 hover:text-[#4279BC]"
                      />

                      </div>
                      </button>
                      <ConfirmModal isVisible={showConfirmModal === keyName} onClose={() => {setShowConfirmModal(null)}} onDelete={() =>  {FileDelete(keyName); setShowConfirmModal(null)}}/>
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

