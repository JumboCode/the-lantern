import { useState } from 'react';

import FileUpload from ".//FileUpload";
import FileDrop from ".//FileDrop";
import ConfirmModal from "../ConfirmModal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import FileDelete from '@/utils/FileDelete';
import { useSession } from 'next-auth/react';
import extractFileNameFromURL from '@/utils/extractFileNameFromURL';

interface MagazineAdminProps {
  handleToggleAdminView: () => void
  onAddMagazine: (url: string) => void;  
  onDeleteMagazine: (url: string) => void;
  magazines: string[]
}
export default function MagazineDisplay ({ handleToggleAdminView, onAddMagazine, onDeleteMagazine, magazines }: MagazineAdminProps) {


  const [showConfirmModal, setShowConfirmModal] = useState<string | null>(null);
  const [magazineList, setMagazineList] = useState<string[]>(magazines);

  const { data: session } = useSession();
  const headerFont = "font-coolvetica text-6xl leading-tight";
  const subheaderFont = "font-nunito text-2xl leading-tight font-bold";
  
  const handleDeleteMagazine = async (keyName: string, fileUrl: string) => {
    
    const success = await FileDelete(keyName);
    if (success) {
      onDeleteMagazine(fileUrl);  
      setMagazineList(prevMagazines => prevMagazines.filter(url => url !== fileUrl));
      setShowConfirmModal(null)
    }
  };

  
  
  const handleUploadSuccess = (fileUrl: string) => {
    onAddMagazine(fileUrl);  // Assuming you want to use the prop function
    setMagazineList(prevMagazines => [...prevMagazines, fileUrl]);
  };

  
  return (
      <div className="yellow-gradient -mt-20 py-40 px-2 md:px-20 w-full p-20">
            <div className="flex gap-10 md:text-8xl text-6xl items-end">
              <p className={headerFont}>Edit Magazine Issues</p>
              {session?.user.isAdmin && (
                <button className="font-nunito underline text-2xl cursor-pointer relative transition-all duration-300 hover:text-orange-400" onClick={handleToggleAdminView}>
                    Edit
                </button>
              )}
            </div>
              
            <div className ="my-7">

              <p className={subheaderFont}>Featured Issue</p>
              <FileDrop magazines={magazineList} />
            </div>
            
            <div className = "mt-20"> 
              <p className={subheaderFont}>Past Issues</p>
            </div>

            <ul className='pb-10'>
                {magazineList.map((url: string, index: number) => {
                // Extract file name from the URL
                const keyName = "uploads/" + url.substring(url.lastIndexOf('/') + 1);
                let fileName = extractFileNameFromURL(url);

                return (
                    <li key={index}>
                      <div className="flex pt-5 align-bottom">
                        <a className="w-80 md:w-96 font-bold hover:text-[#4279BC]" href={url} target="_blank">{fileName}</a>
                        <button onClick={() => setShowConfirmModal(keyName)
                      }>                            
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
                      <ConfirmModal isVisible={showConfirmModal === keyName} onClose={() => {setShowConfirmModal(null)}} onDelete={() =>  handleDeleteMagazine(keyName, url)}/>
                      </div>
                    </li>);
                })}
            </ul>

            <FileUpload onUploadSuccess={handleUploadSuccess} />
           </div>   
            
        );
}

