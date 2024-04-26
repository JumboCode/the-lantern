import { IntegerType } from 'mongodb';
import React from 'react';

interface ButtonProps {
  text: string;
  action?: () => void;
  color: 'orange' | 'blue' | 'red';
  width?: string; // Optional 
  type?: 'button' | 'submit'; // Optional
  isLoading?: boolean; // Optional
}

const Buttonv2: React.FC<ButtonProps> = ({ text, action, color, width, type, isLoading}) => {
  const buttonStyles = {
    orange: {
      defaultBackgroundColor: 'bg-[#F79838]',
      hoverBackgroundColor: 'hover:bg-[#FFFFFF]',
      borderColor: 'border-[#FECB66]',
      defaultTextColor: 'text-[#000000]',
      hoverBorderColor: 'hover:border-[#FECB66]',
      hoverTextColor: 'hover:text-[#F79838]', 
    },
    blue: {
      defaultBackgroundColor: 'bg-[#4279BC]',
      hoverBackgroundColor: 'hover:bg-[#FFFFFF]',
      borderColor: 'border-[#94BBE3]',
      defaultTextColor: 'text-[#FFFFFF]',
      hoverBorderColor: 'hover:border-[#94BBE3]',
      hoverTextColor: 'hover:text-[#4279BC]', 
    },
    red: {
      defaultBackgroundColor: 'bg-[#ed1313]',
      hoverBackgroundColor: 'hover:bg-[#FFFFFF]',
      borderColor: 'border-[#f58e8e]',
      defaultTextColor: 'text-[#FFFFFF]',
      hoverBorderColor: 'hover:border-[#94BBE3]',
      hoverTextColor: 'hover:text-[#4279BC]', 
    },
  };
  
  const fallbackStyle = {
    defaultBackgroundColor: '',
    hoverBackgroundColor: '',
    borderColor: '',
    defaultTextColor: '',
    hoverBorderColor: '',
    hoverTextColor: '',
  };

  const {
    defaultBackgroundColor,
    hoverBackgroundColor,
    defaultTextColor,
    borderColor,
    hoverBorderColor,
    hoverTextColor,
  } = buttonStyles[color] || fallbackStyle; // Use fallbackStyle if buttonStyles[color] is undefined

  return (
    <button
      type={type} 
      className={`py-2 ${width} font-nunitobold items-center tracking-wide text-lg rounded-full border-2 font-bold ${defaultBackgroundColor} ${borderColor} ${defaultTextColor} ${hoverBackgroundColor} ${hoverBorderColor} ${hoverTextColor} shadow-md relative transition-all duration-500`}
      onClick={action}
      disabled={isLoading} // Disable button when isLoading is true
    >
      {isLoading ? 'Loading...' : text} 
    </button>
  );
};

export default Buttonv2;
