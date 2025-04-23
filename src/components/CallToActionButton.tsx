
import React from "react";

interface CallToActionButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement | HTMLAnchorElement> {
  href?: string;
  children: React.ReactNode;
  ariaLabel?: string;
  className?: string;
  style?: React.CSSProperties;
}

const CallToActionButton: React.FC<CallToActionButtonProps> = ({
  href,
  children,
  ariaLabel,
  className = "",
  ...props
}) => {
  const baseClasses = `
    bg-business-200
    hover:bg-business-300
    text-gray-900
    rounded-lg
    font-montserrat
    font-semibold
    text-base
    py-3
    px-8
    shadow-md
    whitespace-normal
    min-h-[52px]
    flex items-center
    justify-center
    transition-colors
    duration-200
    leading-snug
    w-full
    md:w-auto
    focus:outline-none
    focus-visible:ring-2
    focus-visible:ring-business-600
    focus-visible:ring-offset-2
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
