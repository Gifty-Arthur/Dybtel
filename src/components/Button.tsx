import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  type = "button",
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className="mt-8 w-full rounded-full bg-green-500 py-4 text-lg font-bold text-white/80 shadow-xl transition-colors hover:bg-green-600 focus:outline-none focus:ring-4 focus:ring-green-300"
    >
      {children}
    </button>
  );
};

export default Button;
