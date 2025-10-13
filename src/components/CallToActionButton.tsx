
import React from "react";

interface CallToActionButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement | HTMLAnchorElement> {
  href?: string;
  children: React.ReactNode;
  ariaLabel?: string;
  className?: string;
  style?: React.CSSProperties;
  variant?: "primary" | "secondary" | "outline";
  size?: "default" | "large" | "small";
}

const CallToActionButton: React.FC<CallToActionButtonProps> = ({
  href,
  children,
  ariaLabel,
  className = "",
  variant = "primary",
  size = "default",
  ...props
}) => {
  const getVariantClasses = () => {
    switch (variant) {
      case "secondary":
        return "bg-business-300 hover:bg-business-400 text-business-900";
      case "outline":
        return "bg-transparent border-2 border-business-600 text-business-600 hover:bg-business-50";
      case "primary":
      default:
        return "bg-business-600 hover:bg-business-700 text-white";
    }
  };
  
  const getSizeClasses = () => {
    switch (size) {
      case "small":
        return "py-2 px-6 text-sm";
      case "large":
        return "py-4 px-10 text-lg";
      case "default":
      default:
        return "py-3 px-8";
    }
  };
  
  const baseClasses = `
    ${getVariantClasses()}
    ${getSizeClasses()}
    rounded-lg
    font-montserrat
    font-semibold
    shadow-md
    whitespace-nowrap
    min-h-[52px]
    flex items-center
    justify-center
    transition-all
    duration-300
    leading-tight
    w-full
    md:w-auto
    focus:outline-none
    focus-visible:ring-2
    focus-visible:ring-business-600
    focus-visible:ring-offset-2
    hover:scale-105
    transform
    overflow-visible
    mx-auto
  `.replace(/\s+/g, " ");
  
  if (href) {
    return (
      <a
        href={href}
        className={`${baseClasses} ${className}`}
        aria-label={ariaLabel}
        {...props}
      >
        <span className="w-full text-center">{children}</span>
      </a>
    );
  }

  return (
    <button
      type="button"
      className={`${baseClasses} ${className}`}
      aria-label={ariaLabel}
      {...props}
    >
      <span className="w-full text-center">{children}</span>
    </button>
  );
};

export default CallToActionButton;
