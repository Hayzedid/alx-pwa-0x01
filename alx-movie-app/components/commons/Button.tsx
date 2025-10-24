import React from 'react';

interface ButtonProps {
  title: string;
  action?: () => void;
  className?: string;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({ 
  title, 
  action, 
  className = '', 
  disabled = false 
}) => {
  return (
    <button
      onClick={action}
      disabled={disabled}
      className={`bg-[#E2D609] text-black font-semibold py-3 px-8 rounded-lg hover:bg-[#D4C608] transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed ${className}`}
    >
      {title}
    </button>
  );
};

export default Button;
