import React from "react";

interface ButtonProps {
  label: string;
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ label, onClick }) => {
  const buttonStyle: React.CSSProperties = {
    backgroundColor: 'green', 
    color: 'white',
    border: '2px', 
    borderRadius: '3px', 
    display: 'flex',
    font: 'courier'
  };

  return (
    <button style={buttonStyle} onClick ={onClick}>
      {label}
    </button>
  );
};

export default Button;
