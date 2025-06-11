
import React from "react";

type SimpleContactButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

const SimpleContactButton: React.FC<SimpleContactButtonProps> = ({
  children,
  className = "",
  ...props
}) => (
  <button
    type="submit"
    className={`
      w-full font-montserrat font-semibold text-lg
      bg-business-600 hover:bg-business-700 
      text-white rounded-lg px-8 py-4
      transition-all duration-300 hover:scale-105
      focus:outline-none focus:ring-2 focus:ring-business-500 focus:ring-offset-2
      shadow-md hover:shadow-lg
      ${className}
    `}
    {...props}
  >
    {children}
  </button>
);

export default SimpleContactButton;
