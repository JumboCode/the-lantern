
const extractFileNameFromURL = (url: string) => {
  const parts = url.split('_').slice(1).join('_');
          let split = parts.split('.');
          split.pop();
          let finalName = split.join(".").replace(/_/g,' ');
          return finalName;

} 

export default extractFileNameFromURL
