import axios from "axios";

const FileDelete = async (keyName: string) => {
    try {
      const response = await axios.delete(`/api/content/magazine`, { 
        data: { keyName } 
      });
 
      if (response.data.success) {  
        console.log('File deleted successfully');
        return true;
      } else {
        console.log('Failed to delete the file');
        return false;
      }
    } catch (error) {
      console.error('Error deleting the file:', error);
      console.log('Error deleting the file');
      console.log(keyName)
      return false;
    }
}; export default FileDelete;
