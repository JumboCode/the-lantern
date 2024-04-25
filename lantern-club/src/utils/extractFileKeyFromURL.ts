
const extractFileKeyFromURL = (url: string) => {
    // Create a URL object to easily access parts of the URL.
    const urlObj = new URL(url);
  
    // Get the pathname part of the URL, which includes the key.
    let key = urlObj.pathname;
  
    // Remove the leading '/' from the pathname to get the key.
    key = key.substring(1);
  
    // Decode the key to convert URL-encoded parts back to the original characters.
    return decodeURIComponent(key);
} 

export default extractFileKeyFromURL
