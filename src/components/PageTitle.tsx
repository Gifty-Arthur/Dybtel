import React from "react";

interface TitleProps {
  children: React.ReactNode;
  className?: string;
}

const Title: React.FC<TitleProps> = ({ children, className }) => {
  const combinedClasses = `text-2xl font-bold text-green-500 ${
    className || ""
  }`;

  return <h1 className={combinedClasses}>{children}</h1>;
};

export default Title;
