import React from 'react';

interface ButtonProps {
  text: string;
  action: () => void;
  color: 'orange' | 'blue';
  width?: string; // Optional width prop
}

const Buttonv2: React.FC<ButtonProps> = ({ text, action, color, width }) => {
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
  };

  const {
    defaultBackgroundColor,
    hoverBackgroundColor,
    defaultTextColor,
    borderColor,
    hoverBorderColor,
    hoverTextColor,
  } = buttonStyles[color];

  return (
    <button
      className={`py-1.5 ${width} font-nunitosans items-center tracking-wide rounded-full border-2 font-bold ${defaultBackgroundColor} ${borderColor} ${defaultTextColor} ${hoverBackgroundColor} ${hoverBorderColor} ${hoverTextColor} shadow-md`}
      onClick={action}
    >
      {text}
    </button>
  );
};

export default Buttonv2;
