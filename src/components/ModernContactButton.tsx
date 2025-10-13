
import React from "react";

type ModernContactButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

const ModernContactButton: React.FC<ModernContactButtonProps> = ({
  children,
  className = "",
  ...props
}) => (
  <button
    type="submit"
    aria-label="Solicitar análise gratuita de oportunidades de financiamento e crescimento"
    className={`
      relative inline-flex items-center justify-center font-montserrat 
      font-bold text-base md:text-lg rounded-2xl px-6 md:px-8 py-4 md:py-5 w-full
      bg-gradient-to-r from-business-200 via-business-400 to-business-600
      text-business-900 shadow-lg transition-all duration-300
      border-2 border-business-300
      hover:from-business-300 hover:to-business-700
      hover:scale-105 focus:outline-none focus-visible:ring-2 
      focus-visible:ring-business-700 focus-visible:ring-offset-2
      min-h-[56px] md:min-h-[60px]
      overflow-visible
      mx-auto
      max-w-full
      ${className}
    `}
    style={{
      letterSpacing: "0.01em",
      fontFamily: "'Montserrat', Norwester, sans-serif",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      whiteSpace: "nowrap",
      lineHeight: "1.2"
    }}
    {...props}
  >
    <span className="w-full text-center leading-tight px-2">
      {children}
    </span>
  </button>
);

export default ModernContactButton;
