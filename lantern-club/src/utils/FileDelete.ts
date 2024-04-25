import axios from "axios";

const FileDelete = async (keyName: string) => {
    try {
      const response = await axios.delete(`/api/content/magazine`, { 
        data: { keyName } 
      });
 
      if (response.data.success) {  
        console.log('File deleted successfully');
      } else {
        console.log('Failed to delete the file');
      }
    } catch (error) {
      console.error('Error deleting the file:', error);
      console.log('Error deleting the file');
      console.log(keyName)
    }
}; export default FileDelete;
