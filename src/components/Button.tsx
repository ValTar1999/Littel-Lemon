import React from 'react';

interface ButtonProps {
  label: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset"; // Updated type prop to specific string literals
}

const Button: React.FC<ButtonProps> = ({ label, onClick, type = "button" }) => { // Default type to "button"
  return (
    <button 
      onClick={onClick} 
      type={type} 
      className="mt-2 bg-blue-500 text-white py-2 px-4 rounded transition-transform duration-200 hover:scale-105 hover:bg-blue-600"
    >
      {label}
    </button>
  );
};

export default Button;
