
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
      w-full font-montserrat font-semibold text-base md:text-lg
      bg-business-600 hover:bg-business-700 
      text-white rounded-lg px-6 py-3 md:px-8 md:py-4
      transition-all duration-300 hover:scale-[1.02]
      focus:outline-none focus:ring-2 focus:ring-business-500 focus:ring-offset-2
      shadow-md hover:shadow-lg
      min-h-[48px] md:min-h-[52px]
      flex items-center justify-center
      text-center leading-tight
      ${className}
    `}
    {...props}
  >
    {children}
  </button>
);

export default SimpleContactButton;
