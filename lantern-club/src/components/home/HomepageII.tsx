import React from 'react';
import Image from 'next/image';
import Buttonv2 from '@/components/Buttonv2';

export default function ResourcesI() {
  const headerFont = {
    fontFamily: 'coolvetica',
    fontSize: '90px',
    lineHeight: '1',
  };

  const imageStyle = {
    minHeight: '300px',
    minWidth: '300px',
  };

  const triangleStyle = {
    backgroundColor: '#FECB66',
  };

  const triangleStyle2 = {
        backgroundColor: '#FFFFFF',
        clipPath: 'polygon(0 0, 100% 0, 100% 75%, 50% 100%, 0 75%)',
      };

  const handleButtonClick = () => {
        console.log('Button clicked!');
  };


  return (
    <div>
      <div className="-mt-32 md:-mt-24 pb-24 pt-triangle-top w-full h-58 yellow-gradient flex flex-col md:flex-row md:grid md:grid-cols-2" id="pentagon-body">
        
        {/* Image column */}
        <div className="flex justify-center items-center px-5 my-12">
          <Image
            src={"/images/define.png"}
            height={300}
            width={300}
            style={imageStyle}
            alt="Define picture"
          />
        </div>
        

        {/* Text column */}
        <div className="px-4 flex flex-col justify-center items-start md:text-left">
          <p style={headerFont}>Check out our latest</p>
          <div className="h-20 text-left flex flex-col justify-start items-start">
          <h1 style={headerFont}>issue!</h1>
          <svg className="mx-6 px-6 py-6 ml-0 h-48" overflow="visible" width="220" height="80" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path transform="translate(170, -95)" d="M312.273 92.3941C312.727 92.7081 313.35 92.5943 313.664 92.1399L318.781 84.7359C319.095 84.2815 318.981 83.6587 318.527 83.3447C318.072 83.0307 317.45 83.1445 317.136 83.5988L312.587 90.1802L306.006 85.6321C305.552 85.3181 304.929 85.4319 304.615 85.8863C304.301 86.3406 304.415 86.9635 304.869 87.2774L312.273 92.3941ZM1.05578 0.748224C1.48046 2.4678 1.92201 4.15137 2.38012 5.79956L4.30707 5.26397C3.85427 3.63487 3.41761 1.97 2.99744 0.268698L1.05578 0.748224ZM5.32514 15.2693C6.4754 18.5876 7.70284 21.7411 9.00423 24.7363L10.8386 23.9393C9.55846 20.9931 8.34932 17.8871 7.21483 14.6143L5.32514 15.2693ZM13.3708 33.7036C15.0189 36.728 16.7576 39.558 18.5822 42.2029L20.2285 41.0672C18.4453 38.4824 16.743 35.7123 15.1269 32.7466L13.3708 33.7036ZM24.8441 50.199C27.1435 52.7813 29.5481 55.1329 32.0501 57.2681L33.3484 55.7468C30.9169 53.6717 28.5775 51.3842 26.3377 48.8689L24.8441 50.199ZM40.1641 63.2444C43.0296 65.052 45.9941 66.6308 49.0476 67.9993L49.8655 66.1742C46.8953 64.8431 44.0144 63.3085 41.2311 61.5528L40.1641 63.2444ZM58.4959 71.5008C61.6902 72.4571 64.9615 73.2245 68.3002 73.8212L68.6521 71.8523C65.3829 71.2681 62.186 70.5178 59.0696 69.5848L58.4959 71.5008ZM78.2926 75.1001C81.5896 75.3667 84.9399 75.4948 88.3356 75.5L88.3386 73.5C84.9911 73.4949 81.6937 73.3686 78.4538 73.1066L78.2926 75.1001ZM98.3372 75.1823C101.628 74.9754 104.953 74.6718 108.306 74.2847L108.077 72.2979C104.755 72.6814 101.464 72.9817 98.2117 73.1862L98.3372 75.1823ZM118.229 72.9194C121.501 72.4017 124.792 71.8184 128.098 71.1811L127.72 69.2173C124.433 69.8508 121.164 70.4302 117.917 70.944L118.229 72.9194ZM137.888 69.1551C141.123 68.4433 144.366 67.6911 147.613 66.909L147.144 64.9646C143.909 65.7441 140.678 66.4933 137.458 67.2019L137.888 69.1551ZM157.307 64.4959C160.531 63.6709 163.752 62.8265 166.967 61.9733L166.453 60.0403C163.243 60.8924 160.028 61.7352 156.812 62.5584L157.307 64.4959ZM176.596 59.3932C179.824 58.5233 183.038 57.6551 186.235 56.7983L185.717 54.8665C182.518 55.7237 179.302 56.5927 176.076 57.4621L176.596 59.3932ZM195.876 54.2459C199.117 53.4016 202.333 52.5811 205.518 51.7957L205.039 49.8539C201.843 50.6418 198.619 51.4645 195.372 52.3105L195.876 54.2459ZM215.167 49.5133C218.464 48.7709 221.719 48.081 224.926 47.4568L224.544 45.4936C221.315 46.1221 218.04 46.8162 214.728 47.5621L215.167 49.5133ZM234.729 45.7438C238.079 45.232 241.364 44.8133 244.575 44.5043L244.383 42.5135C241.131 42.8265 237.809 43.2501 234.427 43.7667L234.729 45.7438ZM254.449 43.9133C257.842 43.8469 261.129 43.9384 264.3 44.21L264.471 42.2173C261.221 41.9389 257.863 41.8461 254.41 41.9137L254.449 43.9133ZM273.99 45.7104C277.239 46.4682 280.326 47.4793 283.238 48.7736L284.051 46.9461C281.012 45.5954 277.803 44.5462 274.444 43.7627L273.99 45.7104ZM291.61 53.6682C294.144 55.5701 296.495 57.7893 298.648 60.3598L300.181 59.0756C297.931 56.3886 295.468 54.0634 292.811 52.0687L291.61 53.6682ZM304.108 68.4355C305.578 71.1317 306.902 74.0943 308.071 77.3433L309.953 76.6664C308.752 73.3289 307.387 70.2718 305.864 67.4783L304.108 68.4355ZM310.811 86.7064C311.191 88.3312 311.54 90.0123 311.858 91.7511L313.825 91.3917C313.502 89.6222 313.146 87.9091 312.759 86.251L310.811 86.7064ZM311.705 93.2168C312.613 93.8447 313.859 93.6171 314.487 92.7084L324.72 77.9003C325.348 76.9916 325.121 75.7459 324.212 75.118C323.303 74.49 322.058 74.7176 321.43 75.6263L312.333 88.789L299.171 79.6928C298.262 79.0648 297.016 79.2924 296.388 80.2011C295.76 81.1098 295.988 82.3555 296.896 82.9835L311.705 93.2168ZM0.0849515 0.98799C0.511888 2.7167 0.955884 4.40962 1.41665 6.06736L5.27055 4.99617C4.8204 3.37662 4.38619 1.7211 3.96828 0.0289321L0.0849515 0.98799ZM4.3803 15.5968C5.53844 18.9379 6.77503 22.1151 8.08706 25.1348L11.7557 23.5408C10.4863 20.6191 9.28628 17.5368 8.15968 14.2867L4.3803 15.5968ZM12.4927 34.1821C14.1568 37.2359 15.9137 40.0958 17.7591 42.7707L21.0516 40.4993C19.2892 37.9446 17.6051 35.2045 16.005 32.2681L12.4927 34.1821ZM24.0972 50.864C26.4265 53.4798 28.8637 55.8635 31.401 58.0288L33.9976 54.9862C31.6013 52.9412 29.2944 50.6857 27.0845 48.2039L24.0972 50.864ZM39.6306 64.0902C42.5372 65.9237 45.5434 67.5247 48.6387 68.9119L50.2745 65.2617C47.346 63.9492 44.5068 62.4368 41.7646 60.7071L39.6306 64.0902ZM58.2091 72.4588C61.4423 73.4267 64.7508 74.2027 68.1243 74.8056L68.828 70.8679C65.5937 70.2899 62.4339 69.5482 59.3564 68.6268L58.2091 72.4588ZM78.212 76.0969C81.5375 76.3658 84.9143 76.4948 88.334 76.5L88.3401 72.5C85.0167 72.4949 81.7458 72.3696 78.5344 72.1099L78.212 76.0969ZM98.4 76.1803C101.71 75.9722 105.052 75.667 108.421 75.2781L107.962 71.3045C104.656 71.6862 101.383 71.9849 98.1489 72.1882L98.4 76.1803ZM118.386 73.9071C121.669 73.3875 124.972 72.8022 128.288 72.1631L127.531 68.2354C124.254 68.867 120.995 69.4444 117.76 69.9563L118.386 73.9071ZM138.103 70.1318C141.345 69.4183 144.595 68.6646 147.847 67.8812L146.91 63.9924C143.68 64.7706 140.456 65.5183 137.243 66.2252L138.103 70.1318ZM157.555 65.4647C160.782 64.6387 164.007 63.7936 167.223 62.9398L166.197 59.0737C162.989 59.9254 159.776 60.7673 156.564 61.5896L157.555 65.4647ZM176.856 60.3588C180.085 59.4887 183.298 58.6207 186.494 57.7643L185.459 53.9006C182.259 54.758 179.041 55.6273 175.816 56.4966L176.856 60.3588ZM196.128 55.2136C199.366 54.3701 202.577 53.5507 205.757 52.7666L204.8 48.8829C201.599 49.6722 198.37 50.496 195.12 51.3428L196.128 55.2136ZM215.387 50.4888C218.675 49.7483 221.921 49.0604 225.117 48.4384L224.353 44.5121C221.113 45.1426 217.829 45.8388 214.508 46.5865L215.387 50.4888ZM234.88 46.7323C238.214 46.2229 241.481 45.8067 244.67 45.4997L244.287 41.5181C241.014 41.8331 237.674 42.2591 234.276 42.7782L234.88 46.7323ZM254.469 44.9131C257.831 44.8473 261.083 44.9381 264.215 45.2064L264.556 41.221C261.267 40.9392 257.874 40.8457 254.391 40.9139L254.469 44.9131ZM273.763 46.6843C276.957 47.4292 279.983 48.4212 282.832 49.6874L284.457 46.0323C281.355 44.6535 278.086 43.5852 274.671 42.7888L273.763 46.6843ZM291.01 54.468C293.482 56.3234 295.777 58.4896 297.881 61.0019L300.948 58.4335C298.649 55.6883 296.13 53.3101 293.411 51.2689L291.01 54.468ZM303.23 68.914C304.673 71.5617 305.977 74.477 307.13 77.6817L310.894 76.328C309.677 72.9463 308.291 69.8419 306.742 66.9997L303.23 68.914ZM309.837 86.9341C310.213 88.5423 310.559 90.2074 310.874 91.9308L314.809 91.212C314.483 89.4271 314.124 87.698 313.732 86.0233L309.837 86.9341Z" fill="black"/>
          </svg>
          </div>
          <div className="flex flex-row justify-between md:pt-8 pb-20 md:pb-8 items-center w-full mt-5">
            <p className="font-nunito text-xl">Issue No 1 Spring 2023</p>
            <a href="/Magazine">
            <div>
                <Buttonv2 text="Read it here!" action={handleButtonClick} color="blue" width="w-40"/>
            </div>
            </a>
            <a href="/Magazine" className="position: relative; top: -30px;">
          </a>
          </div>
        </div>
      </div>
      {/* <div className="h-20 w-full" style={triangleStyle} id="triangle"></div> */}
    </div>
  );
}